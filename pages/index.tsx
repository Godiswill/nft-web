import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper';
import Layout from '@/components/Layout';
import { TwitterIcon, DiscordIcon, OpenseaIcon, YoutubeIcon, EnvelopeIcon } from '@/components/svg';
import Divider from '@/components/common/Divider';

export default function Page() {
    return (
        <Layout className="tiger" mainClassName="home">
            <Head>
                <title>LEOPARD GOD NFT</title>
            </Head>
            <div className="relative h-[234px] lg:h-[736px]">
                <Image
                    src="/images/root/universe.jpeg"
                    // srcset="/images/root/universe_m.jpg 960w, /images/root/universe.jpg 1024w"
                    layout="fill"
                    objectFit="cover"
                    alt="Leopard God Universe"
                />
            </div>
            <div className="text-white text-center pb-4">
                <h1>LEOPARD GOD NFT</h1>
                <h2>A synthesis-profitable collected and synthetic NFT project</h2>
                <div className="relative h-[91px] lg:h-[320px]">
                    <Image
                        src="/images/root/skin.jpg"
                        // srcset="/images/root/universe_m.jpg 960w, /images/root/universe.jpg 1024w"
                        layout="fill"
                        objectFit="cover"
                        alt="lg-skin"
                    />
                </div>
                <p>
                    The LEOPARD GOD series - NFT is a synthesis-profitable, community-focused NFT
                    project that aims to foster a sense of excitement and fun around collecting and
                    synthesizing. We&apos;re offering generous synthesis rewards and a richly
                    project experience to ensure users fully engage with and enjoy the process.
                </p>
                {/* <Divider /> */}
                {/* <h1 className="mt-8">OVERVIEW OF LEOPARD GOD SERIES NFT ARTWORKS</h1>
                <p>
                    The LEOPARD GOD series NFT consists of two parts: 10,000 Round Leopard NFTs and
                    10,000 Leopard God NFTs. The allocation is as follows: 1,000 for airdrop, 2,000
                    for free minting, 3,000 for pre-sale, and 4,000 for Dutch auction. Round Leopard
                    NFTs can be acquired through these stages, while Leopard God NFTs can only be
                    synthesized and minted for free by holding Round Leopard NFTs.
                </p>
                <div className="lg:w-[992px] lg:mx-auto flex lg:px-20 justify-around pt-4 pb-9">
                    <div>
                        <div className="relative rounded-2xl w-44 h-44 lg:w-80 lg:h-80">
                            <Image
                                className="rounded-2xl"
                                src="/images/root/leopard.gif"
                                layout="fill"
                                objectFit="cover"
                                alt="leopard"
                            />
                        </div>
                        <div className="bg-[#D7C19A] p-1 text-xs lg:text-sm w-36 lg:w-72 mx-auto rounded-sm text-black my-4">
                            The Round Leopard NFT
                        </div>
                        <div className="w-44 lg:w-80">
                            The Round Leopard NFT, the initial minted NFT, totals 10,000. Each piece
                            consists of three Round Leopard parts with varying colors in different
                            directions and distinctive backgrounds.
                        </div>
                    </div>
                    <Divider className="mx-0" vertical />
                    <div>
                        <div className="relative rounded-2xl w-44 h-44 lg:w-80 lg:h-80">
                            <Image
                                className="rounded-2xl"
                                src="/images/root/leopardgod.gif"
                                layout="fill"
                                objectFit="cover"
                                alt="leopardgod"
                            />
                        </div>
                        <div className="bg-[#D7C19A] p-1 text-xs lg:text-sm w-36 lg:w-72 mx-auto rounded-sm text-black my-4">
                            The Leopard God NFT
                        </div>
                        <div className="w-44 lg:w-80">
                            The Leopard God NFT can only be minted by Round Leopard NFT synthesis,
                            with a total of 10,000. Each Leopard God NFT image features a unique
                            crown, head, glasses, and background.
                        </div>
                    </div>
                </div> */}
                <div className="relative h-64 lg:h-[800px]">
                    <Image
                        src="/images/root/worldview.jpg"
                        layout="fill"
                        objectFit="contain"
                        alt="worldview"
                    />
                </div>
                <h1>THE STORY OF LEOPARD GOD</h1>
                <p className="text-left">
                    The Leopard God was born in the early chaos of the universe. At that time, the
                    universe was in a haze, nothing but endless nothingness. So the Leopard God
                    decided to create a world. He created our world with six elements in the
                    universe, namely, water, wood, sand, ice, fire and earth. Then he used these
                    elements to create oceans, forests, deserts, glaciers, lava, and the earth.
                    However, the Leopard God found that the world he created was full of
                    instability, with tsunamis, plant withering, sandstorms, heavy snow, scorching
                    sun, and earthquakes wreaking havoc on the world from time to time.
                    <br />
                    <br />
                    Then the Leopard God found the heart of the deep sea in the oceans, the heart of
                    the forest in the dark woods, the heart of the desert in the barren deserts, the
                    heart of the glacier in the severe cold glaciers, the heart of lava in the
                    roaring volcanos, and the heart of the earth in the underground caves,
                    constituting these six most precious stones in the world. He used them to spring
                    up. Human beings and animals flourished in a harmonious nature, thus provided
                    rich products, supporting countless lives.
                    <br />
                    <br />
                    However, in the deep darkness and endless nothingness, there is a pair of eyes
                    peeping into all this. It&apos;s the God of Nothingness. Much earlier than the
                    Leopard God, the God of Nothingness has long existed in this world as early as
                    the universe came into being. It existed in the endless nothingness. The God of
                    Nothingness would erase anything existed, even a speck of dust will be
                    eliminated without a trace, leaving a world of nothingness. The God of
                    Nothingness came from nothingness to the world created by Leopard God, trying to
                    make everything disappear. But in order to protect all the living beings in the
                    world he created, the Leopard God fought fiercely against the God of
                    Nothingness.
                    <br />
                    <br />
                    Unfortunately, the God of Nothingness was so powerful that he disassembled the
                    Leopard God&apos;s soul into three parts, namely, courage, goodness, and wisdom,
                    and sealed them in different places, making it difficult for the Leopard God to
                    resurrect. But at the last moment, the Leopard God played his best cards--the
                    six supreme crowns, whose strong power drove the God of Nothingness away and
                    made him falling into the abyss of endless dark void, so that he could no longer
                    set foot in the world created by the Leopard God. However, those six supreme
                    crowns disappeared with the God of Nothingness.
                    <br />
                    <br />
                    No one knows their whereabouts. Without supreme crowns, the world will lose
                    stability and balance. That means natural disasters including tsunamis, plant
                    withering, sandstorms, heavy snow, scorching sun, and earthquakes would ravage
                    the world again. So, in order to get everything back on track, a group of kind
                    and brave humans are dedicated to finding the six supreme crowns of the Leopard
                    God. It is only the strong power of the six supreme crowns that can break the
                    seal of the leopard God, restoring a balanced and harmonious world.
                </p>
                {/* <Divider /> */}
                <h1 className="pt-14 pb-5">BONUS SYSTEM</h1>
                <h2 className="pb-8">BREAK THE SEAL OF THE LEOPARD GOD</h2>
                <p>
                    Unseal the Leopard God: Once you have collected all 6 Supreme crowns, you can
                    unseal the Leopard God. and those who unseal will also get rich rewards.
                </p>
                <div className="relative h-44 lg:h-[576px]">
                    <Image
                        src="/images/root/supreme-crown.jpg"
                        layout="fill"
                        objectFit="contain"
                        alt="supreme-crown"
                    />
                </div>
                <h1 className="pt-14 pb-5">BONUS SYSTEM COMPONENTS</h1>
                <p>
                    We have designed a set of bonus system for our community users, which is
                    designed to bring more fun and benefits to community users. Our bonus system
                    consists of two parts, one is the bonus pool system, the other is the lucky draw
                    system.
                </p>
                <div className="px-4 lg:w-[768px] lg:mx-auto ">
                    {[
                        {
                            title: 'BONUS POOL SYSTEM',
                            desc: (
                                <>
                                    <div>
                                        The Bonus Pool System is designed to accumulate funds for
                                        the Lucky Draw System, aiming to increase the benefits for
                                        the winners. The bonus pool serves as a prize pool wallet
                                        for the bonus system, with a publicly searchable and
                                        accessible address. This wallet is funded by 20% of Round
                                        Leopard mint fees, 3% of Round Leopard NFT transaction fees
                                        in the secondary market, and 3% of Leopard God NFT
                                        transaction fees in the secondary market.
                                    </div>
                                    <br />
                                    <div>
                                        Beyond the accumulation from 3% of NFT&apos;s transaction
                                        fees, NFT holders can voluntarily inject more funds into the
                                        bonus pool at any time to raise the prize pool. 50% of the
                                        monthly earnings will be channeled into the Leopard God NFT
                                        Monthly Lucky Draw prize pool. The remaining 50% of the
                                        monthly income will contribute to the Supreme Crown Award
                                        prize pool, which will continuously accumulate each month
                                        until someone collects all six Leopard God NFTs with supreme
                                        crowns and claims the entire bonus pool.
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: 'LUCKY DRAW SYSTEM',
                            desc: (
                                <>
                                    <div>
                                        The lucky draw system is designed to promote user
                                        transactions. In the system, we have designed two types of
                                        awards: Leopard God NFT Monthly Lucky Draw and the Supreme
                                        Crown Award. The bonuses for these awards come from the
                                        funds accumulated by the bonus pool system. Since the bonus
                                        pool funds are composed of 20% of mint fees and 3% of each
                                        transaction fee in the secondary market, this means that the
                                        more the Round Leopard NFT and Leopard God NFT are traded in
                                        the secondary market, the higher the transaction price, and
                                        the more bonuses can be accumulated in the bonus pool. This,
                                        in turn, means that the more significant the amount of
                                        bonuses that winners can receive.
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: 'MONTHLY LEOPARD GOD AWARD',
                            desc: (
                                <>
                                    If you hold a Leopard God NFT, you can participate in the lucky
                                    draw for Leopard God NFT users four times a month on the 6th,
                                    13th, 20th, and 27th of each month. Each month, half of the
                                    bonus pool for the Leopard God NFT will be used for the lucky
                                    draw, with the remainder accumulating for the next month&apos;s
                                    bonus pool.
                                </>
                            ),
                        },
                        {
                            title: 'SUPREME CROWN AWARD',
                            desc: (
                                <>
                                    50% of the monthly income will accumulate in the Crown Award
                                    bonus pool. This continues until a user, who has collected all
                                    six supreme crown Leopard God NFTs, can claim the entire bonus
                                    pool. The Crown Award can be claimed once a month, and only one
                                    person can claim it each time.
                                </>
                            ),
                        },
                    ].map(({ title, desc }) => (
                        <div
                            key={title}
                            className="px-6 pb-4 mb-6 border border-[#D7C19A] rounded-3xl text-left"
                        >
                            <h2>{title}</h2>
                            <div className="font-light">{desc}</div>
                        </div>
                    ))}
                </div>
                <p>
                    Note: The bonuses for the Supreme Crown Award and the monthly lucky draw are
                    derived from accumulated funds that are automatically deducted 3% ETH
                    transaction fees from each transaction in the secondary market. NFT holders also
                    have the opportunity to inject additional funds into the bonus pool at any time
                    to increase the prizes.
                </p>
                <div className="px-8">
                    <div className="bg-[#D7C19A] py-1 px-4 max-w-sm mx-auto my-4 rounded-sm text-black text-xs">
                        INJECT MORE WINNINGS INTO THE BONUS POOL
                    </div>
                </div>
                <div className="lg:w-[768px] lg:mx-auto">
                    <div className="flex justify-center border border-[#D7C19A] rounded-3xl">
                        <div className="relative h-[645px] lg:w-[500px] lg:h-[924px]">
                            <Image
                                src="/images/root/prize_pool.png"
                                layout="fill"
                                objectFit="contain"
                                alt="prize pool"
                            />
                        </div>
                    </div>
                </div> */}
                {/* <Divider /> */}
                <div className="lg:w-[1024px] mx-auto">
                    <h1 className="pt-14 pb-5">THE TEAM</h1>
                    <h2 className="pb-8">LEOPARD GOD NFT</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        pagination={false}
                        modules={[FreeMode, Pagination]}
                        className="team-wiper"
                    >
                        {[
                            {
                                name: 'ZK',
                                title: 'Technical Director and Founder',
                                twitter: 'https://twitter.com/ZK3X3labs',
                            },
                            {
                                name: 'GH',
                                title: 'Art Director and Founder',
                                twitter: 'https://twitter.com/GH3X3labs',
                            },
                            {
                                name: 'Ezekiel',
                                title: 'Marketing Director and Founder',
                                twitter: 'https://twitter.com/3X3labs',
                            },
                            {
                                name: 'Leo',
                                title: 'Operation Director and Founder',
                                twitter: 'https://twitter.com/0xleopardgod',
                            },
                        ].map(({ name, title, twitter }) => (
                            <SwiperSlide key={name}>
                                <div className="w-36 h-80 lg:w-72 lg:h-[480px] rounded-lg lg:rounded-3xl bg-[#272D37] flex flex-col justify-around items-center">
                                    <div className="relative w-24 h-24 lg:w-52 lg:h-52 overflow-hidden">
                                        <Image
                                            layout="fill"
                                            objectFit="contain"
                                            // src={`/images/nft/${index + 1}.jpg`}
                                            src={`/images/root/logo_m.png`}
                                            alt={title}
                                        />
                                    </div>
                                    <div>{name}</div>
                                    <div>{title}</div>
                                    <TwitterIcon className="w-5 h-5" />
                                    <a
                                        href={twitter}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-[#5293FE] px-4 py-1 rounded-2xl"
                                    >
                                        Follow
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
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
                            <Image
                                src="/images/root/logo.png"
                                width={122}
                                height={114}
                                alt="logo"
                            />
                        </div>
                        <div className="flex-1 flex h-full flex-col justify-between items-end text-right">
                            <div className="flex justify-between lg:w-44">
                                <TwitterIcon className="ml-2 h-5 w-5" />
                                <DiscordIcon className="ml-2 h-5 w-5" />
                                <OpenseaIcon className="ml-2 h-5 w-5" />
                                <YoutubeIcon className="ml-2 h-5 w-5" />
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
        </Layout>
    );
}
