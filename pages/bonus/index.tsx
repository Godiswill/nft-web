import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
export default function Bonus() {
    return (
        <Layout className="tiger" mainClassName="home">
            <Head>
                <title>LEOPARD GOD - BONUS</title>
            </Head>
            <div className="text-white text-center pb-4">
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
                <div className="relative h-[350px] lg:h-[780px]">
                    <Image
                        src="/images/root/bonus_pool.png"
                        layout="fill"
                        objectFit="contain"
                        alt="bonus pool"
                    />
                </div>
            </div>
        </Layout>
    );
}
