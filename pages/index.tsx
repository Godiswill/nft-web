import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Page() {
    return (
        <Layout className="tiger">
            <Head>
                <title>豹子官网 MVP 1.0.0</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <div className="h-full flex items-end">
                <Link href="/home">
                    <div className="rui-font cursor-pointer btn flex justify-center items-center ml-auto mr-auto mb-14 rounded text-white bg-red-600 text-2xl">
                        开始探索
                    </div>
                </Link>
            </div>

            <style jsx>{`
                .btn {
                    width: 641px;
                    height: 83px;
                }
            `}</style>
        </Layout>
    );
}
