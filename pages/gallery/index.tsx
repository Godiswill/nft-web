import Head from 'next/head';
import Layout from '@/components/Layout';

export default function RoadMap() {
    return (
        <Layout className="tiger-common" mainClassName="flex-center">
            <Head>
                <title>gallery</title>
            </Head>
            <div className="dialog font-[RuiYan] text-center">
                <h2 className="text-center text-4xl pb-5 pt-36">已全部售罄!</h2>
                <div className="bg-[#b11010] pt-3 pb-3 pl-3 pr-3 mt-24 btn rounded text-white text-center m-auto w-fit">
                    前往 OPENSEA 购买
                </div>
            </div>
        </Layout>
    );
}
