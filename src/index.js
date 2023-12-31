import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { 
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect} from "@thirdweb-dev/react";

import {Sepolia} from '@thirdweb-dev/chains'
import { StateContextProvider } from './context';

import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

//import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
        activeChain={Sepolia}
        clientId="019e19953c2a1884996f40491d1e8b35"
        supportedWallets={[
          metamaskWallet({ recommended: true }),
          coinbaseWallet(),
          walletConnect(),
        ]}
    >
      <ThemeProvider theme={theme}>
        <StateContextProvider>
            <App />
        </StateContextProvider>
        </ThemeProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
