import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import wl from './wl.json';

const free = Array.from(new Set(wl.OG));
const minted: string[] = []; // Array.from(new Set(wl.minted || []));
const whitelist = free.filter((it) => !minted.includes(it));

// console.log(wl.free.length, free.length, wl.minted?.length, minted.length, whitelist.length);
// console.log(whitelist);

// console.log('whitelist----', whitelist.length === wl.free.length);
// console.log(JSON.stringify({ whitelist }));

const leafNodes = whitelist.map((addr) => keccak256(addr));
const merkletree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

const rootHash = merkletree.getHexRoot();
// console.log(rootHash);
const getProof = (addr: `0x${string}` | undefined) => {
    if (!addr) return [];
    return merkletree.getHexProof(keccak256(addr));
};

const verify = (addr: `0x${string}` | undefined) => {
    const hexProof = getProof(addr);
    return merkletree.verify(hexProof, addr as string, rootHash);
};

export { verify, getProof };
