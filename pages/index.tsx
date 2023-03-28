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
import { TwitterIcon, DiscordIcon, OpenseaIcon, YoutubeIcon } from '@/components/svg';

export default function Page() {
    return (
        <Layout className="tiger" mainClassName="">
            <Head>
                <title>Leopard God</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <div className="relative h-[46rem]">
                <Image
                    src="/images/root/universe.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Leopard God Universe"
                />
            </div>
            <div className="text-white text-center pb-4">
                <h1 className="text-5xl pt-14 pb-5">LEOPARD GOD SERIES NFT</h1>
                <h2 className="text-xl text-[#D7C19A] pb-8">
                    THE FIRST-EVER COLLECTED AND MERGE NFT PROJECT
                </h2>
                <div className="relative h-[20rem]">
                    <Image
                        src="/images/root/skin.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="lg-skin"
                    />
                </div>
                <p className="w-[64rem] mx-auto px-[10rem] py-6 font-light border-b	border-[#848484]">
                    The LEOPARD GOD series-NFT is the first merged and collected NFT project, which
                    aims to encourage users to collect and merge by providing them with generous
                    merger rewards and a very highly playable project experience, so that users can
                    highly participate and enjoy it.
                </p>
                <h1 className="mt-8 text-5xl">NFT ARTWORK INTRODUCTION</h1>
                <p className="w-[64rem] mx-auto px-[10rem] py-6 font-light">
                    The LEOPARD GOD series NFT consists of 10000 round leopard NFT and 10000 leopard
                    god NFT. The former needs to be minted by pre-sale and formula, while the latter
                    can only be merged and minted by round leopard NFT for free.
                </p>
                <div className="w-[62rem] mx-auto flex justify-center pt-4 pb-9">
                    <div className="border-r border-[#616161] pr-16">
                        <Image
                            className="rounded-2xl"
                            src="/images/root/leopard.gif"
                            height={315}
                            width={315}
                            alt="leopard"
                        />
                        <div className="bg-[#D7C19A] p-1 w-72 mx-auto rounded-sm text-black my-4">
                            ROUND LEOPARD NFT
                        </div>
                        <div className="w-96">
                            As the initial minted NFT, the total number of round leopard NFT is
                            10000, with each piece consisting of three round leopard parts with
                            different colors in different directions and also different backgrounds.
                        </div>
                    </div>
                    <div className="pl-16">
                        <Image
                            className="rounded-2xl"
                            src="/images/root/leopardgod.gif"
                            height={315}
                            width={315}
                            alt="leopardgod"
                        />
                        <div className="bg-[#D7C19A] p-1 w-72 mx-auto rounded-sm text-black my-4">
                            LEOPARD GOD NFT
                        </div>
                        <div className="w-96">
                            The leopard god NFT can only be minted by round leopard NFT mergence,
                            with a total of 10000. Each leopard god NFT image is made up of a
                            different crown, head, glasses, and background.
                        </div>
                    </div>
                </div>
                <div className="relative h-[50rem]">
                    <Image
                        src="/images/root/worldview.jpg"
                        layout="fill"
                        objectFit="contain"
                        alt="worldview"
                    />
                </div>
                <h1 className="text-5xl">THE STORY OF WORLD VIEW</h1>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    The Leopard God was born in the early chaos of the universe. At that time, the
                    universe was in a haze, nothing but endless nothingness. So the Leopard God
                    decided to create a world. He created our world with six elements in the
                    universe, namely, water, wood, sand, ice, fire and earth. Then he used these
                    elements to create oceans, forests, deserts, glaciers, lava, and the earth.
                    However, the Leopard God found that the world he created was full of
                    instability, with tsunamis, plant withering, sandstorms, heavy snow, scorching
                    sun, and earthquakes wreaking havoc on the world from time to time. Then the
                    Leopard God found the heart of the deep sea in the oceans, the heart of the
                    forest in the dark woods, the heart of the desert in the barren deserts, the
                    heart of the glacier in the severe cold glaciers, the heart of lava in the
                    roaring volcanos, and the heart of the earth in the underground caves,
                    constituting these six most precious stones in the world. He used them to make
                    six powerful supreme crowns. He stablized the world by the divine power of these
                    six supreme crowns, which helped him maintain a balanced and harmonious nature,
                    and thus made the world a paradise for life. Since then, countless lives began
                    to spring up. Human beings and animals flourished in a harmonious nature, thus
                    provided rich products, supporting countless lives. However, in the deep
                    darkness and endless nothingness, there is a pair of eyes peeping into all this.
                    It&apos;s the God of Nothingness. Much earlier than the Leopard God, the God of
                    Nothingness has long existed in this world as early as the universe came into
                    being. It existed in the endless nothingness. The God of Nothingness would erase
                    anything existed, even a speck of dust will be eliminated without a trace,
                    leaving a world of nothingness. The God of Nothingness came from nothingness to
                    the world created by Leopard God, trying to make everything disappear. But in
                    order to protect all the living beings in the world he created, the Leopard God
                    fought fiercely against the God of Nothingne
                </p>
                <h1 className="text-5xl py-6">MERGED SYSTEM</h1>
                <h2 className="text-[#D7C19A]">SUMMON THE LEOPARD GOD</h2>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    The soul of the Leopard God is divided into three parts: courage, kindness, and
                    wisdom, which are sealed in different places. As long as you collect all the
                    three parts of the soul, you can summon the Leopard God.
                </p>
                <div>
                    <Image
                        className="rounded-2xl"
                        src="/images/root/diagram.jpg"
                        height={627}
                        width={885}
                        alt="schematic diagram"
                    />
                </div>
                <h1 className="text-5xl py-6">THE BENEFITS OF MERGE LEOPARD GOD NFT</h1>
                <div className="w-[64rem] mx-auto py-4">
                    <h2 className="flex items-center pb-4">
                        GAIN MUCH HIGHER BONUSES: <div className="flex-1 h-px bg-[#848484] ml-8" />
                    </h2>
                    <div className="flex">
                        <div className="flex-1 font-light text-left py-4 pr-8">
                            As long as you hold the round leopard NFT or the leopard god NFT, you
                            can participate in the monthly-held lucky draw. However, the monthly
                            lucky draw amount of the leopard god NFT will be 4 times that of the
                            round leopard NFT, which means that you will have a chance to get a
                            higher bonus with the leopard god NFT than the round leopard NFT.
                            Moreover, if you hold both the round leopard NFT and the leopard god
                            NFT, you can participate in both lucky draws and get much more bonus
                            benefits, so holding leopard god NFT also means broadening your bonus
                            income sources.
                            <div>LUCKY DRAW</div>
                        </div>
                        <div className="relative flex-1">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/images/root/etthereum.png"
                                alt="etthereum"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[64rem] mx-auto py-4">
                    <h2 className="flex items-center pb-4">
                        <div className="flex-1 h-px bg-[#848484] mr-8" />
                        BE ABLE TO CLAIM THE SUPREME CROWN PRIZE:
                    </h2>
                    <div className="flex">
                        <div className="relative flex-1">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/images/root/crown.png"
                                alt="crown"
                            />
                        </div>
                        <div className="flex-1 font-light text-left py-4 pl-8">
                            In order to encourage users to collect and merge, we have set up a very
                            generous prize: the Supreme Crown Prize. As long as you win the prize, a
                            very generous bonus will be given to you. The prerequisite for receiving
                            the Supreme Crown Prize is to collect all leopard god NFT with six
                            supreme crowns. Each merged leopard god NFT has a randomly assigned
                            crown. This means that no matter which round leopard NFT you use to
                            merge, you will have the chance to merge a leopard god NFT with a
                            supreme crown. And if you are lucky enough to receive the Supreme Crown
                            version of leopard god NFT, you will have the opportunity to receive the
                            Supreme Crown Prize with an extremely generous bonus.
                            <div>SUPREME CROWN PRIZE</div>
                        </div>
                    </div>
                </div>
                <h1 className="text-5xl py-6">RULE OF MERGER</h1>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    Each round leopard NFT image consists of 3 round leopard parts in different
                    colors and directions of top, left and right. In the round leopard NFT images,
                    three round leopard parts with different directions of the same color can be
                    merged into a leopard god NFT of the same color for free.
                </p>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    Each round leopard NFT can be merged up to 3 times, and the parts that have
                    already been merged into leopard gods in each round leopard NFT image cannot
                    continue to be merged with other round leopard images, whereas, the unmerged
                    parts in one can continue to merge new leopard gods with other round leopard
                    images. After running out of the number of mergence times, each round leopard
                    NFT will only lose its mergence function, instead of being destroyed.
                </p>
                <div className="relative w-[62rem] h-[30rem] mx-auto">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/images/root/merge.png"
                        alt="merge"
                    />
                </div>
                <h1 className="text-5xl py-6">REPEATED SYNTHESIS RULE</h1>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    In the 3 round leopard NFT images below, there are 2 sets of round leopard parts
                    of the same color in different directions, then they can merge 2 leopard god NFT
                    of the same color for free.
                </p>
                <div className="relative w-[62rem] h-[10rem] mx-auto">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/images/root/merge2.png"
                        alt="merge2"
                    />
                </div>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    In the 3 round leopard NFT images below, there are 3 sets of round leopard parts
                    of the same color in different directions, then they can merge 3 leopard god NFT
                    of the same color for free.
                </p>
                <div className="relative w-[62rem] h-[10rem] mx-auto">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/images/root/merge3.png"
                        alt="merge3"
                    />
                </div>
                <h1 className="text-5xl pt-14 pb-5">BONUS SYSTEM</h1>
                <h2 className="text-xl text-[#D7C19A] pb-8">BREAK THE SEAL OF THE LEOPARD GOD</h2>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    Unseal the Leopard God: Once you have collected all 6 Supreme crowns, you can
                    unseal the Leopard God. and those who unseal will also get rich rewards.
                </p>
                <div className="relative h-[36rem]">
                    <Image
                        src="/images/root/supreme-crown.jpg"
                        layout="fill"
                        objectFit="contain"
                        alt="supreme-crown"
                    />
                </div>
                <h1 className="text-5xl pt-14 pb-5">BONUS SYSTEM COMPONENTS</h1>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    The bonus system is designed to bring more fun and benefits to community
                    users.Our bonus system consists of two parts, one is the bonus pool system, the
                    other is the lucky draw system.
                </p>
                <div className="w-[48rem] px-12 py-3 mb-6 mx-auto border border-[#D7C19A] rounded-3xl text-left">
                    <h2 className="text-xl text-[#D7C19A] pb-4">BONUS POOL SYSTEM</h2>
                    <p className="font-light">
                        The bonus system is designed to bring more fun and benefits to community
                        users.Our bonus system consists of two parts, one is the bonus pool system,
                        the other is the lucky draw system.
                    </p>
                </div>
                <div className="w-[48rem] px-12 py-3 mb-6 mx-auto border border-[#D7C19A] rounded-3xl text-left">
                    <h2 className="text-xl text-[#D7C19A] pb-4">LUCKY DRAW SYSTEM</h2>
                    <p className="font-light">
                        The lucky draw system is designed to promote user transactions. In the
                        system, we have designed three kinds of awards, namely, the monthly lucky
                        draw of round leopard NFT and leopard god NFT and the Supreme Crown Award.
                        The bonuses of these awards come from the funds accumulated by the bonus
                        pool system. Since the bonus pool funds are made up of 20% mint fees and 4%
                        of each transaction fee in the secondary market, it means that the more mint
                        users and secondary market transactions, the higher the transaction fees, so
                        the more bonuses can be accumulated in the bonus pool, and then the more
                        bonuses the winners will get.
                    </p>
                </div>
                <div className="w-[48rem] px-12 py-3 mb-6 mx-auto border border-[#D7C19A] rounded-3xl text-left">
                    <h2 className="text-xl text-[#D7C19A] pb-4">MONTHLY ROUND LEOPARD AWARD</h2>
                    <p className="font-light">
                        As long as you own the round leopard NFT, you will be able to participate in
                        the lucky draw for round leopard NFT users four times a month on the 6th,
                        13th, 20th and 27th of each month. with the bonus accounting for 5% of the
                        total amount of the current bonus pool. And the unconsumed bonus in the
                        current month will be automatically accumulated into the prize pool of the
                        next month.
                    </p>
                </div>
                <div className="w-[48rem] px-12 py-3 mb-6 mx-auto border border-[#D7C19A] rounded-3xl text-left">
                    <h2 className="text-xl text-[#D7C19A] pb-4">MONTHLY LEOPARD GOD AWARD</h2>
                    <p className="font-light">
                        If you hold a leopard god NFT, you will be able to participate in a monthly
                        lucky draw for leopard god NFT users on the 27th monthly. with the bonus
                        accounting for 20% of the total amount of the current bonus pool. And the
                        unconsumed bonus in the current month will be automatically accumulated into
                        the prize pool of the next month.
                    </p>
                </div>
                <div className="w-[48rem] px-12 py-3 mb-6 mx-auto border border-[#D7C19A] rounded-3xl text-left">
                    <h2 className="text-xl text-[#D7C19A] pb-4">SUPREME CROWN AWARD</h2>
                    <p className="font-light">
                        If you collect all leopard god NFT with six supreme crowns, then you can
                        receive the Crown Award, which can be received only once a month, on the
                        27th of each month. There will be one winner each time, with the bonus
                        accounting for 60% of the total amount of the current bonus pool. If no one
                        receives it in the current month, the bonus will be automatically
                        accumulated into the bonus pool of the next month.
                    </p>
                </div>
                <h1 className="text-5xl pt-14 pb-5">FLOW CHART OF BONUS DISTRIBUTION</h1>
                <p className="w-[64rem] px-[10rem] mx-auto py-4 font-light">
                    Attention: The supreme crown bonuses and monthly lucky draw bonuses come from
                    not only the accumulated funds--automatically deducted 4% ETH of transaction
                    fees for each transaction in the secondary market, but NFT holders can also
                    inject more money into the bonus pool at any time to increase the bonus chips.
                </p>
                <div className="bg-[#D7C19A] p-1 w-96 mx-auto rounded-sm text-black my-4 text-xs">
                    INJECT MORE WINNINGS INTO THE BONUS POOL
                </div>
                <div className="w-[64rem] px-8 mx-auto border border-[#D7C19A] rounded-3xl">
                    <div className="relative w-[60rem] h-72">
                        <Image
                            src="/images/root/prize-pool.png"
                            layout="fill"
                            objectFit="contain"
                            alt="prize pool"
                        />
                    </div>
                </div>
                <h1 className="text-5xl pt-14 pb-5">ROADMAP</h1>
                <div className="relative h-[44rem] w-[35rem] mx-auto my-6 rounded-2xl overflow-hidden">
                    <Image
                        src="/images/root/forest-leopard.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="forest leopard"
                    />
                </div>
                <div className="w-[60rem] mx-auto">
                    {[
                        {
                            name: 'ROADMAP 1.0 STAGE',
                            items: [
                                {
                                    title: 'OPERATIONAL ACTIVITIES ON SOCIAL MEDIA',
                                    desc: 'Use LEOPARD GOD-exclusive social media, Twitter, Instagram and Youtube promotion to advertise our project.',
                                },
                                {
                                    title: 'BUILD COMMUNITIES',
                                    desc: 'Build Discord community channel for users to build our communities.',
                                },
                                {
                                    title: 'LAUNCH THE OFFICIAL WEBSITE',
                                    desc: 'The official website of LEOPARD GOD is on service, the website we open mint, where you can purchase your own NFT, or use round leopard NFT to merge a new leopard god NFT. In addition, you can join our official social media channels and communities through the official website. You can also go to our official opensea link through the official website to trade in the secondary market.',
                                },
                                {
                                    title: 'WL PRESALE',
                                    desc: 'The project party will invite active users in the community to join in the WL, and set presale (time undetermined) for WL users. Through WL presale, it is more likely for users to buy at a lower price and also spend less time gaining NFT.',
                                },
                                {
                                    title: 'OPEN PUBLIC SALE',
                                    desc: 'You can go to our official website to mint after the opening of the public sale (time to be determined). All you need to do is to connect your wallet address to the LEOPARD GOD website in order to purchase your own LEOPARD GOD series NFT.',
                                },
                                {
                                    title: 'OPEN MERGENCE SYSTEM',
                                    desc: 'After the merger system is opened, you can go to our official website to merge the new leopard god NFT with your round leopard NFT for free.',
                                },
                                {
                                    title: 'OPEN BONUS SYSTEM',
                                    desc: 'After the bonus system is opened, you can participate in our monthly-hold lucky draw. Besides, the supreme crown prize is waiting for you. As long as you have collected all the six supreme crowns, you can carry the supreme crown prize home, so as to gain more fun and proceeds.',
                                },
                            ],
                        },
                        {
                            name: 'ROADMAP 2.0 STAGE',
                            items: [
                                {
                                    title: 'BUILD A FASHION BRAND',
                                    desc: 'We hope to build a powerful fashion brand around the LEOPARD GOD series. We will develop characteristic products around clothing, cool fun, artwork and so on.',
                                },
                                {
                                    title: 'ISSUE TOKENS',
                                    desc: 'Considering our long-term development goals, we will issue our own tokens. We will hand out free tokens to holders of the LEOPARD GOD NFT series.',
                                },
                                {
                                    title: 'DEVELOP NEW BLOCKCHAIN GAMES',
                                    desc: 'Most of our team members come from the world&apos; TOP5 game developers, who have rich experience in game development. We will follow up on the development of new blockchain games and provide more project benefits to our early supporters.',
                                },
                            ],
                        },
                    ].map(({ name, items }) => (
                        <React.Fragment key={name}>
                            <h2 className="text-xl text-[#D7C19A] py-6 border-b border-b-[#5F5E5F]">
                                ROADMAP 1.0 STAGE
                            </h2>
                            {items.map(({ title, desc }) => (
                                <div
                                    key={title}
                                    className="text-left flex justify-between items-center border-b py-4 border-b-[#5F5E5F]"
                                >
                                    <div className="w-60 text-2xl">{title}</div>
                                    <div className="w-96">{desc}</div>
                                    <div className="rounded-[50%] w-11 h-11 border border-[#D5BFB2]"></div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                    <div className="w-36 mx-auto my-9 py-2 border border-[#575757] rounded-3xl">
                        STAY TUNED
                    </div>
                </div>
                <div className="w-[64rem] mx-auto">
                    <h1 className="text-5xl pt-14 pb-5">THE TEAM</h1>
                    <h2 className="text-[#D7C19A] pb-8">LEOPARD GOD SERIES-NFT</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="team-wiper"
                    >
                        {[
                            { name: 'ZK', title: 'Technical Director and Founder' },
                            { name: 'GH', title: 'Art Director and Founder' },
                            { name: 'L', title: 'Marketing Director and Founder' },
                            { name: 'Jane', title: 'Operation Director and Founder' },
                        ].map(({ name, title }, index) => (
                            <SwiperSlide key={name}>
                                <div className="w-72 h-[30rem] rounded-3xl bg-[#272D37] flex flex-col justify-around items-center">
                                    <div className="relative w-64 h-64 rounded-3xl overflow-hidden">
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            src={`/images/nft/${index + 1}.jpeg`}
                                            alt={title}
                                        />
                                    </div>
                                    <div>{name}</div>
                                    <div>{title}</div>
                                    <TwitterIcon className="w-5 h-5" />
                                    <button className="bg-[#5293FE] px-4 py-1 rounded-2xl">
                                        Follow
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="w-[64rem] h-52 flex justify-between items-center mx-auto my-10 py-8 border-t border-b border-[#5F5E5F]">
                    <div className="flex-1 flex h-full flex-col justify-between text-left">
                        <div className="flex">
                            <div className="w-12 h-12 rounded-[50rem] bg-white/20"></div>
                            <div className="ml-3">
                                <div className="text-[#8393AF]">Mail</div>
                                <div>0xleopardgod@gmail.com</div>
                            </div>
                        </div>
                        <div>©2023 3×3Lab</div>
                    </div>
                    <div className="flex-1">
                        <Image src="/images/root/logo.png" width={122} height={114} alt="logo" />{' '}
                    </div>
                    <div className="flex-1 flex h-full flex-col justify-between items-end text-right">
                        <div className="flex justify-between w-44">
                            <TwitterIcon className="h-5 w-5" />
                            <DiscordIcon className="h-5 w-5" />
                            <OpenseaIcon className="h-5 w-5" />
                            <YoutubeIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div>TERMS & CONDITIONS</div>
                            <div>INTRODUCTION DOCUMENT</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
