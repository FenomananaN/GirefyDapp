import React, { useContext, createContext, useEffect, useState } from 'react'
import { useAddress, useContract, useMetamask, useContractWrite, useConnectionStatus, useCoinbaseWallet } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { abi } from '../contract';
import { Loading } from '../component';


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

  const { contract, isLoading:isContractLoading , error:contractError, isSuccess } = useContract('0x8eBd4993707cCb05AC87943a863F4aF92c8d37b4',abi);
  //const { usdtContract, isLoading:isUsdtContractLoading , error:usdtContractError, isUsdtSuccess } = useContract('0xdAC17F958D2ee523a2206206994597C13D831ec7');

  //hook for connecting to wallet status
  //value can be 'unkown' 'connecting' 'connected'
  const connectionStatus = useConnectionStatus()
  
  const { mutateAsync: transfer } = useContractWrite(contract, 'transfer');

  const address = useAddress()
  
  //one method we can use to connect to specific wallet
  /*
  const connectMetamask = useMetamask()
  const connectCoinbase = useCoinbaseWallet()
  */
  const [balance,setBalance] = useState('')
  const [token, setToken] = useState([])

  //loading transaction
  const [isLoading,setLoading] = useState(false)
  const [loadingMessage,setLoadingMessage] = useState('') 


  const transfertToken = async (to,value) => {
    setLoadingMessage(`Transfering ${value} Token`)
    setLoading(true)
    //from ethers 6 : utils is no longer available
    //value=ethers.utils.formatEther(value)
    value=ethers.utils.formatUnits(value,0)

    //console.log(value.toString(), 'feno')
    try {
      const data = await transfer({
				args: [
					to, // address to send token
					value, // amount of token to be tranfert
				],
			});
     // var data = await contract.ERC20.Transfer(to, value);

      console.log("contract call to tranfert token successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to tranfert token", error)
      setLoading(false)
    }
  }
  const getBalanceOf = async (address) => {
    const balance = await contract.call('balanceOf',[address])
    console.log(balance.toString())
    return balance.toString()
  }

  const getTokenName = async () => {
    const name = await contract.call('name');

    
      //target: ethers.utils.formatEther(campaign.target.toString()),
      //deadline: campaign.deadline.toNumber(),
     // amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),

    return name;
  }

  const getTokenSymbol = async () => {
    const symbol = await contract.call('symbol');
    return symbol;
  }


 /*
  const donate = async (pId, amount) => {
    const data = await contract.call('donateToCampaign', [pId], { value: ethers.utils.parseEther(amount)});

    return data;
  }*/
  const getBalance = async () => {
    const balance = await getBalanceOf(address)
    setBalance(balance)
  }

    useEffect(()=>{
        if (isSuccess){
            getBalance()
        }
    },[address])

    //set token data
    const getTokenData = async () => {
        const name = await getTokenName()
        const symbol = await getTokenSymbol()
        console.log(name,symbol)
        setToken({    
            name:name,
            symbol:symbol
        })
    }
    useEffect(()=>{
        if(isSuccess){getTokenData()}
    },[address])

    //Start all method of usdt
    //|| isUsdtContractLoading

  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        connectionStatus,
        balance,
        token,
//        connectMetamask,
//        connectCoinbase,
        getBalance,
        transfertToken,
        getTokenName,
        getTokenSymbol
      }}
    >
      {children}
      { isContractLoading  && <Loading message={'Contract Loading'}/>}
      { isLoading && <Loading message={loadingMessage}/>}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);

