import { useState } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Layout from '@/components/Layout';
import { ErrorIcon, CloseIcon2, InfoIcon } from '@/components/svg';

const Mint: NextPage = () => {
    const [wlInfo, setWLInfo] = useState(false);
    return (
        <Layout className="tiger">
            <Head>
                <title>LEOPARD GOD - Mint</title>
            </Head>
            <div className="text-white text-center px-4 lg:w-[960px] mx-auto">
                <h1 id="roadmap" className="pt-10 pb-5">
                    The MINT Launch is Imminent!
                </h1>
                <div className="mb-4">
                    A total of 2000 NFTs are exclusively reserved for our whitelist members to mint
                    for free.
                </div>
                {wlInfo ? (
                    <div className="mb-4 bg-white/[0.11] text-white mx-auto lg:w-96 p-8 rounded relative">
                        Level up on our official Discord channel to Level 10, participate in
                        giveaways or rank in the top 3 on zealy.io during our weekly sprints. Follow
                        us on Twitter and Discord to keep up with all our whitelist activities.
                        <div
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={() => setWLInfo(false)}
                        >
                            <CloseIcon2 />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <div
                            className="mb-4 bg-white/[0.11] text-white px-4 py-2 flex items-center rounded cursor-pointer"
                            onClick={() => setWLInfo(true)}
                        >
                            <InfoIcon />
                            <span className="ml-2">How to Secure Your Whitelist Spot?</span>
                        </div>
                    </div>
                )}
                <h2>MINT Details</h2>
                <div className="mb-4">Kick-off date: June 20, 2023.</div>
                <div className="mb-4">Individual NFT mint price: 0 ETH.</div>
                <div className="mb-4">Per user limit: 2 NFTs.</div>
                <div className="mb-4">Max wallet holdings: 10 NFTs.</div>
                <div className="lg:w-96 mt-14 mb-9 px-9 py-7 mx-auto bg-[#030812] border border-[#d7c19a] rounded-xl">
                    <div className="flex justify-between mb-7">
                        <div>MINT Progress</div>
                        <div>0/2000</div>
                    </div>
                    <div className="bg-[#C4C4C4]/[0.18] h-1 rounded-2xl overflow-hidden">
                        <div className="bg-[#81FFAB] w-1/2 h-1"></div>
                    </div>
                </div>
                <div className="w-80 mx-auto">
                    <div className="flex justify-around items-center border-b border-[#d7c19a]/50 py-4">
                        <div className="flex justify-center items-center text-base font-bold w-12 h-12 border border-[#d7c19a]/50 rounded-full">
                            -
                        </div>
                        <div className="flex justify-center items-center w-16 h-16 border border-[#d7c19a] rounded-xl">
                            1
                        </div>
                        <div className="flex justify-center items-center text-base p-3 font-bold w-12 h-12 border border-[#d7c19a]/50 rounded-full">
                            +
                        </div>
                    </div>
                    <div className="flex justify-between border-b border-[#d7c19a]/50 py-4">
                        <div>Price</div>
                        <div>0 ETH</div>
                    </div>
                    <div className="flex justify-between border-b border-[#d7c19a]/50 py-4">
                        <div>Total</div>
                        <div>2</div>
                    </div>
                </div>
                <div className="flex justify-center my-6">
                    <div className="bg-[#030812] border border-[#d7c19a] px-4 py-2 rounded-lg flex justify-center items-center">
                        <ErrorIcon />
                        <span className="ml-2">需要更多的余额来进行铸造！</span>
                    </div>
                </div>
                <div className="flex justify-center my-9">
                    <ConnectButton />
                </div>
                <div>
                    Sign in with your wallet to mint. MINT Progress: Mint your NFTs now! Mint Price
                    and Quantity: Please note, your address must be registered as a whitelist user
                    to mint. Ensure you have sufficient balance for the transaction.
                </div>
            </div>
        </Layout>
    );
};

export default Mint;
