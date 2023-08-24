import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Countdown from '@/components/mint/Countdown';
// import MintFunc from '@/components/mint/MintFunc';

const MintFunc = dynamic(() => import('@/components/mint/MintFunc'), { ssr: false });

const Mint: NextPage = () => {
    const [timeIsUp] = useState(true);
    return (
        <Layout className="tiger">
            <Head>
                <title>LEOPARD GOD - MINT</title>
            </Head>
            <div className="text-white text-center px-4 lg:w-[960px] mx-auto leading-normal∂">
                <h1 id="roadmap" className="pt-10 pb-5">
                    Free Mint
                </h1>
                {timeIsUp ? <MintFunc /> : <Countdown />}
            </div>
        </Layout>
    );
};

export default Mint;
