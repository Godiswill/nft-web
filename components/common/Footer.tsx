import Image from 'next/image';
import { TwitterIcon, DiscordIcon, YoutubeIcon, EnvelopeIcon } from '@/components/svg';
import Divider from '@/components/common/Divider';

export default function Footer() {
    return (
        <div className="text-white text-center pb-4">
            <Divider />
            <div>
                <div className="block md:hidden">
                    <Image src="/images/root/logo.png" width={122} height={114} alt="logo" />
                </div>
                <div className="lg:w-[1024px] lg:mx-auto h-52 flex justify-between items-center p-4">
                    <div className="flex-1 flex h-full flex-col justify-between text-left">
                        <div className="flex">
                            <div className="flex justify-center items-center w-12 h-12 rounded-[800px] bg-white/20">
                                <EnvelopeIcon className="text-white" />
                            </div>
                            <div className="ml-3">
                                <div className="text-[#8393AF]">Mail</div>
                                <div>0xleopardgod@gmail.com</div>
                            </div>
                        </div>
                        <div>©2023 3×3Lab</div>
                    </div>
                    <div className="hidden md:block flex-1">
                        <Image src="/images/root/logo.png" width={122} height={114} alt="logo" />
                    </div>
                    <div className="flex-1 flex h-full flex-col justify-between items-end text-right">
                        <div className="flex justify-between items-center lg:w-44">
                            {[
                                {
                                    path: 'https://twitter.com/0xleopardgod',
                                    name: 'TWITTER',
                                    components: <TwitterIcon className="ml-2 h-5 w-5" />,
                                },
                                {
                                    path: 'https://discord.gg/GdPzmcpxQ2',
                                    name: 'DISCORD',
                                    components: <DiscordIcon className="ml-2 h-5 w-5" />,
                                },
                                {
                                    path: 'https://www.youtube.com/@LeopardGod-yn1zr',
                                    name: 'YOUTUBE',
                                    components: <YoutubeIcon className="ml-2 h-5 w-5" />,
                                },
                            ].map((it) => (
                                <a key={it.name} href={it.path} target="_blank" rel="noreferrer">
                                    {it.components}
                                </a>
                            ))}
                        </div>
                        <div>
                            <div>TERMS & CONDITIONS</div>
                            <div>
                                <a className="hover:text-sky-400" href="#">
                                    INTRODUCTION DOCUMENT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    );
}
