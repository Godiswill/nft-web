import Link from 'next/link';
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
    { path: '/home', name: '首页' },
    { path: '/mint', name: 'Mint' },
    { path: '/roadmap', name: '路线图' },
    // { path: '/gallery', name: '画廊' },
    { path: '', name: '画廊' },
    // { path: '/404', name: '合成' },
    { path: '', name: '合成' },
    { path: 'https://opensea.com', name: 'opensea', components: <OpenseaIcon /> },
    { path: 'https://discord.gg/zXmcZ5dgR7', name: 'discord', components: <DiscordIcon /> },
    {
        path: 'https://twitter.com/syntheticleopa?s=11&t=LYu5K-LvqG14Xi0U-ULAfw',
        name: 'twitter',
        components: <TwitterIcon />,
    },
    {
        path: 'https://www.instagram.com/syntheticleopard/',
        name: 'instagram',
        components: <VectorIcon />,
    },
    {
        path: 'https://youtube.com/channel/UCVvRG1VjJSsu6b-mWigoK3Q',
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
                <div className={`${styles.navigator}`}>
                    <h1
                        className={`font-[RuiYan] rounded ${
                            router.pathname === '/'
                                ? 'pl-3 pr-3 pt-1 pb-1 lg:border lg:border-white lg:bg-white lg:bg-opacity-25'
                                : ''
                        }`}
                    >
                        <Link href="/">合成豹子</Link>
                    </h1>
                    <div className={styles.menu}>
                        {paths.map((it) => (
                            <div
                                key={it.name}
                                className={` ${router.pathname === it.path ? 'bg-[#b5b5b5]' : ''} ${
                                    it.path ? 'cursor-pointer' : 'cursor-not-allowed'
                                }`}
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
