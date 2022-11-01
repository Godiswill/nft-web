import Head from 'next/head';
import Layout from '@/components/Layout';

const text = [
    { title: '发售时间：', items: ['2022/12/30'] },
    { title: '发售价格：', items: ['白名单：待定', '公售：0.05ETH'] },
    {
        title: '发售数量：',
        items: ['总量6030张圆形豹，实际发售数量5600张', '白名单数量：1200张', '公售数量：4400张'],
    },
    {
        title: '权益：',
        items: [
            '1.合成权益：购买圆形豹NFT后，将能免费合成豹子头NFT，豹子头NFT里包含至尊皇冠，合成豹子头NFT将有机会获取至尊皇冠版豹子头，当集齐18种至尊皇冠后将能获得3个愿望。',
            '2.会员权益：待定',
        ],
    },
];

export default function Mint() {
    return (
        <Layout className="tiger-common">
            <Head>
                <title>Mint </title>
            </Head>
            {/* <div className="dialog">
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
            </div> */}
            <div className="dialog-wrap">
                <div className="dialog">
                    <h2 className="font-[RuiYan] text-center text-xl mb-6">发售信息</h2>
                    {text.map((it) => (
                        <div key={it.title} className="border-t border-t-white py-2">
                            <div className="font-[RuiYan] mb-2">{it.title}</div>
                            {it.items.map((t) => (
                                <div key={t}>{t}</div>
                            ))}
                        </div>
                    ))}
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
