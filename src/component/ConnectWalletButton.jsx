import { Button, Menu, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context';
import { Loading } from './Loading';
//import { MetaMaskWallet } from '@thirdweb-dev/react';
import { ConnectWallet} from "@thirdweb-dev/react"

export const ConnectWalletButton = () => {

  //for a specific wallet
  //  const {connectMetamask,connectCoinbase , connectionStatus} = useStateContext();
  const {connectionStatus} = useStateContext();


    //we can also use this to connect to metamask
     //wallet.connect()m

     //const [anchorEl, setAnchorEl] = useState(null);

     /*const open = Boolean(anchorEl);
     const handleMenuOpen = (event) => {
       setAnchorEl(event.currentTarget);
     };*/

    const handleConnectMetamask = ()=>{
    /*    connectMetamask()
        .then((resp) => {
          console.log('succes')
        })
        .catch((err)=>{
            console.log('err')
            console.log(err)
        }) */
    }

    const handleConnectCoinBase = ()=>{
     /* connectCoinbase()
      .then((resp) => {
        console.log('succes')
      })
      .catch((err)=>{
          console.log('err')
          console.log(err)
      })  */
  }

  /*const handleClose = () => {
    setAnchorEl(null);
  };*/

    

    useEffect(()=>{console.log(connectionStatus)},[connectionStatus])
    
  return (
    <>
      <ConnectWallet
        theme={"dark"}
        modalTitle={"Choisir Wallet"}
        modalSize={"compact"}
        welcomeScreen={{ title: "aas" }}
        modalTitleIconUrl={""}
      />
    </>
  )
}

/*


import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="YOUR_CLIENT_ID"
      locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
      ]}
    >
      <ConnectWallet
        theme={"dark"}
        modalTitle={"Choisir Wallet"}
        modalSize={"compact"}
        welcomeScreen={{ title: "aas" }}
        modalTitleIconUrl={""}
      />
    </ThirdwebProvider>
  );
}

 <>
    <Button variant='contained' onClick={handleMenuOpen}>Connect Wallet</Button>
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleConnectMetamask}>
        Metamask
      </MenuItem>
      <MenuItem onClick={handleConnectCoinBase}>
        Coinbase
      </MenuItem>
    </Menu>
    </>
*/

/*

 {  connectionStatus !== 'connected' &&
      <ConnectWallet
        theme={"dark"}
        modalTitle={"Choisir Wallet"}
        modalSize={"compact"}
        welcomeScreen={{ title: "aas" }}
        modalTitleIconUrl={""}
      />
    }
    {connectionStatus === 'connecting' && <Loading message={'Connecting to Wallet'}/>}
    </>

*/