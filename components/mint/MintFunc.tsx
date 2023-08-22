import { useState, memo } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ErrorIcon } from '@/components/svg';
import { useFreeMint } from './useMint';
import { useAccount } from 'wagmi';

function MintFunc() {
    const { address } = useAccount();
    const [cnt, setCnt] = useState(2);
    const { PRICE, MAX, SUPPLY, mintedCnt, cost, isWErr, wErr, write, errMsg } = useFreeMint(cnt);

    return (
        <>
            <div className="lg:w-[30rem] mt-10 mb-9 px-8 py-6 mx-auto bg-[#030812] border border-[#d7c19a] rounded-xl">
                <div className="flex justify-between mb-7">
                    <div>MINT Progress</div>
                    <div>
                        {mintedCnt}/{SUPPLY}
                    </div>
                </div>
                <div className="bg-[#C4C4C4]/[0.18] h-1 rounded-2xl overflow-hidden">
                    <div className="bg-[#81FFAB] w-1/2 h-1"></div>
                </div>
            </div>
            <div className=" lg:w-[30rem] mx-auto">
                <div className="flex justify-around items-center border-b border-[#d7c19a]/50 py-4">
                    <div
                        className="cursor-pointer select-none flex justify-center items-center text-base font-bold w-12 h-12 border border-[#d7c19a]/50 rounded-full"
                        onClick={() => setCnt((pre) => (pre > 1 ? pre - 1 : pre))}
                    >
                        &minus;
                    </div>
                    <div className="flex justify-center items-center w-16 h-16 border border-[#d7c19a] rounded-xl">
                        {cnt}
                    </div>
                    <div
                        className="cursor-pointer select-none flex justify-center items-center text-base p-3 font-bold w-12 h-12 border border-[#d7c19a]/50 rounded-full"
                        onClick={() => setCnt((pre) => (pre < MAX ? pre + 1 : pre))}
                    >
                        +
                    </div>
                </div>
                <div className="flex justify-between border-b border-[#d7c19a]/50 py-4">
                    <div>Price</div>
                    <div>{PRICE} ETH</div>
                </div>
                <div className="flex justify-between border-b border-[#d7c19a]/50 py-4">
                    <div>Total</div>
                    <div>{cost} ETH</div>
                </div>
                <div className="h-12">
                    {isWErr && (
                        <div className="bg-[#030812]/50 text-red-500 py-3 flex items-center">
                            <ErrorIcon className="flex flex-shrink-0" />
                            <span className="ml-2 text-start overflow-y-auto max-h-28 break-words">
                                {errMsg || wErr?.message}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center my-9">
                <ConnectButton />
            </div>
            {address && (
                <div className="flex justify-center my-9">
                    <button
                        className="h-10 w-36 flex justify-center items-center px-4 bg-[#D7C19A] text-black rounded font-bold shadow-[0px_4px_12px_rgba(0, 0, 0, 0.1)] transition hover:scale-[1.025]"
                        onClick={() => write?.()}
                    >
                        Mint
                    </button>
                </div>
            )}
        </>
    );
}

export default memo(MintFunc);
