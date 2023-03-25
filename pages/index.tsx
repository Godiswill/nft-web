import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

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
            <div className="text-white text-center">
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
                        objectFit="cover"
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
                {/* <h1 className="text-5xl">THE BENEFITS OF MERGE LEOPARD GOD NFT</h1> */}
            </div>
        </Layout>
    );
}
