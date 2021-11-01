import React from 'react';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { contractAddress, abi } from '../contract/contract';

const Web3Contect = React.createContext();

const initialState = {
    walletAddress: null,
    chainId: null,
    web3: null
  }

const reducer = (state, action) => {
    switch (action.type) {
      case 'WALLET_CONNECT':
        return {
          ...state,
          walletAddress: action.data.walletAddress,
        }
      case 'CHAIN_ID_CHANGE':
          return {
            ...state,
            chainId: action.data.chainId,
          }
      case 'WEB3_ADD':
          return {
            ...state,
            web3: action.data.web3,
        }
        case 'WALLET_DISCONNECT':
            return {
              ...state,
              walletAddress: null,
              chainId: null,
              web3: null
          }
      default:
        return state
    }
  } 

export const Web3Provider = ({children}) => {
  const [store, dispatch] = React.useReducer(reducer, initialState)

    const contextValue = React.useMemo(
        () => [store, dispatch],
        [store, dispatch]
    )

    const connectToWallet = async () => {
        try {
          const providerOptions = {
            /* See Provider Options Section */
          };
          
          const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            providerOptions
          });
          
          const provider = await web3Modal.connect();
          
          const web3 = new Web3(provider);
          const [accountAddress] = await web3.eth.getAccounts();

          dispatch({
              type: 'WALLET_CONNECT',
              data: { walletAddress: accountAddress }
          });

          provider.on("accountsChanged", (accounts) => {
            const [accountAddress] = accounts;

            dispatch({
                type: 'WALLET_CONNECT',
                data: { walletAddress: accountAddress }
            });
          });

          // Subscribe to chainId change
          provider.on("chainChanged", (chainId) => {
              dispatch({
                type: 'CHAIN_ID_CHANGE',
                data: { chainId: chainId }
            });
          });

          provider.on("disconnect", (error) => {
            dispatch({
                type: 'WALLET_DISCONNECT',
                data: {}
            });
          });
          
          dispatch({
            type: 'WEB3_ADD',
            data: { web3: web3 }
        });

          return web3;
        } catch (error) {
            console.log(error);
        }
    }

    const getContract = async () => {
        try {
            let { web3, walletAddress } = store;
            let contract = null;
            if (web3 === null) {
                await connectToWallet();
                web3 = store.web3;
                walletAddress = store.walletAddress;
            }

            if (walletAddress) {
                contract = new web3.eth.Contract(abi, contractAddress, {
                    from: walletAddress,
                });
            }

            return contract;
        } catch (error) {

        }
    }

    const value = { store: contextValue, connectToWallet, getContract };

  return (
    <Web3Contect.Provider value={value}>
      {children}
    </Web3Contect.Provider>
  )
}

export function useWeb3() {
  return React.useContext(Web3Contect)
}