import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
    DiscordIcon,
    // LangIcon,
    TwitterIcon,
    // YoutubeIcon,
    MenuIcon,
    CloseIcon,
    // WalletIcon,
} from '../../svg';
import styles from './index.module.scss';

const paths = [
    { path: '/', name: 'HOME' },
    { path: '/roadmap', name: 'ROADMAP' },
    { path: '/mint', name: 'MINT' },
    { path: '/synthesis', name: 'SYNTHESIS' },
    { path: '', name: 'GALLERY' },
    // { path: '', name: 'wallet', components: <WalletIcon /> },
    {
        path: 'https://twitter.com/0xleopardgod',
        name: 'twitter',
        components: <TwitterIcon />,
    },
    { path: 'https://discord.gg/GdPzmcpxQ2', name: 'discord', components: <DiscordIcon /> },
    // {
    //     path: '',
    //     name: 'youtube',
    //     components: <YoutubeIcon />,
    // },
    // {
    //     path: '',
    //     name: 'language',
    //     components: <LangIcon />,
    // },
];

const title = 'LEOPARD GOD NFT';
const description = 'A synthesis-profitable collected and synthetic NFT project.';
const creator = '3x3Labs';
const ogImage = 'https://www.leopardgod.com/images/root/universe.jpeg';

export default function Header() {
    const router = useRouter();
    const [showMMenu, setShowMMenu] = useState(false);
    const path = router.pathname;
    useEffect(() => {
        setShowMMenu(false);
    }, [path]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta
                    name="keywords"
                    content="Leopard, Leopard God, Leopard God NFT, Leopard NFT, NFT, Synthetic NFT, Non-Fungible Token"
                />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0,viewport-fit=cover"
                />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="https://leopardgod.com" />
                <meta property="og:image" content={ogImage} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={title} />
                <meta property="og:type" content="product" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:image" content={ogImage} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:creator" content={creator} />
                <meta property="twitter:site" content={title} />
                <meta property="twitter:description" content={description} />
            </Head>
            <header>
                <div className={`${styles.navigator} bg-[#15141a] text-white`}>
                    <Link href="/">
                        <a>
                            <Image src="/images/root/lg.png" width={140} height={13} alt="logo" />
                        </a>
                    </Link>
                    <div className={styles.menu}>
                        {paths.map((it) => (
                            <div
                                key={it.name}
                                className={`${
                                    router.pathname === it.path ? 'font-bold border-b-2' : ''
                                } ${it.path ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            >
                                {it.components ? (
                                    <>
                                        <span className="lg:hidden">{it.name}</span>
                                        <a
                                            href={it.path}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center"
                                        >
                                            {it.components}
                                        </a>
                                    </>
                                ) : it.path ? (
                                    <Link href={it.path}>{it.name}</Link>
                                ) : (
                                    <span>{it.name}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.mobileNavigator} ${showMMenu ? styles.showBG : ''}`}>
                    <div className={`text-[#D7C19A] h-14 flex justify-between items-center`}>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/images/root/lg_m.png"
                                    width={159}
                                    height={15}
                                    alt="logo"
                                />
                            </a>
                        </Link>
                        {showMMenu ? (
                            <div onClick={() => setShowMMenu(false)}>
                                <CloseIcon />
                            </div>
                        ) : (
                            <div className="lg:hidden" onClick={() => setShowMMenu(true)}>
                                <MenuIcon />
                            </div>
                        )}
                    </div>

                    {showMMenu && (
                        <div className="mt-10">
                            {paths.map((it) => (
                                <div key={it.name} className={`border-b border-b-white pb-4 mb-4`}>
                                    {it.components ? (
                                        <a
                                            href={it.path}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex justify-between items-center"
                                        >
                                            <span className="uppercase lg:hidden">{it.name}</span>
                                            {it.components}
                                        </a>
                                    ) : (
                                        <Link href={it.path}>{it.name}</Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
