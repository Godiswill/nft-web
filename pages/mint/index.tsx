import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { usePublicClient } from 'wagmi';
import Layout from '@/components/Layout';
import Countdown from '@/components/mint/Countdown';
// import MintFunc from '@/components/mint/MintFunc';

const MintFunc = dynamic(() => import('@/components/mint/MintFunc'), { ssr: false });
const mintDate = new Date(Date.UTC(2023, 7, 25, 13, 0, 0)); // free mint

const Mint: NextPage = () => {
    const client = usePublicClient();
    const [blockTime, setBlockTime] = useState<number>();
    const [timeIsUp, setTimeIsUp] = useState<boolean>();

    useEffect(() => {
        client.getBlock().then((block) => {
            const now = Number(block.timestamp);
            console.log(now, mintDate.getTime() / 1000);
            setBlockTime(now);
            setTimeIsUp(now * 1000 > mintDate.getTime());
        });
    }, [client]);

    return (
        <Layout className="tiger">
            <Head>
                <title>LEOPARD GOD - MINT</title>
            </Head>
            <div className="text-white text-center px-4 lg:w-[960px] mx-auto leading-normal∂">
                <h1 id="roadmap" className="pt-10 pb-5">
                    Free Mint
                </h1>
                {timeIsUp !== undefined && (
                    <>
                        {timeIsUp ? (
                            <MintFunc />
                        ) : (
                            <Countdown
                                setTimeIsUp={setTimeIsUp}
                                blockTime={blockTime}
                                mintDate={mintDate}
                            />
                        )}
                    </>
                )}
            </div>
        </Layout>
    );
};

export default Mint;
