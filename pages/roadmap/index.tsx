import Head from 'next/head';
import Layout from '@/components/Layout';

export default function RoadMap() {
    return (
        <Layout className="tiger-common road-map-bg">
            <Head>
                <title>Road Map</title>
            </Head>
            <div className="road-map">
                <h2 className="rui-font text-center text-2xl pb-5">路线图活动</h2>
                <div className="pt-3 pb-3">
                    我们致力于打造一个web3世界中的顶级IP，为此我们制定了自己的计划，当我们销售额达100%时，我们将启动下面的计划。
                </div>
                <ol start={1} type="1">
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                    <li>4.</li>
                    <li>5.</li>
                </ol>
            </div>
            <style global jsx>{`
                .road-map-bg {
                    background: linear-gradient(
                        rgba(154, 0, 67, 1) 0%,
                        rgba(55, 0, 73, 1) 54.051%,
                        rgba(0, 78, 110, 1) 100%
                    );
                }
                .road-map {
                    width: 546px;
                    margin: 10% auto 0;
                    border: 2px solid white;
                    border-radius: 2px;
                    padding: 30px 55px 42px;
                }
                .road-map h2 {
                    border-bottom: 1px solid white;
                }
                .road-map ol li {
                    border: 1px solid white;
                    border-radius: 3px;
                    padding: 12px;
                }
                .road-map li + li {
                    margin-top: 16px;
                }
            `}</style>
        </Layout>
    );
}
