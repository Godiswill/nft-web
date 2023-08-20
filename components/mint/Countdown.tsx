import { useState, memo } from 'react';
import InfoTip from '@/components/common/InfoTip';
import { CloseIcon2 } from '@/components/svg';

function Countdown() {
    const [wlInfo, setWLInfo] = useState(false);

    return (
        <>
            <h2>Coming soon, stay tuned</h2>
            <div className="my-8 text-lg">
                <div className="mb-4">Aug 25, 2023</div>
                <div className="mb-4">600 supply (Max 2/wallet)</div>
                <div className="mb-4">Maximum 10 NFTs per wallet!</div>
            </div>

            <div className="flex justify-around text-4xl text-center mt-20 mb-14">
                <div>
                    <div>7</div>
                    <div className="mt-2 text-2xl">DAYS</div>
                </div>
                <div>
                    <div>24</div>
                    <div className="mt-2 text-2xl">HOURS</div>
                </div>
                <div>
                    <div>00</div>
                    <div className="mt-2 text-2xl">MINUTES</div>
                </div>
                <div>
                    <div>14</div>
                    <div className="mt-2 text-2xl">SECONDS</div>
                </div>
            </div>

            <div className="mb-10">
                {wlInfo ? (
                    <div className="mb-4 bg-white/[0.15] text-white text-left mx-auto lg:w-96 p-8 rounded relative">
                        Please follow our official{' '}
                        <a
                            className="text-[#D7C19A]"
                            href="https://twitter.com/0xleopardgod"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>{' '}
                        and join our official{' '}
                        <a
                            className="text-[#D7C19A]"
                            href="https://discord.gg/GdPzmcpxQ2"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Discord
                        </a>{' '}
                        community to get whitelist event information.
                        <div
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={() => setWLInfo(false)}
                        >
                            <CloseIcon2 />
                        </div>
                    </div>
                ) : (
                    <InfoTip
                        title="How to Secure Your Whitelist Spot?"
                        type="info"
                        onClick={() => setWLInfo(true)}
                    />
                )}
            </div>
        </>
    );
}

export default memo(Countdown);
