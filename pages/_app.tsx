import {
  RainbowKitProvider,
  connectorsForWallets,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
  argentWallet,
  ledgerWallet,
  metaMaskWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { baseGoerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "../styles/globals.css";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [baseGoerli],
  [publicProvider()]
);

const projectId = "YOUR_PROJECT_ID";
const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

const { wallets } = getDefaultWallets({
  appName: "RainbowKit demo",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Rainbowkit Demo",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains, shimDisconnect: true }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
        <AnonAadhaarProvider _appId={app_id}>
          <Component {...pageProps} />
        </AnonAadhaarProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
