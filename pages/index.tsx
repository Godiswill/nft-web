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
                <p className="text-5xl pt-14 pb-5">LEOPARD GOD SERIES NFT</p>
                <p className="text-xl text-[#D7C19A] pb-8">
                    THE FIRST-EVER COLLECTED AND MERGE NFT PROJECT
                </p>
                <div className="relative h-[20rem]">
                    <Image
                        src="/images/root/skin.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="lg-skin"
                    />
                </div>
                <p className="w-[44rem] mx-auto py-8">
                    The LEOPARD GOD series-NFT is the first merged and collected NFT project, which
                    aims to encourage users to collect and merge by providing them with generous
                    merger rewards and a very highly playable project experience, so that users can
                    highly participate and enjoy it.
                </p>
                <p className="mt-8 text-5xl">NFT ARTWORK INTRODUCTION</p>
                <p className="w-[44rem] mx-auto py-8">
                    The LEOPARD GOD series NFT consists of 10000 round leopard NFT and 10000 leopard
                    god NFT. The former needs to be minted by pre-sale and formula, while the latter
                    can only be merged and minted by round leopard NFT for free.
                </p>
                <div className="w-[44rem] mx-auto flex justify-between">
                    <div>
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
                        <div>
                            As the initial minted NFT, the total number of round leopard NFT is
                            10000, with each piece consisting of three round leopard parts with
                            different colors in different directions and also different backgrounds.
                        </div>
                    </div>
                    <div>
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
                        <div>
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
            </div>
        </Layout>
    );
}
