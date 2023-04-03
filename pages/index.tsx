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
                <title>Leopard God</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <div className="relative h-[234px] lg:h-[736px]">
                <Image
                    src="/images/root/universe_m.jpg"
                    // srcset="/images/root/universe_m.jpg 960w, /images/root/universe.jpg 1024w"
                    layout="fill"
                    objectFit="cover"
                    alt="Leopard God Universe"
                />
            </div>
            <div className="text-white text-center pb-4">
                <h1>LEOPARD GOD SERIES NFT</h1>
                <h2>THE FIRST-EVER COLLECTED AND MERGE NFT PROJECT</h2>
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
                    The LEOPARD GOD series-NFT is the first merged and collected NFT project, which
                    aims to encourage users to collect and merge by providing them with generous
                    merger rewards and a very highly playable project experience, so that users can
                    highly participate and enjoy it.
                </p>
                <Divider />
                <h1 className="mt-8">NFT ARTWORK INTRODUCTION</h1>
                <p>
                    The LEOPARD GOD series NFT consists of 10000 round leopard NFT and 10000 leopard
                    god NFT. The former needs to be minted by pre-sale and formula, while the latter
                    can only be merged and minted by round leopard NFT for free.
                </p>
                <div className="lg:w-[992px] lg:mx-auto flex justify-center pt-4 pb-9">
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
                            ROUND LEOPARD NFT
                        </div>
                        <div className="w-44 lg:w-80">
                            As the initial minted NFT, the total number of round leopard NFT is
                            10000, with each piece consisting of three round leopard parts with
                            different colors in different directions and also different backgrounds.
                        </div>
                    </div>
                    <Divider className="mx-4 lg:mx-10" vertical />
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
                            LEOPARD GOD NFT
                        </div>
                        <div className="w-44 lg:w-80">
                            The leopard god NFT can only be minted by round leopard NFT mergence,
                            with a total of 10000. Each leopard god NFT image is made up of a
                            different crown, head, glasses, and background.
                        </div>
                    </div>
                </div>
                <div className="relative h-64 lg:h-[800px]">
                    <Image
                        src="/images/root/worldview.jpg"
                        layout="fill"
                        objectFit="contain"
                        alt="worldview"
                    />
                </div>
                <h1>THE STORY OF LEOPARD GOD</h1>
                <p>
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
                    fought fiercely against the God of Nothingness. Unfortunately, the God of
                    Nothingness was so powerful that he disassembled the Leopard God&apos;s soul
                    into three parts, namely, courage, goodness, and wisdom, and sealed them in
                    different places, making it difficult for the Leopard God to resurrect. But at
                    the last moment, the Leopard God played his best cards--the six supreme crowns,
                    whose strong power drove the God of Nothingness away and made him falling into
                    the abyss of endless dark void, so that he could no longer set foot in the world
                    created by the Leopard God. However, those six supreme crowns disappeared with
                    the God of Nothingness. No one knows their whereabouts. Without supreme crowns,
                    the world will lose stability and balance. That means natural disasters
                    including tsunamis, plant withering, sandstorms, heavy snow, scorching sun, and
                    earthquakes would ravage the world again. So, in order to get everything back on
                    track, a group of kind and brave humans are dedicated to finding the six supreme
                    crowns of the Leopard God. It is only the strong power of the six supreme crowns
                    that can break the seal of the leopard God, restoring a balanced and harmonious
                    world.
                </p>
                <h1 className="py-6">MERGED SYSTEM</h1>
                <h2>SUMMON THE LEOPARD GOD</h2>
                <p>
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
                <h1 className="py-6">THE BENEFITS OF MERGE LEOPARD GOD NFT</h1>
                <div className="lg:w-[1024px] lg:mx-auto p-4">
                    <h2 className="flex items-center pb-4">
                        GAIN MUCH HIGHER BONUSES: <div className="flex-1 h-px bg-[#848484] ml-8" />
                    </h2>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex-1 font-light text-left py-4 lg:pr-8">
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
                        <div className="relative h-40 lg:h-auto lg:flex-1">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/images/root/ethereum.png"
                                alt="ethereum"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[1024px] lg:mx-auto p-4">
                    <h2 className="flex items-center pb-4">
                        <div className="flex-1 h-px bg-[#848484] mr-8" />
                        BE ABLE TO CLAIM THE SUPREME CROWN PRIZE:
                    </h2>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="relative h-40 lg:h-auto lg:flex-1">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/images/root/crown.png"
                                alt="crown"
                            />
                        </div>
                        <div className="flex-1 font-light text-left py-4 lg:pl-8">
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
                <Divider />
                <h1 className="py-6">RULE OF MERGER</h1>
                <p>
                    Each round leopard NFT image consists of 3 round leopard parts in different
                    colors and directions of top, left and right. In the round leopard NFT images,
                    three round leopard parts with different directions of the same color can be
                    merged into a leopard god NFT of the same color for free.
                </p>
                <p>
                    Each round leopard NFT can be merged up to 3 times, and the parts that have
                    already been merged into leopard gods in each round leopard NFT image cannot
                    continue to be merged with other round leopard images, whereas, the unmerged
                    parts in one can continue to merge new leopard gods with other round leopard
                    images. After running out of the number of mergence times, each round leopard
                    NFT will only lose its mergence function, instead of being destroyed.
                </p>
                <div className="relative h-52 lg:w-[992px] lg:h-[480px] mx-auto">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/images/root/merge.png"
                        alt="merge"
                    />
                </div>
                <h1 className="py-6">REPEATED SYNTHESIS RULE</h1>
                <p>
                    In the 3 round leopard NFT images below, there are 2 sets of round leopard parts
                    of the same color in different directions, then they can merge 2 leopard god NFT
                    of the same color for free.
                </p>
                <div className="relative h-20 lg:w-[992px] lg:h-40 mx-auto">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/images/root/merge2.png"
                        alt="merge2"
                    />
                </div>
                <p>
                    In the 3 round leopard NFT images below, there are 3 sets of round leopard parts
                    of the same color in different directions, then they can merge 3 leopard god NFT
                    of the same color for free.
                </p>
                <div className="relative h-20 lg:w-[992px] lg:h-40 mx-auto">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/images/root/merge3.png"
                        alt="merge3"
                    />
                </div>
                <Divider />
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
                    The bonus system is designed to bring more fun and benefits to community
                    users.Our bonus system consists of two parts, one is the bonus pool system, the
                    other is the lucky draw system.
                </p>
                <div className="px-4 lg:w-[768px] lg:mx-auto ">
                    {[
                        {
                            title: 'BONUS POOL SYSTEM',
                            desc: 'The bonus system is designed to bring more fun and benefits to community users.Our bonus system consists of two parts, one is the bonus pool system, the other is the lucky draw system.',
                        },
                        {
                            title: 'LUCKY DRAW SYSTEM',
                            desc: 'The lucky draw system is designed to promote user transactions. In the system, we have designed three kinds of awards, namely, the monthly lucky draw of round leopard NFT and leopard god NFT and the Supreme Crown Award. The bonuses of these awards come from the funds accumulated by the bonus pool system. Since the bonus pool funds are made up of 20% mint fees and 4% of each transaction fee in the secondary market, it means that the more mint users and secondary market transactions, the higher the transaction fees, so the more bonuses can be accumulated in the bonus pool, and then the more bonuses the winners will get.',
                        },
                        {
                            title: 'MONTHLY ROUND LEOPARD AWARD',
                            desc: 'As long as you own the round leopard NFT, you will be able to participate in the lucky draw for round leopard NFT users four times a month on the 6th, 13th, 20th and 27th of each month. with the bonus accounting for 5% of the total amount of the current bonus pool. And the unconsumed bonus in the current month will be automatically accumulated into the prize pool of the next month.',
                        },
                        {
                            title: 'MONTHLY LEOPARD GOD AWARD',
                            desc: 'If you hold a leopard god NFT, you will be able to participate in a monthly lucky draw for leopard god NFT users on the 27th monthly. with the bonus accounting for 20% of the total amount of the current bonus pool. And the unconsumed bonus in the current month will be automatically accumulated into the prize pool of the next month.',
                        },
                        {
                            title: 'SUPREME CROWN AWARD',
                            desc: 'If you collect all leopard god NFT with six supreme crowns, then you can receive the Crown Award, which can be received only once a month, on the 27th of each month. There will be one winner each time, with the bonus accounting for 60% of the total amount of the current bonus pool. If no one receives it in the current month, the bonus will be automatically accumulated into the bonus pool of the next month.',
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
                <h1 className="pt-14 pb-5">FLOW CHART OF BONUS DISTRIBUTION</h1>
                <p>
                    Attention: The supreme crown bonuses and monthly lucky draw bonuses come from
                    not only the accumulated funds--automatically deducted 4% ETH of transaction
                    fees for each transaction in the secondary market, but NFT holders can also
                    inject more money into the bonus pool at any time to increase the bonus chips.
                </p>
                <div className="px-8">
                    <div className="bg-[#D7C19A] py-1 px-4 max-w-sm mx-auto my-4 rounded-sm text-black text-xs">
                        INJECT MORE WINNINGS INTO THE BONUS POOL
                    </div>
                </div>
                <div className="lg:w-[1024px] lg:mx-auto px-4">
                    <div className="px-8 py-4 border border-[#D7C19A] rounded-3xl">
                        <div className="relative h-[645px] lg:w-[960px] lg:h-[1024px]">
                            <Image
                                src="/images/root/prize-pool_m.png"
                                // srcSet="/images/root/prize-pool_m.png 300w, /images/root/prize-pool.png 1024w"
                                layout="fill"
                                objectFit="contain"
                                alt="prize pool"
                            />
                        </div>
                    </div>
                </div>
                <Divider />
                <h1 className="pt-14 pb-5">ROADMAP</h1>
                <div className="relative h-80 lg:h-[704px] lg:w-[560px] mx-auto my-6 rounded-2xl overflow-hidden">
                    <Image
                        src="/images/root/forest-leopard.jpg"
                        layout="fill"
                        objectFit="contain"
                        alt="forest leopard"
                    />
                </div>
                <div className="px-4 lg:w-[960px] mx-auto">
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
                            <h2 className="py-6 border-b border-b-[#5F5E5F]">{name}</h2>
                            {items.map(({ title, desc }) => (
                                <div
                                    key={title}
                                    className="text-left flex justify-between items-center border-b py-4 border-b-[#5F5E5F]"
                                >
                                    <div className="flex-none w-20 lg:w-52 text-sm lg:text-2xl">
                                        {title}
                                    </div>
                                    <div className="flex-1 px-10">{desc}</div>
                                    <div className="flex-none rounded-[50%] w-8 h-8 border border-[#D5BFB2]"></div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                    <div className="w-36 mx-auto my-9 py-2 border border-[#575757] rounded-3xl">
                        STAY TUNED
                    </div>
                </div>
                <Divider />
                <div className="lg:w-[1024px] mx-auto">
                    <h1 className="pt-14 pb-5">THE TEAM</h1>
                    <h2 className="pb-8">LEOPARD GOD SERIES-NFT</h2>
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
                                <div className="w-36 h-80 lg:w-72 lg:h-[480px] rounded-lg lg:rounded-3xl bg-[#272D37] flex flex-col justify-around items-center">
                                    <div className="relative w-28 h-28 lg:w-64 lg:h-64 rounded-lg lg:rounded-3xl overflow-hidden">
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
                                    <a
                                        className="hover:text-sky-400"
                                        href="https://docs.leopardgod.com"
                                    >
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
