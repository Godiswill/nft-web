import { useState, memo, useMemo } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { ErrorIcon } from '@/components/svg';
import Ellipsis from '@/components/common/Ellipsis';
import { usePublicMint } from './useMint';

function MintFunc() {
    const { address } = useAccount();
    const [cnt, setCnt] = useState(2);
    const selected = useMemo(
        () =>
            Array(cnt)
                .fill(1)
                .map((it, i) => it + i + 200),
        [cnt]
    );
    const {
        PRICE,
        MAX,
        SUPPLY,
        mintedCnt,
        cost,
        isWErr,
        wErr,
        isLoading,
        write,
        reset,
        isSuccess,
        errMsg,
        result,
    } = usePublicMint(selected.length);
    const disabledMint = isWErr || isLoading;

    return (
        <>
            <div className="lg:w-[30rem] mt-10 mb-9 px-8 py-6 mx-auto bg-[#030812] border border-[#d7c19a] rounded-xl">
                <div className="flex justify-between mb-7">
                    <div>Mint Progress</div>
                    <div>
                        {mintedCnt}/{SUPPLY}
                    </div>
                </div>
                <div className="bg-[#C4C4C4]/[0.18] h-1 rounded-2xl overflow-hidden">
                    <div
                        className="bg-[#81FFAB] h-1"
                        style={{ width: SUPPLY ? `${(mintedCnt / SUPPLY) * 100}%` : 0 }}
                    ></div>
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
                <div className="min-h-12">
                    {isWErr && (
                        <div className="bg-[#030812]/50 text-red-500 py-3 flex items-center">
                            <ErrorIcon className="flex flex-shrink-0" />
                            <span className="ml-2 text-start overflow-y-auto max-h-28 break-words">
                                {errMsg || wErr?.message}
                            </span>
                        </div>
                    )}
                    {result && !disabledMint && (
                        <div className="bg-[#030812]/50 text-green-500 py-3 flex items-center">
                            <ErrorIcon className="flex flex-shrink-0" />
                            <span className="ml-2 text-start overflow-y-auto max-h-28 break-words">
                                {`${result.status}: ${result.transactionHash}`}
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
                        className={`${
                            disabledMint ? 'opacity-50 cursor-not-allowed ' : ''
                        }h-10 w-36 flex justify-center items-center px-4 bg-[#D7C19A] text-black rounded font-bold shadow-[0px_4px_12px_rgba(0, 0, 0, 0.1)] transition hover:scale-[1.025]`}
                        disabled={disabledMint}
                        onClick={() => {
                            if (isSuccess) {
                                reset?.();
                            } else {
                                write?.();
                            }
                        }}
                    >
                        {isSuccess ? 'Reset' : isLoading ? <Ellipsis>Waiting</Ellipsis> : 'Mint'}
                    </button>
                </div>
            )}
        </>
    );
}

export default memo(MintFunc);
