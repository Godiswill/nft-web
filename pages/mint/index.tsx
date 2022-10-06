import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Mintx() {
    return (
        <Layout className="tiger-common">
            <Head>
                <title>Mint </title>
            </Head>
            <div className="mint-dialog">
                <h2 className="rui-font text-center">MINT需知</h2>
                <div className="desc">
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
                        选择mint数量：<span className="rui-font">-</span>
                        <span className="rui-font">2</span>
                        <span className="rui-font">+</span>
                    </div>
                    <div>
                        价格：<span className="rui-font">0.1</span>
                        <span className="rui-font">ETH</span>
                    </div>
                </div>
                <div className="text-center text-black btn rui-font">MINT NOW</div>
            </div>
            <style global jsx>{`
                .mint-dialog {
                    width: 806px;
                    margin: 10% auto 0;
                    background: rgba(49, 49, 49, 0.55);
                    border: 2px solid white;
                    border-radius: 2px;
                    padding: 30px 55px 42px;
                }
                .desc {
                    border-top: 1px solid white;
                    border-bottom: 1px solid white;
                    margin: 27px 0 20px;
                    padding: 10px 0;
                }
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
                    width: auto;
                    margin: auto;
                    padding: 10px 15px;
                    background-color: #e5e5e5;
                    border-radius: 4px;
                    width: 162px;
                }
                .real-mint span {
                    background-color: #c4c4c4;
                    border-radius: 2px 0 0 2px;
                    padding: 2px 4px;
                    color: black;
                }
                .real-mint span + span {
                    margin-left: 1px;
                }
            `}</style>
        </Layout>
    );
}
