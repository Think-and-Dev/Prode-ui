import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  PRODEX_ADDRESS,
  RPC_URL_BY_CHAIN_ID,
  StatusConnection,
  TOKEN_ERC20
} from "../utils/constants";
import ERC20 from "../abis/ERC20.json";
import Prodex from "../abis/Prodex.json";

export const Web3Context = createContext({});

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error(
      "[useWeb3Context] Hook not used under web3 context provider"
    );
  }
  return context;
};

let web3Modal = null;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: RPC_URL_BY_CHAIN_ID
        }
      }
    }
  });
}

const Web3ContextProvider = ({ children }) => {
  const [statusConnection, setStatusConnection] = useState(
    StatusConnection.Disconnected
  );
  const [prodexContract, setProdexContract] = useState()
  const [addressConnected, setAddressConnected] = useState("");
  const [signer, setSigner] = useState();
  const [provider, setProvider] = useState(null);
  const [chainId, setChainId] = useState(0);

  useEffect(() => {
    const _statusConnection = web3Modal.cachedProvider
      ? StatusConnection.Connected
      : StatusConnection.Disconnected;
    setStatusConnection(_statusConnection);
  }, []);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, []);

  const disconnect = async () => {
    setStatusConnection(StatusConnection.Disconnected);
    setAddressConnected("");
    setSigner(undefined);
    setChainId(0);
    provider?.close && (await provider.close());
    web3Modal.clearCachedProvider();
    setProvider(null);
  };

  const subscribeEvents = (_provider) => {
    if (!_provider.on) return;

    _provider.on("disconnect", async () => {
      await disconnect();
    });

    _provider.on("accountsChanged", async (accounts) => {
      await disconnect();
    });

    _provider.on("chainChanged", async (networkId) => {
      setChainId(parseInt(networkId, 16));
    });
  };

  const connect = async () => {
    try {
      if (statusConnection === StatusConnection.Connected) {
        return StatusConnection.Connected;
      }

      const rawProvider = await web3Modal.connect();
      setProvider(rawProvider);
      const web3Provider = new ethers.providers.Web3Provider(
        rawProvider,
        "any"
      );
      web3Provider.on("network", (newNetwork) => {
        setChainId(newNetwork.chainId);
      });
      const networkId = (await web3Provider.getNetwork()).chainId;
      const accounts = await web3Provider.listAccounts();

      setStatusConnection(StatusConnection.Connected);
      setAddressConnected(accounts[0]);

      const signer = web3Provider.getSigner();

      setSigner(signer);
      setChainId(networkId);

      // SET PRODEX CONTRACT
      const ProdexContract = new ethers.Contract(
        PRODEX_ADDRESS,
        Prodex.abi,
        signer
      );
      setProdexContract(ProdexContract)

      subscribeEvents(rawProvider);
      return StatusConnection.Connected;
    } catch (err) {
      web3Modal.clearCachedProvider();
      setStatusConnection(StatusConnection.Error);

      return StatusConnection.Error;
    }
  };

  const approveToken = async () => {
    try {
      const ERC20Contract = new ethers.Contract(TOKEN_ERC20, ERC20.abi, signer);
      const approveTx = await ERC20Contract.approve(
        PRODEX_ADDRESS,
        ethers.constants.MaxUint256
      );
      const response = await approveTx.wait();
      return response;
    } catch (err) {
      throw err;
    }
  };

  const placeBet = async (eventId, betType) => {
    const ERC20Contract = new ethers.Contract(TOKEN_ERC20, ERC20.abi, signer);
    const userAllowance = await ERC20Contract.allowance(
      addressConnected,
      prodexContract.address
    );

    if (!parseInt(userAllowance)) {
      await approveToken();
    }

    await prodexContract?.placeBet(eventId, betType);
  };

  const getNGODonationPercentage = async () => {
    return prodexContract?.NGODonationPercentage();
  };

  const getGlobalPoolSize = async () => {
    return prodexContract?.globalPoolSize();
  };

  const getNGOCurrentPoolPrize = async () => {
    return prodexContract?.getNGOCurrentPoolPrize();
  }

  const getMinWinnerPoints = async () => {
    return prodexContract?.minWinnerPoints();
  }

  const placeBets = async (eventIds, betTypes) => {
    console.log('PLACING BETS: ')
    console.log('EVENT IDs: ', eventIds);
    console.log('BET TYPES: ', betTypes);

    const ERC20Contract = new ethers.Contract(TOKEN_ERC20, ERC20.abi, signer);

    const userAllowance = await ERC20Contract.allowance(
      addressConnected,
      PRODEX_ADDRESS
    );

    console.log("userALLOWANCE: ", userAllowance)

    if (!parseInt(userAllowance)) {
      await approveToken();
    }

    return prodexContract?.placeBets(eventIds, betTypes)
  }

  const startEvent = async () => {
    return prodexContract?.startEvent(1)
  }

  // uint256 public immutable maxEvents;
  // uint256 public winners;
  // uint256 public winnerPrize;
  // uint256 public ngoPrize;
  // uint256 public immutable betAmount;

  const contextObj = {
    statusConnection,
    addressConnected,
    signer,
    connect,
    disconnect,
    chainId,
    approveToken,
    placeBet,
    getNGODonationPercentage,
    getGlobalPoolSize,
    getNGOCurrentPoolPrize,
    getMinWinnerPoints,
    placeBets,
    startEvent
  };

  return (
    <Web3Context.Provider value={contextObj}>{children}</Web3Context.Provider>
  );
};

export default Web3ContextProvider;
