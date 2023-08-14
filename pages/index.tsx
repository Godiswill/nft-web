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
import { TwitterIcon } from '@/components/svg';
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
                <h1 className="mt-8">OVERVIEW OF LEOPARD GOD SERIES NFT ARTWORKS</h1>
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
                <p className="text-left">
                    In a universe yet untouched by starlight, the Leopard God stirred to life. His
                    gaze swept across a vast expanse of nothingness, a blank slate awaiting the
                    dance of creation. Driven by a divine vision, he called upon six sacred
                    elements: water, wood, sand, ice, fire, and earth. With artistry unparalleled,
                    he birthed roaring oceans, serene forests, endless deserts, shimmering glaciers,
                    fiery chasms, and the rich lands we walk upon.
                    <br />
                    <br />
                    But this newly forged world was restless. Violent tsunamis, engulfing
                    sandstorms, fierce blizzards, roaring eruptions, and earth-shaking tremors
                    threatened its very fabric. Seeking harmony, the Leopard God journeyed to the
                    very essence of each domain. From these profound depths, he extracted six
                    radiant gemstones, the purest embodiments of their elements.
                    <br />
                    <br />
                    From these gemstones, he crafted six magnificent crowns that resonated with the
                    elements from which they were born. As these crowns were set upon the world,
                    harmony reigned; the elements sang in unity, and life in all its forms thrived.
                    <br />
                    <br />
                    Yet, the vastness of the universe concealed an older, shadowy force—the God of
                    Nothingness. Birthed from the very void that once dominated, he harbored an
                    insatiable desire to revert the cosmos to that primeval emptiness. Envious of
                    the Leopard God&apos;s creation, he set forth to erase its existence.
                    <br />
                    <br />
                    The skies witnessed a cosmic duel, as godly energies collided. The formidable
                    might of the God of Nothingness splintered the Leopard God’s spirit into three
                    shards: courage, kindness, and wisdom, scattering them to the cosmos&apos;s far
                    reaches.
                    <br />
                    <br />
                    In a final act of defiance, the Leopard God invoked the power of the six supreme
                    crowns. Their combined might repelled the God of Nothingness, banishing him to
                    the infinite abyss. But in his retreat, the treacherous deity pulled the crowns
                    into the void, obscuring them from existence.
                    <br />
                    <br />
                    With the crowns lost, the world teetered on chaos&apos;s brink once more. The
                    once-tamed elements began their disruptive dance, reminding the world of the
                    harmony it had lost. Now, in this tumultuous age, a select group of noble souls
                    set forth. Their quest? To reclaim the six lost crowns, reforge the shattered
                    spirit of the Leopard God, and restore serenity to a world fraying at its seams.
                </p>
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
                                twitter: 'https://twitter.com/0xleopardgod',
                            },
                            {
                                name: 'Leo',
                                title: 'Operation Director and Founder',
                                twitter: 'https://twitter.com/0xleopardgod',
                            },
                        ].map(({ name, title, twitter }, index) => (
                            <SwiperSlide key={name}>
                                <div className="select-none w-36 h-80 lg:w-72 lg:h-[480px] rounded-lg lg:rounded-3xl bg-[#272D37] flex flex-col justify-around items-center">
                                    <div className="relative w-24 h-24 rounded-lg lg:rounded-2xl lg:w-52 lg:h-52 overflow-hidden">
                                        <Image
                                            layout="fill"
                                            objectFit="contain"
                                            src={`/images/nft/${index + 1}.jpg`}
                                            // src={`/images/root/logo_m.png`}
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
            </div>
        </Layout>
    );
}
