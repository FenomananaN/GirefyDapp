import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useStateContext } from '../context'

export const TransfertToken = () => {
    const { address, getBalance, balance,token,transfertToken  } = useStateContext()

    
    const [addressTo,setAddressTo] = useState('')
    const [amount,setAmount] = useState('')
    
    console.log(token)

    const handleTransfert = () => {
        if(!amount && !addressTo){
            alert('ne peut pas etre vide')
        }
        else{
            console.log(addressTo,amount)
             // transfer(to, amount)
            console.log('Initiating a transfer...');
    
        const recipientAddress = addressTo;
        const transferAmount = amount;

       // const decimals = contract.decimals()
    
        console.log(`Transferring ${transferAmount} ${token?.symbol}} tokens to ${recipientAddress}`); // from ${ownerAddress}

        transfertToken(addressTo,transferAmount)
        getBalance()
        
        //const amoutToBeSent = ethers.parseUnits(amount, 18)
    
         /* const transfert = await contract.transfer(recipientAddress, amoutToBeSent)
          .then((transferResult)=>{
            console.log('result of transfert',transferResult)
          })
          .catch((error)=>{
            console.log('error',error)
          })
    
        await transfert?.wait();*/
        console.log('Transfer completed')
        }
    

    }

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        p:3
    }}>
        
    <TextField label={'Adress du recipient'} value={addressTo} onChange={(e)=>setAddressTo(e.target.value)}/>
    <TextField label={'le nombre '+token?.name} value={amount} onChange={(e)=>setAmount(e.target.value)} sx={{mt:1}}/>
    <Button variant='contained' 
    onClick={handleTransfert}
    sx={{
        mt:1
    }}>Transferer</Button>
    </Box>
  )
}
