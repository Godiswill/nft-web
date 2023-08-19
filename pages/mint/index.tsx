import { useState } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Countdown from '@/components/mint/Countdown';
import MintFunc from '@/components/mint/MintFunc';

const Mint: NextPage = () => {
    const [timeIsUp] = useState(false);
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
