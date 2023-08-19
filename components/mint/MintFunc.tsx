import { useState, useMemo, memo } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractReads } from 'wagmi';
import { formatEther } from 'viem';
import Alert from '@/components/common/Alert';
function MintFunc() {
    const [cnt, setCnt] = useState(1);
    const { data, isError, isLoading } = useContractReads({
        contracts: [
            {
                address: '0x1D33B1b8d3c33c1667603b13d0B38C0325F4f96f',
                abi: [
                    {
                        inputs: [],
                        name: 'presalePrice',
                        outputs: [
                            {
                                internalType: 'uint256',
                                name: '',
                                type: 'uint256',
                            },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                    },
                ] as const,
                functionName: 'presalePrice',
            },
            {
                address: '0x1D33B1b8d3c33c1667603b13d0B38C0325F4f96f',
                abi: [
                    {
                        inputs: [],
                        name: 'presalePerMax',
                        outputs: [
                            {
                                internalType: 'uint256',
                                name: '',
                                type: 'uint256',
                            },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                    },
                ] as const,
                functionName: 'presalePerMax',
            },
            {
                address: '0x1D33B1b8d3c33c1667603b13d0B38C0325F4f96f',
                abi: [
                    {
                        inputs: [],
                        name: 'presaleSupply',
                        outputs: [
                            {
                                internalType: 'uint256',
                                name: '',
                                type: 'uint256',
                            },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                    },
                ] as const,
                functionName: 'presaleSupply',
            },
            {
                address: '0x1D33B1b8d3c33c1667603b13d0B38C0325F4f96f',
                abi: [
                    {
                        inputs: [],
                        name: 'freeCnt',
                        outputs: [
                            {
                                internalType: 'uint256',
                                name: '',
                                type: 'uint256',
                            },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                    },
                ] as const,
                functionName: 'freeCnt',
            },
        ],
    });
    const [price, max, supply, freeCnt, cost] = useMemo(() => {
        if (isError || isLoading) {
            return [0, 0, 0, 0, 0];
        }
        const _price = formatEther(data?.[0]?.result as bigint);
        const _cost = formatEther((data?.[0]?.result as bigint) * BigInt(cnt));
        return [
            _price,
            Number((data?.[1]?.result as bigint) || 0),
            data?.[2]?.result?.toString() || 0,
            data?.[3]?.result?.toString() || 0,
            _cost,
        ];
    }, [data, cnt, isError, isLoading]);

    return (
        <>
            <div className="lg:w-96 mt-14 mb-9 px-9 py-7 mx-auto bg-[#030812] border border-[#d7c19a] rounded-xl">
                <div className="flex justify-between mb-7">
                    <div>MINT Progress</div>
                    <div>
                        {freeCnt}/{supply}
                    </div>
                </div>
                <div className="bg-[#C4C4C4]/[0.18] h-1 rounded-2xl overflow-hidden">
                    <div className="bg-[#81FFAB] w-1/2 h-1"></div>
                </div>
            </div>
            <div className="w-80 mx-auto">
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
                        onClick={() => setCnt((pre) => (pre < max ? pre + 1 : pre))}
                    >
                        +
                    </div>
                </div>
                <div className="flex justify-between border-b border-[#d7c19a]/50 py-4">
                    <div>Price</div>
                    <div>{price} ETH</div>
                </div>
                <div className="flex justify-between border-b border-[#d7c19a]/50 py-4">
                    <div>Total</div>
                    <div>{cost} ETH</div>
                </div>
            </div>
            <Alert title="Nedd more ETH!" />
            <div className="flex justify-center my-9">
                <ConnectButton />
            </div>
        </>
    );
}

export default memo(MintFunc);
