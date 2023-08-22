import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import wl from './wl.json';

const whitelist = Array.from(new Set(wl.free));

const leafNodes = whitelist.map((addr) => keccak256(addr));
const merkletree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

const rootHash = merkletree.getHexRoot();

const getProof = (addr: `0x${string}` | undefined) => {
    if (!addr) return [];
    return merkletree.getHexProof(keccak256(addr));
};

const verify = (addr: `0x${string}` | undefined) => {
    const hexProof = getProof(addr);
    return merkletree.verify(hexProof, addr as string, rootHash);
};

export { verify, getProof };
