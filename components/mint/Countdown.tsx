import { useState, memo, useEffect } from 'react';
import { usePublicClient, useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import InfoTip from '@/components/common/InfoTip';
import { CloseIcon2 } from '@/components/svg';
import { getProof } from '@/contract/merkletree';

type IInitDate = {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
};

const dateKey = ['days', 'hours', 'minutes', 'seconds'] as (keyof IInitDate)[];

const mintDate = new Date(Date.UTC(2023, 7, 25, 13, 0, 0)); // free mint

function Countdown() {
    const { address } = useAccount();
    const client = usePublicClient();
    const [blockTime, setBlockTime] = useState<number>();
    const [wlInfo, setWLInfo] = useState(false);
    const [clock, setClock] = useState({
        days: '-',
        hours: '-',
        minutes: '-',
        seconds: '-',
    });
    // const [validAddr, setValidAddr] = useState<string>();

    useEffect(() => {
        client.getBlock().then((block) => {
            const now = Number(block.timestamp);
            console.log(now, Math.floor(Date.now() / 1000));
            setBlockTime(now);
        });
    }, [client]);

    useEffect(() => {
        if (!blockTime) return;
        let now = blockTime * 1000;
        const countdown = () => {
            const gap = mintDate.getTime() - now;
            now += 1000;
            const s = 1000;
            const m = 60 * s;
            const h = 60 * m;
            const d = 24 * h;
            const days = Math.floor(gap / d);
            const hours = Math.floor((gap - days * d) / h);
            const minutes = Math.floor((gap - days * d - hours * h) / m);
            const seconds = Math.floor((gap - days * d - hours * h - minutes * m) / s);
            setClock({
                days: days.toString(),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0'),
            });
        };
        const timer = setInterval(countdown, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [blockTime]);

    return (
        <>
            <h2>Coming soon, stay tuned</h2>
            <div className="my-8 lg:text-lg">
                <div className="mb-4">600 supply, Max 2 per wallet</div>
                <div className="mb-4">Maximum 10 NFTs per wallet</div>
                {/* <div className="mb-4">Fri, 25 Aug 2023 13:00:00 UTC</div> */}
                <div className="mb-4">{mintDate.toString()}</div>
            </div>

            <div className="flex justify-around text-center mt-16 mb-12">
                {dateKey.map((key) => (
                    <div key={key} className="bg-white/[.15] py-3 rounded w-20 lg:w-36">
                        <div className="text-2xl lg:text-5xl">{clock[key]}</div>
                        <div className="mt-2 text-sm lg:text-lg uppercase">{key}</div>
                    </div>
                ))}
            </div>

            <div className="mb-6">
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

            <div className="lg:w-[28.5rem] h-28 mx-auto px-4">
                <div className="flex justify-center mt-8 mb-3">
                    <ConnectButton />
                </div>
                {/* <input
                    type="text"
                    placeholder="Enter your wallet address to verify the whitelist"
                    className="bg-black outline-none border border-[#D7C19A] p-2 rounded indent-4 w-full text-xs lg:text-base"
                    onBlur={(e) => setValidAddr(e.target.value)}
                /> */}
                {address && (
                    <div>
                        {!!getProof(address as `0x${string}`)?.length ? (
                            <span className="text-green-500">
                                Congratulations, you are on the whitelist!
                            </span>
                        ) : (
                            <span className="text-red-500">
                                Sorry, you are not on the whitelist.
                            </span>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default memo(Countdown);