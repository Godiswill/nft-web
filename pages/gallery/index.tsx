import Head from 'next/head';
import Layout from '@/components/Layout';

export default function RoadMap() {
    return (
        <Layout className="tiger-common">
            <Head>
                <title>gallery</title>
            </Head>
            <div className="gallery rui-font text-center">
                <h2 className="text-center text-7xl pb-5 pt-36">已全部售罄!</h2>
                <div className="pt-3 pb-3 pl-3 pr-3 mt-24 btn rounded text-white text-center text-2xl m-auto w-fit">
                    前往 OPENSEA 购买
                </div>
            </div>
            <style global jsx>{`
                .gallery {
                    width: 546px;
                    margin: 10% auto 0;
                    background: rgba(49, 49, 49, 0.55);
                    border: 2px solid white;
                    border-radius: 2px;
                    padding: 0 0 56px;
                }
                .gallery .btn {
                    background-color: rgba(177, 16, 16);
                }
            `}</style>
        </Layout>
    );
}
