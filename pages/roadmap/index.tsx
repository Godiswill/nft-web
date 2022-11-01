import Head from 'next/head';
import Layout from '@/components/Layout';

export default function RoadMap() {
    return (
        <Layout className="tiger-common">
            <Head>
                <title>Road Map</title>
            </Head>
            <div className="dialog-wrap">
                <div className="dialog">
                    <h2 className="font-[RuiYan] text-center text-xl pb-5 border-b border-b-white">
                        路线图活动
                    </h2>
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
            </div>
        </Layout>
    );
}
