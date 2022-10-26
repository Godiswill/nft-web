import Link from 'next/link';
import { useRouter } from 'next/router';
import { DiscordIcon, OpenseaIcon, TwitterIcon, VectorIcon, YoutubeIcon } from '../svg';

const paths = [
    { path: '/home', name: '首页' },
    { path: '/mint', name: 'Mint' },
    { path: '/roadmap', name: '路线图' },
    { path: '/gallery', name: '画廊' },
    { path: '/404', name: '合成' },
    { path: 'https://opensea.com', components: <OpenseaIcon /> },
    { path: 'https://discord.com', components: <DiscordIcon /> },
    { path: 'https://twitter.com', components: <TwitterIcon /> },
    { path: 'https://www.instagram.com', components: <VectorIcon /> },
    { path: 'https://youtube.com', components: <YoutubeIcon /> },
];

export default function Header() {
    const router = useRouter();
    return (
        <header className="px-8 py-5 flex justify-between items-center">
            <h1
                className={`font-[RuiYan] rounded ${
                    router.pathname === '/'
                        ? ' pl-3 pr-3 pt-1 pb-1 border border-white bg-white bg-opacity-25'
                        : ''
                }`}
            >
                <Link href="/">合成豹子</Link>
            </h1>
            <div className="navigator flex items-center">
                {paths.map((it) => (
                    <div
                        key={it.path}
                        className={`flex justify-center items-center pl-3 pr-3 ml-3 h-8 rounded hover:bg-[#b5b5b5] ${
                            router.pathname === it.path ? 'bg-[#b5b5b5]' : ''
                        }`}
                    >
                        {it.components ? (
                            <a
                                href={it.path}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center"
                            >
                                {it.components}
                            </a>
                        ) : (
                            <Link href={it.path}>{it.name}</Link>
                        )}
                    </div>
                ))}
            </div>
            <style global jsx>
                {`
                    .navigator > div svg {
                        height: 1.25rem;
                    }
                `}
            </style>
        </header>
    );
}
