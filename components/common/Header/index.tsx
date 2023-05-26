import Link from 'next/link';
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
    { path: '#roadmap', name: 'ROADMAP' },
    { path: '', name: 'BUY' },
    { path: '', name: 'SYNTHESIS' },
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

export default function Header() {
    const router = useRouter();
    const [showMMenu, setShowMMenu] = useState(false);
    const path = router.pathname;
    useEffect(() => {
        setShowMMenu(false);
    }, [path]);

    return (
        <>
            <header>
                <div className={`${styles.navigator} bg-[#15141a] text-white`}>
                    <Link href="/">
                        <Image src="/images/root/lg.png" width={140} height={13} alt="logo" />
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
                            <Image src="/images/root/lg_m.png" width={159} height={15} alt="logo" />
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
                                        <div className="flex justify-between">
                                            <span className="uppercase lg:hidden">{it.name}</span>
                                            <a
                                                href={it.path}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center"
                                            >
                                                {it.components}
                                            </a>
                                        </div>
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
