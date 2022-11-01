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
                    <div className="text-base font-[RuiYan] cursor-pointer w-72 h-9 mb-20 lg:w-[17.3rem] 2xl:h-11 2xl:w-[22rem] flex justify-center items-center ml-auto mr-auto rounded bg-[#B11010] text-white">
                        开始探索
                    </div>
                </Link>
            </div>
        </Layout>
    );
}
