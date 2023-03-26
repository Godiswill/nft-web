import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
    DiscordIcon,
    OpenseaIcon,
    TwitterIcon,
    VectorIcon,
    YoutubeIcon,
    MenuIcon,
    CloseIcon,
} from '../../svg';
import styles from './index.module.scss';

const paths = [
    { path: '', name: 'HOME' },
    { path: '', name: 'ROADMAP' },
    { path: '', name: 'BUY' },
    { path: '', name: 'SYNTHESIS' },
    // { path: '/gallery', name: '画廊' },
    { path: '', name: 'GALLERY' },
    // { path: '/404', name: '合成' },
    { path: 'https://opensea.com', name: 'opensea', components: <OpenseaIcon /> },
    { path: '', name: 'discord', components: <DiscordIcon /> },
    {
        path: '',
        name: 'twitter',
        components: <TwitterIcon />,
    },
    {
        path: '',
        name: 'instagram',
        components: <VectorIcon />,
    },
    {
        path: '',
        name: 'youtube',
        components: <YoutubeIcon />,
    },
];

export default function Header() {
    const router = useRouter();
    const [showMMenu, setShowMMenu] = useState(false);
    const path = router.pathname;
    useEffect(() => {
        setShowMMenu(false);
    }, [path]);

    console.log(styles);
    return (
        <>
            <header>
                <div className={`${styles.navigator} bg-[#15141a] text-white`}>
                    <h1 className={`font-[Osiris] text-xl text-[#D7C19A] rounded`}>
                        <Link href="/">
                            <Image src="/images/root/lg.png" width={140} height={13} alt="logo" />
                        </Link>
                    </h1>
                    <div className={styles.menu}>
                        {paths.map((it) => (
                            <div
                                key={it.name}
                                className={` ${
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
                    <div className={`font-[RuiYan] rounded h-14 flex justify-between items-center`}>
                        <h1 className="bg-[#B11010] px-3 py-1 rounded">
                            <Link href="/">合成豹子</Link>
                        </h1>
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
                        <div className="font-[RuiYan] mt-10">
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