import { useState, memo, useEffect } from 'react';
import { usePublicClient } from 'wagmi';
import InfoTip from '@/components/common/InfoTip';
import { CloseIcon2 } from '@/components/svg';

type IInitDate = {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
};

const dateKey = ['days', 'hours', 'minutes', 'seconds'] as (keyof IInitDate)[];

function Countdown() {
    const client = usePublicClient();
    const [blockTime, setBlockTime] = useState<number>();
    const [wlInfo, setWLInfo] = useState(false);
    const [clock, setClock] = useState({
        days: '-',
        hours: '-',
        minutes: '-',
        seconds: '-',
    });

    useEffect(() => {
        client.getBlock().then((block) => {
            const now = Number(block.timestamp);
            console.log(now, Math.floor(Date.now() / 1000));
            setBlockTime(now);
        });
    }, [client]);

    useEffect(() => {
        if (!blockTime) return;
        const target = new Date(Date.UTC(2023, 7, 25, 0, 0, 0));
        let now = blockTime * 1000;
        // console.log(target);
        const countdown = () => {
            const gap = target.getTime() - now;
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
            <div className="my-8 text-lg">
                <div className="mb-4">Aug 25, 2023</div>
                <div className="mb-4">600 supply (Max 2/wallet)</div>
                <div className="mb-4">Maximum 10 NFTs per wallet!</div>
            </div>

            <div className="flex justify-around text-5xl text-center mt-20 mb-14">
                {dateKey.map((key) => (
                    <div key={key} className="bg-white/[.15] py-3 rounded w-36">
                        <div>{clock[key]}</div>
                        <div className="mt-2 text-lg uppercase">{key}</div>
                    </div>
                ))}
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
