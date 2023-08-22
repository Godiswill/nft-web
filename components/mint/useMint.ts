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

    const [{ result: MAX_PER_FREE }, { result: MAX_FREE }, { result: freeCnt }] = (data || [
        { result: undefined },
        { result: undefined },
        { result: undefined },
    ]) as Array<any>;

    const [PRICE, MAX, SUPPLY, mintedCnt, cost] = useMemo(() => {
        if (isRError || isRLoading) {
            return [0, 0, 0, 0, 0];
        }
        console.log('read', data);
        return [
            0,
            Number(MAX_PER_FREE || 0),
            MAX_FREE?.toString() || 0,
            freeCnt?.toString() || 0,
            0,
        ];
    }, [MAX_FREE, MAX_PER_FREE, data, freeCnt, isRError, isRLoading]);

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
                abi: rlABI['presalePerMax'],
                functionName: 'presalePerMax',
            },
            {
                address,
                abi: rlABI['presaleSupply'],
                functionName: 'presaleSupply',
            },
            {
                address,
                abi: rlABI['presaleCnt'],
                functionName: 'presaleCnt',
            },
        ],
    });

    const [
        { result: presalePrice },
        { result: presalePerMax },
        { result: presaleSupply },
        { result: presaleCnt },
    ] = (data || [
        { result: undefined },
        { result: undefined },
        { result: undefined },
        { result: undefined },
    ]) as Array<any>;

    const [PRICE, MAX, SUPPLY, mintedCnt, cost] = useMemo(() => {
        if (isRError || isRLoading) {
            return [0, 0, 0, 0, 0];
        }
        const _price = formatEther(presalePrice);
        const _cost = formatEther(presalePrice * BigInt(cnt));
        return [
            _price,
            Number(presalePerMax || 0),
            presaleSupply?.toString() || 0,
            presaleCnt?.toString() || 0,
            _cost,
        ];
    }, [isRError, isRLoading, presalePrice, cnt, presalePerMax, presaleSupply, presaleCnt]);

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
        errMsg: Err[(wErr?.cause as any)?.reason],
    };
}

export { useFreeMint, usePresaleMint };
