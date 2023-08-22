import { useMemo } from 'react';
import { useContractReads, usePrepareContractWrite, useContractWrite } from 'wagmi';
import { formatEther } from 'viem';
import rl from '@/contract/rl.json';
import Err from '@/contract/Err';

const rlABI = rl.abi
    .filter((it) => it.name)
    .reduce((pre, cur) => {
        pre[cur.name as string] = [cur];
        return pre;
    }, {} as Record<string, any>);

// const address = '0x1D33B1b8d3c33c1667603b13d0B38C0325F4f96f';
const address = '0x31d642E694d5F8D8acB541e53aFd08d0B148Abf0';

function useFreeMint(cnt: number) {
    const {
        data,
        isError: isRError,
        isLoading: isRLoading,
    } = useContractReads({
        contracts: [
            {
                address,
                abi: rlABI['MAX_PER_FREE'],
                functionName: 'MAX_PER_FREE',
            },
            {
                address,
                abi: rlABI['MAX_FREE'],
                functionName: 'MAX_FREE',
            },
            {
                address,
                abi: rlABI['freeCnt'],
                functionName: 'freeCnt',
            },
        ],
    });

    const [PRICE, MAX, SUPPLY, mintedCnt, cost] = useMemo(() => {
        if (isRError || isRLoading) {
            return [0, 0, 0, 0, 0];
        }
        console.log('read', data);
        return [
            0,
            Number((data?.[0]?.result as bigint) || 0),
            data?.[1]?.result?.toString() || 0,
            data?.[2]?.result?.toString() || 0,
            0,
        ];
    }, [data, isRError, isRLoading]);

    const {
        config,
        error: wErr,
        isError: isWErr,
        isLoading: isWLoading,
    } = usePrepareContractWrite({
        address,
        abi: rlABI['freeMint'],
        functionName: 'freeMint',
        args: [
            cnt,
            [
                '0xfdc40dec50fffedc0e905d0c73e2cc5cdefcb1fdeb7b157cd484f1be02239901',
                '0xc632716923b4ad63783e3f33c9beb37f4ca01187f99b21c9f5b06f5ba9ac2e51',
                '0xa15a85e448850c17b40305ea4dca47430d2638a048135be0f257085913ef584c',
                '0xbe09a843e96d820323ffaac74f0f119734db1f158ac0d0d5b627ac7f3bcc82c2',
            ],
        ],
    });
    const { data: data2, write } = useContractWrite(config);
    console.log('data2', data2);
    return {
        PRICE,
        MAX,
        SUPPLY,
        mintedCnt,
        cost,
        wErr,
        isWErr,
        isWLoading,
        write,
        errMsg: Err[(wErr?.cause as any)?.reason],
    };
}

function usePresaleMint(cnt: number) {
    const {
        data,
        isError: isRError,
        isLoading: isRLoading,
    } = useContractReads({
        contracts: [
            {
                address,
                abi: rlABI['presalePrice'],
                functionName: 'presalePrice',
            },
            {
                address,
                abi: rlABI['presaleSupply'],
                functionName: 'presaleSupply',
            },
            {
                address,
                abi: rlABI['presaleSupply'],
                functionName: 'presaleSupply',
            },
            {
                address,
                abi: rlABI['freeCnt'],
                functionName: 'freeCnt',
            },
        ],
    });

    const [PRICE, MAX, SUPPLY, mintedCnt, cost] = useMemo(() => {
        if (isRError || isRLoading) {
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
    }, [data, cnt, isRError, isRLoading]);

    const {
        config,
        error: wErr,
        isError: isWErr,
        isLoading: isWLoading,
    } = usePrepareContractWrite({
        address,
        abi: rlABI['presaleMint'],
        functionName: 'presaleMint',
    });
    const { data: data2, write } = useContractWrite(config);
    console.log('data2', data2);

    return {
        PRICE,
        MAX,
        SUPPLY,
        mintedCnt,
        cost,
        wErr,
        isWErr,
        isWLoading,
        write,
        errMsg: Err[wErr?.cause?.reason],
    };
}

export { useFreeMint, usePresaleMint };
