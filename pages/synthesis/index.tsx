import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import Layout from '@/components/Layout';
// import { SelectedIcon, SelectEmptyIcon } from '@/components/svg';
// import Button from '@/components/common/Button';
import Modal from './Modal';

export default function Synthesis() {
    // const [tab, setTab] = useState('Round Leopard');
    // const [selectedRL, setSelectRL] = useState<number[]>([]);
    const [visible, setVisible] = useState(false);

    return (
        <Layout className="tiger" mainClassName="home">
            <Head>
                <title>LEOPARD GOD - SYNTHESIS</title>
            </Head>
            <div className="text-white text-center pb-4">
                {/* <h1 className="py-6">START SYNTHESIS</h1>
                <div className="flex justify-center my-9">
                    <ConnectButton />
                </div>
                <div className="lg:w-[1024px] mx-auto p-4">
                    <div className="flex">
                        {['Round Leopard', 'Leopard God'].map((name) => (
                            <div
                                key={name}
                                className={`${
                                    name === tab ? 'bg-white/20' : ''
                                } cursor-pointer rounded-md p-2`}
                                onClick={() => setTab(name)}
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-b border-[#848484] my-3 py-4 grid grid-cols-3 lg:grid-cols-6 gap-4">
                        {[1141, 1199, 1257, 2334, 580, 7561, 1].map((tokenId) => (
                            <div key={tokenId} className="bg-white/20 p-2 rounded-lg">
                                <div className="select-none">
                                    <Image
                                        key={tokenId}
                                        className="rounded-2xl"
                                        src={`https://ipfs.io/ipfs/bafybeieuv5nuno56clsnthqmhnaiqalyhmov2uk3kx6wjkdg3f4rfp3h5u/${tokenId}.jpeg`}
                                        height={160}
                                        width={160}
                                        alt="Round Leopard"
                                    />
                                </div>
                                <div className="text-xs font-light mt-2 mb-4">Token #{tokenId}</div>
                                <div className="flex justify-center mb-2">
                                    <span
                                        onClick={() =>
                                            setSelectRL((pre) =>
                                                pre.includes(tokenId)
                                                    ? pre.filter((id) => id !== tokenId)
                                                    : [...pre, tokenId]
                                            )
                                        }
                                    >
                                        {selectedRL.includes(tokenId) ? (
                                            <SelectedIcon />
                                        ) : (
                                            <SelectEmptyIcon />
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center my-9">
                    <Button onClick={() => setVisible(true)}>Synthesis</Button>
                </div> */}
                <Modal visible={visible} onClose={() => setVisible(false)} status="synthesising" />
                <h1 className="py-6">SYNTHETIC SYSTEM</h1>
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
                <h1 className="py-6">THE BENEFITS OF SYNTHESIZING LEOPARD GOD NFT</h1>
                <div className="lg:w-[1024px] lg:mx-auto p-4">
                    <h2 className="flex items-center pb-4">
                        GAIN MUCH HIGHER BONUSES <div className="flex-1 h-px bg-[#848484] ml-8" />
                    </h2>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex items-center flex-1 font-light text-left py-4 lg:pr-8">
                            We have set up a weekly lucky draw for users who own Leopard God NFTs.
                            As long as you hold the Leopard God NFT, you can participate in the
                            weekly lucky draw and have a chance to win generous prize earnings. So
                            hurry up and collect Round Leopard NFTs to synthesize the Leopard God
                            NFT, which will bring you substantial additional income.
                        </div>
                        <div className="lg:flex-1">
                            <h2>LUCKY DRAW</h2>

                            <div className="relative h-40 lg:h-52">
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src="/images/root/ethereum.png"
                                    alt="ethereum"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[1024px] lg:mx-auto p-4">
                    <h2 className="flex items-center pb-4">
                        <div className="flex-1 h-px bg-[#848484] mr-8" />
                        BE ABLE TO CLAIM THE SUPREME CROWN PRIZE
                    </h2>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="lg:flex-1">
                            <h2>SUPREME CROWN PRIZE</h2>

                            <div className="relative h-40 lg:h-52">
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src="/images/root/crown.png"
                                    alt="crown"
                                />
                            </div>
                        </div>
                        <div className="flex-1 font-light text-left py-4 lg:pl-8">
                            To incentivize users to actively collect round leopard NFTs for
                            synthesis into leopard god NFTs, we have created a highly lucrative
                            prize: the Supreme Crown Prize! If you win this prize, you will receive
                            an unprecedentedly generous bonus！The condition for receiving the
                            Supreme Crown Prize is to collect six supreme crown versions of the
                            leopard god NFTs. and each new synthesized leopard god NFT has a
                            randomly assigned crown,This means that no matter which round leopard
                            NFT you use to synthesize the leopard god NFT, you have the chance to
                            synthesize a leopard god NFT with a supreme crown. If you are lucky
                            enough to get the Supreme Crown version of the leopard god NFT, you will
                            have the opportunity to receive the extremely generous Supreme Crown
                            Prize.
                        </div>
                    </div>
                </div>
                {/* <Divider /> */}
                <h1 className="py-6">RULE OF SYNTHESIS</h1>
                <p>
                    Each round leopard NFT image consists of 3 round leopard parts in different
                    colors and directions of top, left and right. In the round leopard NFT images,
                    three round leopard parts with different directions of the same color can be
                    synthesized into a leopard god NFT of the same color for free.
                </p>
                <p>
                    Each round leopard NFT can only be synthesized up to 3 times, and the parts that
                    have already been used to synthesize a leopard god NFT within each round leopard
                    NFT image cannot be used again to synthesize with other round leopard NFTs.
                    However, the unsynthesized parts within the same image can still be used to
                    synthesize new leopard god NFTs with other round leopard NFTs. Once the maximum
                    number of synthesis times has been reached, each round leopard NFT will lose its
                    synthesis function, but it will not be destroyed.
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
                    of the same color in different directions, then they can synthesize two leopard
                    god NFT of the same color for free.
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
                    of the same color in different directions, then they can synthesize 3 leopard
                    god NFT of the same color for free.
                </p>
                <div className="relative h-20 lg:w-[992px] lg:h-40 mx-auto">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/images/root/merge3.png"
                        alt="merge3"
                    />
                </div>
            </div>
        </Layout>
    );
}
