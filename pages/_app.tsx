// 全局入口文件
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
// import Footer from '../components/common/Footer';
import '@rainbow-me/rainbowkit/styles.css';
import 'tailwindcss/tailwind.css'; // 全局样式只能在这里引入
import '../styles/global.scss';
import '../styles/home.scss';

import {
    RainbowKitProvider,
    getDefaultWallets,
    // connectorsForWallets,
    darkTheme,
} from '@rainbow-me/rainbowkit';
// import { argentWallet, trustWallet, ledgerWallet } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, goerli, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';

const { chains, publicClient } = configureChains(
    [mainnet, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli, sepolia] : [])],
    [
        // alchemyProvider({ apiKey: 'fu06SLByP_-1ptf4_jXppDwX8xFDSjup' }),
        // alchemyProvider({ apiKey: '93Zk3_hUR6teGzq31vKlBWQ3dQOYp_bm' }),
        alchemyProvider({ apiKey: 'XPJ64xggWC8POp61OxqE759IJoaMHLo5' }),
        infuraProvider({ apiKey: 'a0cfc190cf6446259c63e19accaaa8f6' }),
        publicProvider(),
    ]
);

const appName = 'LG';
const projectId = '2641a6337585c7535add1bc16dffbc2b';

const { connectors } = getDefaultWallets({
    appName,
    projectId,
    chains,
});

// const connectors = connectorsForWallets([
//     ...wallets,
//     {
//         groupName: 'Other',
//         wallets: [
//             argentWallet({ projectId, chains }),
//             trustWallet({ projectId, chains }),
//             ledgerWallet({ projectId, chains }),
//         ],
//     },
// ]);

const wagmiConfig = createConfig({
    autoConnect: true,
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
                <Analytics />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
