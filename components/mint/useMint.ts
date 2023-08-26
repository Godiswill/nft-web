import { useMemo } from 'react';
import {
    useAccount,
    useContractReads,
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from 'wagmi';
import { formatEther } from 'viem';
import rl from '@/contract/rl.json';
import Err from '@/contract/Err';
import { getProof } from '@/contract/merkletree';

const rlABI = rl.abi
    .filter((it) => it.name)
    .reduce((pre, cur) => {
        pre[cur.name as string] = [cur];
        return pre;
    }, {} as Record<string, any>);

// const address = '0x1D33B1b8d3c33c1667603b13d0B38C0325F4f96f';
// const address = '0x31d642E694d5F8D8acB541e53aFd08d0B148Abf0';
const address = '0x7b1641DC64AC67F9b348A456B31e15E69B588251';

function useFreeMint(cnt: number) {
    const { address: addr } = useAccount();
    const {
        data,
        isError: isRError,
        isLoading: isRLoading,
        refetch: rRefetch,
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
            {
                address,
                abi: rlABI['balanceOf'],
                functionName: 'balanceOf',
                args: addr ? [addr] : undefined,
            },
        ],
        // watch: true,
        // cacheTime: 10_000,
        onSettled(data) {
            console.log('Reads Settled', data);
        },
    });

    const [
        { result: MAX_PER_FREE },
        { result: MAX_FREE },
        { result: freeCnt },
        { result: holdCnt },
    ] = (data || [
        { result: undefined },
        { result: undefined },
        { result: undefined },
        { result: undefined },
    ]) as Array<any>;
    const isEmpty = !data || !data.length;

    const [PRICE, MAX, SUPPLY, mintedCnt, cost] = useMemo(() => {
        if (isEmpty || isRError || isRLoading) {
            return [0, 0, 0, 0, 0];
        }
        return [
            0,
            Number(MAX_PER_FREE || 0),
            MAX_FREE?.toString() || 0,
            freeCnt?.toString() || 0,
            0,
        ];
    }, [isEmpty, MAX_FREE, MAX_PER_FREE, freeCnt, isRError, isRLoading]);
    const {
        config,
        error: wErr,
        isError: isWErr,
        isLoading: isWLoading,
        refetch,
    } = usePrepareContractWrite({
        address,
        abi: rlABI['freeMint'],
        functionName: 'freeMint',
        args: [cnt, getProof(addr)],
    });
    const { data: wData, write, reset } = useContractWrite(config);

    const {
        data: result,
        isSuccess,
        isLoading,
    } = useWaitForTransaction({
        hash: wData?.hash,
        onSettled(data) {
            console.log('WaitForTransaction Settled', data);
        },
    });
    return {
        PRICE,
        MAX,
        SUPPLY,
        mintedCnt,
        cost,
        wErr,
        isWErr,
        isLoading: isWLoading || isLoading,
        write,
        reset: () => {
            refetch?.();
            reset?.();
            rRefetch?.();
        },
        isSuccess,
        errMsg: Err[(wErr?.cause as any)?.reason],
        result,
        onlyOnce: !!holdCnt && holdCnt > BigInt(0),
    };
}

function usePresaleMint(cnt: number) {
    const { address: addr } = useAccount();
    const {
        data,
        isError: isRError,
        isLoading: isRLoading,
        refetch: rRefetch,
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
        // watch: true,
        // cacheTime: 10_000,
        onSettled(data) {
            console.log('Reads Settled', data);
        },
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
    const isEmpty = !data || !data.length;

    const [PRICE, MAX, SUPPLY, mintedCnt, cost] = useMemo(() => {
        if (isEmpty || isRError || isRLoading) {
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
    }, [
        isEmpty,
        isRError,
        isRLoading,
        presalePrice,
        cnt,
        presalePerMax,
        presaleSupply,
        presaleCnt,
    ]);

    const {
        config,
        error: wErr,
        isError: isWErr,
        isLoading: isWLoading,
        refetch,
    } = usePrepareContractWrite({
        address,
        abi: rlABI['presaleMint'],
        functionName: 'presaleMint',
        args: [cnt, getProof(addr)],
        value: presalePrice && BigInt(presalePrice) * BigInt(cnt),
    });

    const { data: wData, write, reset } = useContractWrite(config);

    const {
        data: result,
        isSuccess,
        isLoading,
    } = useWaitForTransaction({
        hash: wData?.hash,
        onSettled(data) {
            console.log('WaitForTransaction Settled', data);
        },
    });
    return {
        PRICE,
        MAX,
        SUPPLY,
        mintedCnt,
        cost,
        wErr,
        isWErr,
        isWLoading,
        isLoading: isWLoading || isLoading,
        write,
        reset: () => {
            refetch?.();
            reset?.();
            rRefetch?.();
        },
        isSuccess,
        errMsg: Err[(wErr?.cause as any)?.reason],
        result,
    };
}

function useAuctionMint(tokenIds: number[]) {
    const {
        data,
        isError: isRError,
        isLoading: isRLoading,
        refetch: rRefetch,
    } = useContractReads({
        contracts: [
            {
                address,
                abi: rlABI['getAuctionPrice'],
                functionName: 'getAuctionPrice',
            },
            {
                address,
                abi: rlABI['MAX_PER_WALLET'],
                functionName: 'MAX_PER_WALLET',
            },
            {
                address,
                abi: rlABI['totalSupply'],
                functionName: 'totalSupply',
            },
        ],
        // watch: true,
        // cacheTime: 10_000,
        onSettled(data) {
            console.log('Reads Settled', data);
        },
    });

    const [{ result: auctionPrice }, { result: MAX_PER_WALLET }, { result: inventory }] = (data || [
        { result: undefined },
        { result: undefined },
        { result: undefined },
    ]) as Array<any>;
    const isEmpty = !data || !data.length;

    const [PRICE, MAX, SUPPLY, mintedCnt, cost] = useMemo(() => {
        if (isEmpty || isRError || isRLoading) {
            return [0, 0, 0, 0, 0];
        }
        const _price = formatEther(auctionPrice);
        const _cost = formatEther(auctionPrice * BigInt(tokenIds.length));
        return [_price, Number(MAX_PER_WALLET || 0), 6_000, inventory?.toString() || 0, _cost];
    }, [isEmpty, isRError, isRLoading, auctionPrice, tokenIds, MAX_PER_WALLET, inventory]);

    const {
        config,
        error: wErr,
        isError: isWErr,
        isLoading: isWLoading,
        refetch,
    } = usePrepareContractWrite({
        address,
        abi: rlABI['auctionMint'],
        functionName: 'auctionMint',
        args: [tokenIds],
        value: auctionPrice && BigInt(auctionPrice) * BigInt(tokenIds.length),
        onSettled(data) {
            console.log('Prepare Settled', data);
        },
    });

    const { data: wData, write, reset } = useContractWrite(config);

    const {
        data: result,
        isSuccess,
        isLoading,
    } = useWaitForTransaction({
        hash: wData?.hash,
        onSettled(data) {
            console.log('WaitForTransaction Settled', data);
        },
    });
    return {
        PRICE,
        MAX,
        SUPPLY,
        mintedCnt,
        cost,
        wErr,
        isWErr,
        isWLoading,
        isLoading: isWLoading || isLoading,
        write,
        reset: () => {
            refetch?.();
            reset?.();
            rRefetch?.();
        },
        isSuccess,
        errMsg: Err[(wErr?.cause as any)?.reason],
        result,
    };
}

function usePublicMint(cnt: number) {
    const {
        data,
        isError: isRError,
        isLoading: isRLoading,
        refetch: rRefetch,
    } = useContractReads({
        contracts: [
            {
                address,
                abi: rlABI['PRICE'],
                functionName: 'PRICE',
            },
            {
                address,
                abi: rlABI['MAX_PER_WALLET'],
                functionName: 'MAX_PER_WALLET',
            },
            {
                address,
                abi: rlABI['totalSupply'],
                functionName: 'totalSupply',
            },
        ],
        onSettled(data) {
            console.log('Reads Settled', data);
        },
    });

    const [{ result: price }, { result: max }, { result: supply }] = (data || [
        { result: undefined },
        { result: undefined },
        { result: undefined },
    ]) as Array<any>;

    const isEmpty = !data || !data.length;

    const [PRICE, MAX, SUPPLY, mintedCnt, cost] = useMemo(() => {
        if (isEmpty || isRError || isRLoading) {
            return [0, 0, 0, 0, 0];
        }
        const _price = formatEther(price);
        const _cost = formatEther(price * BigInt(cnt));
        return [_price, Number(max || 0), 6_000, supply?.toString() || 0, _cost];
    }, [isEmpty, isRError, isRLoading, price, cnt, max, supply]);

    const {
        config,
        error: wErr,
        isError: isWErr,
        isLoading: isWLoading,
        refetch,
    } = usePrepareContractWrite({
        address,
        abi: rlABI['publicSaleMint'],
        functionName: 'publicSaleMint',
        args: [cnt],
        value: price && BigInt(price) * BigInt(cnt),
        onSettled(data) {
            console.log('Prepare Settled', data);
        },
    });

    const { data: wData, write, reset } = useContractWrite(config);

    const {
        data: result,
        isSuccess,
        isLoading,
    } = useWaitForTransaction({
        hash: wData?.hash,
        onSettled(data) {
            console.log('WaitForTransaction Settled', data);
        },
    });
    return {
        PRICE,
        MAX,
        SUPPLY,
        mintedCnt,
        cost,
        wErr,
        isWErr,
        isWLoading,
        isLoading: isWLoading || isLoading,
        write,
        reset: () => {
            refetch?.();
            reset?.();
            rRefetch?.();
        },
        isSuccess,
        errMsg: Err[(wErr?.cause as any)?.reason],
        result,
    };
}

export { useFreeMint, usePresaleMint, useAuctionMint, usePublicMint };
