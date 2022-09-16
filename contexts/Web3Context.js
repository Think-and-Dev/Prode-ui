import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { RPC_URL_BY_CHAIN_ID, StatusConnection } from '../utils/constants'

export const Web3Context = createContext({})

export const useWeb3 = () => {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error('[useWeb3Context] Hook not used under web3 context provider')
  }
  return context
}

let web3Modal = null
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: RPC_URL_BY_CHAIN_ID,
        },
      },
    },
  })
}

const Web3ContextProvider = ({ children }) => {
  const [statusConnection, setStatusConnection] = useState(StatusConnection.Disconnected)
  const [addressConnected, setAddressConnected] = useState('')
  const [signer, setSigner] = useState()
  const [provider, setProvider] = useState(null)
  const [chainId, setChainId] = useState(0)

  useEffect(() => {
    const _statusConnection = web3Modal.cachedProvider ? StatusConnection.Connected : StatusConnection.Disconnected
    setStatusConnection(_statusConnection)
  }, [])

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [])

  const disconnect = async () => {
    setStatusConnection(StatusConnection.Disconnected)
    setAddressConnected('')
    setSigner(undefined)
    setChainId(0)
    provider?.close && (await provider.close())
    web3Modal.clearCachedProvider()
    setProvider(null)
  }

  const subscribeEvents = (_provider) => {
    if (!_provider.on) return

    _provider.on('disconnect', async () => {
      await disconnect()
    })

    _provider.on('accountsChanged', async (accounts) => {
      await disconnect()
    })

    _provider.on('chainChanged', async (networkId) => {
      setChainId(parseInt(networkId, 16))
    })
  }

  const connect = async () => {
    console.log('Connecting')
    try {
      if (statusConnection === StatusConnection.Connected) {
        return StatusConnection.Connected
      }

      const rawProvider = await web3Modal.connect()
      setProvider(rawProvider)
      const web3Provider = new ethers.providers.Web3Provider(rawProvider, 'any')
      web3Provider.on('network', (newNetwork) => {
        setChainId(newNetwork.chainId)
      })
      const networkId = (await web3Provider.getNetwork()).chainId
      const accounts = await web3Provider.listAccounts()

      setStatusConnection(StatusConnection.Connected)
      setAddressConnected(accounts[0])

      const signer = web3Provider.getSigner()
      setSigner(signer)
      setChainId(networkId)

      subscribeEvents(rawProvider)
      return StatusConnection.Connected
    } catch (err) {
      web3Modal.clearCachedProvider()
      setStatusConnection(StatusConnection.Error)

      return StatusConnection.Error
    }
  }

  const contextObj = {
    statusConnection,
    addressConnected,
    signer,
    connect,
    disconnect,
  }

  return <Web3Context.Provider value={contextObj}>{children}</Web3Context.Provider>
}

export default Web3ContextProvider
