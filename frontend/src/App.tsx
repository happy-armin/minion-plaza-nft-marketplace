import React from "react";

// import layout components
import Header from "./layouts/Header";

// import necessary libs from web3-onboard
import { Web3OnboardProvider, init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import coinbaseModule from "@web3-onboard/coinbase";
import ConnectWallet from "./components/ConnectWallet";

// code block for web3-onboard wallet connntion
const INFURA_KEY = "38cd1dee58ab4d4c868298180a6519ed";

const injected = injectedModule();
const coinbase = coinbaseModule();

const wallets = [injected, coinbase];

const chains = [
  {
    id: "0x1",
    token: "ETH",
    label: "Ethereum Mainnet",
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  },
  {
    id: 11155111,
    token: "ETH",
    label: "Sepolia",
    rpcUrl: "https://rpc.sepolia.org/",
  },
  {
    id: "0x13881",
    token: "MATIC",
    label: "Polygon - Mumbai",
    rpcUrl: "https://matic-mumbai.chainstacklabs.com",
  },
  {
    id: "0x38",
    token: "BNB",
    label: "Binance",
    rpcUrl: "https://bsc-dataseed.binance.org/",
  },
  {
    id: "0xA",
    token: "OETH",
    label: "OP Mainnet",
    rpcUrl: "https://mainnet.optimism.io",
  },
  {
    id: "0xA4B1",
    token: "ARB-ETH",
    label: "Arbitrum",
    rpcUrl: "https://rpc.ankr.com/arbitrum",
  },
  {
    id: "0xa4ec",
    token: "ETH",
    label: "Celo",
    rpcUrl: "https://1rpc.io/celo",
  },
  {
    id: 666666666,
    token: "DEGEN",
    label: "Degen",
    rpcUrl: "https://rpc.degen.tips",
  },
  {
    id: 2192,
    token: "SNAX",
    label: "SNAX Chain",
    rpcUrl: "https://mainnet.snaxchain.io",
  },
];

const appMetadata = {
  name: "Minion Plaza",
  icon: "<svg>Minion Cart Icon</svg>",
  description: "Minion Plaza - NFT market place",
  recommendedInjectedWallets: [
    { name: "MetaMask", url: "https://metamask.io" },
    { name: "Coinbase", url: "https://wallet.coinbase.com/" },
  ],
};

const web3Onboard = init({
  wallets,
  chains,
  appMetadata,
});

function App() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <div className="app">
        <Header />
        <ConnectWallet />
      </div>
    </Web3OnboardProvider>
  );
}

export default App;
