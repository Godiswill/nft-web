import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import ConnectBtn from '@/components/common/ConnectButton';
import {
    ConnectButton,
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';

const Mint: NextPage = () => {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    return (
        <Layout className="tiger">
            <Head>
                <title>LEOPARD GOD - Mint</title>
            </Head>
            <div className="text-white text-center px-4 lg:w-[960px] mx-auto">
                <h1 id="roadmap" className="pt-10 pb-5">
                    Get Ready, the MINT Launch is Imminent!
                </h1>
                <div>
                    A total of 2000 NFTs are exclusively reserved for our whitelist members to mint
                    for free.
                </div>
                <div>
                    How to Secure Your Whitelist Spot? Level up on our official Discord channel to
                    Level 10, participate in giveaways or rank in the top 3 on zealy.io during our
                    weekly sprints. Follow us on Twitter and Discord to keep up with all our
                    whitelist activities.
                </div>
                <h2>MINT Details</h2>
                <div>Kick-off date: June 20, 2023.</div>
                <div>Individual NFT mint price: 0 ETH.</div>
                <div>Per user limit: 2 NFTs.</div>
                <div>Max wallet holdings: 10 NFTs.</div>
                <ConnectButton />
                <div>
                    Sign in with your wallet to mint. MINT Progress: Mint your NFTs now! Mint Price
                    and Quantity: Please note, your address must be registered as a whitelist user
                    to mint. Ensure you have sufficient balance for the transaction.
                </div>
                <>
                    {openConnectModal && (
                        <button onClick={openConnectModal} type="button">
                            Open Connect Modal
                        </button>
                    )}
                    {openAccountModal && (
                        <button onClick={openAccountModal} type="button">
                            Open Account Modal
                        </button>
                    )}
                    {openChainModal && (
                        <button onClick={openChainModal} type="button">
                            Open Chain Modal
                        </button>
                    )}
                </>
                <ConnectBtn />
            </div>
        </Layout>
    );
};

export default Mint;
