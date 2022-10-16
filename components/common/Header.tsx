import Link from 'next/link';
import { DiscordIcon, OpenseaIcon, TwitterIcon, VectorIcon, YoutubeIcon } from '../svg';

export default function Header() {
    return (
        <header className="text-lg px-8 py-5 flex justify-between items-center">
            <h1 className="rui-font rounded">
                <Link href="/">合成豹子</Link>
            </h1>
            <div className="navigator flex items-center">
                <div>
                    <Link href="/home">首页</Link>
                </div>
                <div>
                    <Link href="/mint">Mint</Link>
                </div>
                <div>
                    <Link href="/roadmap">路线图</Link>
                </div>
                <div>
                    <Link href="/gallery">画廊</Link>
                </div>
                <div>合成</div>
                <div>
                    <a href="https://github.com/Godiswill" target="_blank" rel="noreferrer">
                        <OpenseaIcon />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Godiswill" target="_blank" rel="noreferrer">
                        <DiscordIcon />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Godiswill" target="_blank" rel="noreferrer">
                        <TwitterIcon />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Godiswill" target="_blank" rel="noreferrer">
                        <VectorIcon />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Godiswill" target="_blank" rel="noreferrer">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
            <style jsx>{`
                .navigator > div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 12px;
                    height: 30px;
                    border-radius: 4px;
                }
                .navigator > div:hover {
                    background-color: #b5b5b5;
                }
                .navigator > div + div {
                    margin-left: 12px;
                }
                a {
                    display: flex;
                    align-items: center;
                }
            `}</style>
            <style global jsx>
                {`
                    .navigator > div svg {
                        height: 20px;
                    }
                `}
            </style>
        </header>
    );
}
