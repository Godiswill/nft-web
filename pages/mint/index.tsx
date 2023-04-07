import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Mint() {
    return (
        <Layout className="tiger-common">
            <Head>
                <title>Mint </title>
            </Head>
            <div className="dialog-wrap">
                <div className="dialog"></div>
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
