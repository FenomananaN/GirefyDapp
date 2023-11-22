import React, { useEffect, useState } from 'react'
import { Grid, Box, Typography, Button, Divider, Stack, Chip, CardMedia } from '@mui/material'
import { useStateContext } from './context'
import { ConnectWalletButton } from './component/ConnectWalletButton'
import { TransfertToken } from './component'
//import Button from "@mui/material/Button"

const App = () => {
    const { address, getBalance, balance , token } = useStateContext()
    
  return (
    <div>
      { address &&
      (
        <>
          <Typography>{address}</Typography>   
          <Typography> balance is {balance} {token?.symbol}</Typography>
          <TransfertToken/>
        </>
      )}

      <ConnectWalletButton />
    </div>
  )
}

export default App
