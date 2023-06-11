// 全局入口文件
import type { AppProps } from 'next/app';
// import Footer from '../components/common/Footer';
import '@rainbow-me/rainbowkit/styles.css';
import 'tailwindcss/tailwind.css'; // 全局样式只能在这里引入
import '../styles/global.scss';
import '../styles/home.scss';

import {
    RainbowKitProvider,
    getDefaultWallets,
    connectorsForWallets,
    darkTheme,
} from '@rainbow-me/rainbowkit';
import { argentWallet, trustWallet, ledgerWallet } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, goerli, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const { chains, publicClient } = configureChains(
    [mainnet, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli, sepolia] : [])],
    [alchemyProvider({ apiKey: '93Zk3_hUR6teGzq31vKlBWQ3dQOYp_bm' }), publicProvider()]
);

const appName = 'LeopardGod';
const projectId = 'ee3c846d86a16545057c76cea4c6a8d1';

const { wallets } = getDefaultWallets({
    appName,
    projectId,
    chains,
});

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains }),
        ],
    },
]);

const wagmiConfig = createConfig({
    // autoConnect: true,
    connectors,
    publicClient,
    // webSocketPublicClient,
});

const theme = darkTheme({
    accentColor: '#D7C19A',
    accentColorForeground: '#000000',
    borderRadius: 'small',
});

theme.fonts.body = `"Noto Sans", ${theme.fonts.body}`;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider theme={theme} chains={chains}>
                <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
