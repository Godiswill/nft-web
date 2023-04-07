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
                        ROADMAP
                    </h2>
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
