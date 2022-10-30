// 全局入口文件
import type { AppProps } from 'next/app';
// import Footer from '../components/common/Footer';
import 'tailwindcss/tailwind.css'; // 全局样式只能在这里引入
import '../styles/global.scss';
import '../styles/home.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
