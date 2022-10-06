import Head from 'next/head';
import Layout from '@/components/Layout';

export default function RoadMap() {
    return (
        <Layout className="tiger-common">
            <Head>
                <title>gallery</title>
            </Head>
            <div className="gallery rui-font">
                <h2 className="text-center text-9xl pb-5 pt-36">已全部售罄!</h2>
                <div className="pt-3 pb-3 pl-3 pr-3 mt-32 btn rounded text-black text-center m-auto w-fit">
                    前往 OPENSEA 购买
                </div>
            </div>
            <style global jsx>{`
                .gallery {
                    width: 806px;
                    margin: 10% auto 0;
                    background: rgba(49, 49, 49, 0.55);
                    border: 2px solid white;
                    border-radius: 2px;
                    padding: 30px 55px 42px;
                }
                .gallery .btn {
                    background-color: #e5e5e5;
                }
            `}</style>
        </Layout>
    );
}
