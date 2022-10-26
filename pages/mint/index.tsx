import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Mintx() {
    return (
        <Layout className="tiger-common" mainClassName="flex-center">
            <Head>
                <title>Mint </title>
            </Head>
            <div className="dialog">
                <h2 className="font-[RuiYan] text-center text-2xl">MINT需知</h2>
                <div className="border-t border-t-white mt-7 mb-5 py-3">
                    <div>单个价格 0.05 ETH</div>
                    <div>最高 mint 数量 3 个</div>
                </div>
                <div className="user-input mt-4">
                    <div className="mb-2">数量：</div>
                    <input type="number" min={1} max={3} />
                </div>
                <div className="user-input mt-4">
                    <div className="mb-2">价格：</div>
                    <input type="number" min={0} />
                </div>
                <div className="flex justify-between mt-8 mb-10 real-mint text-base">
                    <div className="mb-2">
                        选择mint数量：<span className="font-[RuiYan]">-</span>
                        <span className="font-[RuiYan] ml-1 mr-1">2</span>
                        <span className="font-[RuiYan]">+</span>
                    </div>
                    <div>
                        价格：<span className="font-[RuiYan]">0.1</span>
                        <span className="font-[RuiYan] ml-1">ETH</span>
                    </div>
                </div>
                <div className="btn text-center text-white text-2xl pt-2 pb-2 rounded font-[RuiYan] m-auto">
                    MINT NOW
                </div>
            </div>
            <style global jsx>{`
                .user-input input {
                    background-color: transparent;
                    width: 100%;
                    border: 1px solid white;
                    outline: none;
                    border-radius: 3px;
                    text-indent: 8px;
                    height: 36px;
                }
                .btn {
                    background: rgb(177, 16, 16);
                    width: 162px;
                }
                .real-mint span {
                    background-color: #c4c4c4;
                    border-radius: 2px 0 0 2px;
                    padding: 2px 4px;
                    color: black;
                }
            `}</style>
        </Layout>
    );
}
