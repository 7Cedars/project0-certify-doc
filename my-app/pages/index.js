/*
This is a simple utility that lets users issue and check certificates of authenticity for offline documents. 
Important functional characteristics of the dapp: 
Users can use the app - in read-only mode - without having an ethereum wallet installed. 
If they wish to issue a certificate, they are introduced to MetaMask, 
Including a link and explanation. 
It does not use all functionalities of the solidity contract yet. 

please note: cc
I built the app while learning solidity and js. It is an personal educational project.  
For an extensive explanation of the app and its aims, see the readme file and about section in the app
*/ 

// importing dependencies. 
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ethers } from "ethers"; 
import { UserContext } from "../components/userContext";
import { Container, Grid, Card } from "semantic-ui-react"; 
import 'semantic-ui-css/semantic.min.css';
import ABI from '../utils/CertifyDoc.json';
import Web3Modal from "web3modal";
import Portis from "@portis/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";
import Fortmatic from "fortmatic";
import { INFURA_ID, NETWORK, NETWORKS } from "../constants";

// importing components. 
import NavBar  from "../components/navBar";
import Messages from "../components/Messages";
import FrontPage from "../components/FrontPage";
import AboutPage from "../components/AboutPage";
import CheckCertificates from "../components/CheckCertificates"
import RenderCertificate from "../components/RenderCertificate"
import IssueCertificate from "../components/IssueCertificate"

// web3modal code examples from speedrunethereum's Austin Griffith.  
// // See: 
// const web3Modal = new Web3Modal({
//   network: "mainnet", 
//   cacheProvider: true, 
//   theme: "light", 
//   providerOptions: {
//     walletconnect: {
//       package: WalletConnectProvider, // required
//       options: {
//         bridge: "https://polygon.bridge.walletconnect.org",
//         infuraId: INFURA_ID,
//         rpc: {
//           1: `https://mainnet.infura.io/v3/${INFURA_ID}`, // mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
//           42: `https://kovan.infura.io/v3/${INFURA_ID}`,
//           100: "https://dai.poa.network", // xDai
//         },
//       },
//     },
// //     portis: {
// //       display: {
// //         logo: "https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png",
// //         name: "Portis",
// //         description: "Connect to Portis App",
// //       },
// //       package: Portis,
// //       options: {
// //         id: "6255fb2b-58c8-433b-a2c9-62098c05ddc9",
// //       },
// //     },
//     fortmatic: {
//       package: Fortmatic, // required
//       options: {
//         key: "pk_live_5A7C91B2FC585A17", // required
//       },
//     },
//     authereum: {
//       package: Authereum, // required
//     },
//   },
// });

// Setup
export default function Home() {
  // PART 0: setting all state and ref constants of the page. 
  // the contract address
  const contractAddress = "0xB4AfD5AA80a7D8e01BF3e7F3C8E3917a1De3790f";
  // abi of the solidity contract. 
  const abi = ABI.abi;
  // key to alchemy api thta provides access to lockchain in case MetaMask is not installed.  
  const apiKey = process.env.NEXT_PUBLIC_API_KEY; 
  
  // keeps track of what tab is selected. 
  const [tab, setTab] = useState('Home');
  // used to define a component height relevant to screen height of browser window (only done at startup).  
  const [heightComponent, setHeightComponent] = useState('Home');
  // keeps track if app is loading (most often waiting for blockchain interaction) 
  const [loading, setLoading] = useState();
  // keeps track of meesaging to users. Both error and success messages.  
  const [message, setMessage] = useState('invisible');
  // keeps track if a wallet has been connected to the app, and if so - what address.  
  const [walletAddress, setWalletAddress] = useState(null);
  // keeps track if a wallet has been connected to the app, and if so - what address.  
  const [walletConnected, setWalletConnected] = useState(false);
  // keeps track if a wallet has a linked Ethereum Name.  
  const [ensName, setEnsName] = useState(null);
  // array to store user input. 
  const [userInput, setUserInput] = useState('');
  // array to save processed certificates returned from contract.
  const [certificatesArray, setCertificatesArray] = useState(null);
  // See loading web3modal below. 
  const web3ModalRef = useRef();

/* 
The following are functions to interact with ethereum contract. 
*/

const getSigner = async () => {
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
  const provider = await web3ModalRef.current.connect();
  const web3Provider = new ethers.providers.Web3Provider(provider);

  // If user is not connected to the Goerli network, let them know and throw an error
  const { chainId } = await web3Provider.getNetwork();
  if (chainId !== 5) {
    window.alert("Change the network to Goerli");
    throw new Error("Change network to Goerli");
  }
    const signer = web3Provider.getSigner();
    return signer;
  }

//   connectWallet: Connects the MetaMask wallet
const connectWallet = async () => {
  try {
    // Get the provider from web3Modal, which in our case is MetaMask
    // When used for the first time, it prompts the user to connect their wallet
    const signer = await getSigner();
    const ethAddress = await signer.getAddress()
    setWalletConnected(true);
    setWalletAddress(ethAddress); 
  } catch (err) {
    console.error(err);
  }
};

  // // Connecting wallet (on click button) also check if ENS name is attached to address. 
  // const connectWallet = async () => {
    
  //   try {
  //     const provider = await web3ModalRef.current.connect();
  //     const web3Provider = new ethers.providers.Web3Provider(provider);

  //     const { chainId }  = await web3Provider.getNetwork();
  //     // const ens = await web3Provider.lookupAddress(accounts[0]);

  //     if (chainId == 5) {
  //       setWalletAddress(accounts);
  //       // if (ens) { setEnsName(ens) }  
  //       console.log("walletAddress:", walletAddress);  
  //                   // "ens: ", ens)  
  //       setWalletConnected(true);
        
  //     } else {
  //       setMessage('wrongNetwork');
  //       setWalletAddress('wrongNetwork');
  //     }
      
  //     return web3Provider;

  //   } catch (error) {
  //     console.log(error);
  //     setWalletConnected(false);
  //   }
  // }

  // // Check if Wallet is connected and if so, if address has ens name attached. 
  // const isWalletConnected = async () => {
  //     try {
  //       const { ethereum } = window;
  //       const accounts = await ethereum.request({ method: 'eth_accounts' })
  //       const provider = new ethers.providers.Web3Provider(ethereum, "any");
        
  //       if (accounts.length > 0 ) { 
  //         const { chainId }  = await provider.getNetwork();
  //         const ens = await provider.lookupAddress(accounts[0]);
  
  //         if (chainId == 5) { 
  //           setWalletAddress(accounts)
  //           if (ens) { setEnsName(ens) }
  //           console.log("walletAddress:", walletAddress, 
  //                       "ens: ", ens)           
  //         }
  //         if (chainId != 5) {
  //           setMessage('wrongNetwork');
  //           setWalletAddress('wrongNetwork');
  //         }
  //       }
  //       else {
  //         console.log("No connected wallet.");
  //       }
  //     } catch (error) {
  //       console.log("error: ", error);
  //     }
  //   }
  
  // const logoutOfWeb3Modal = async () => {
  // //   await web3Modal.clearCachedProvider();
  // //   if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect == "function") {
  // //     await injectedProvider.provider.disconnect();
  // //   }
  // //   setTimeout(() => {
  // //     window.location.reload();
  // //   }, 1);
  // };

  //  const loadWeb3Modal = useCallback(async () => {
  //   const provider = await web3Modal.connect();
  //   setInjectedProvider(new ethers.providers.Web3Provider(provider));

  // //   provider.on("chainChanged", chainId => {
  // //     console.log(`chain changed to ${chainId}! updating providers`);
  // //     setInjectedProvider(new ethers.providers.Web3Provider(provider));
  // //   });

  // //   provider.on("accountsChanged", () => {
  // //     console.log(`account changed!`);
  // //     setInjectedProvider(new ethers.providers.Web3Provider(provider));
  // //   });

  // //   // Subscribe to session disconnection
  // //   provider.on("disconnect", (code, reason) => {
  // //     console.log(code, reason);
  // //     logoutOfWeb3Modal();
  // //   });
  //  }, [setInjectedProvider]); 

  // Changing network (on click button) To be Implemented. 
  // For now, this throws an error.. 
  // const changeNetwork = async () => {
  //   try {
  //       const { ethereum } = window;
        
  //       ethereum.request({
  //         method: "wallet_addEthereumChain",
  //         params: [{
  //             chainId: "0x5",
  //             rpcUrls: ["https://eth-goerli.g.alchemy.com/v2/"],
  //             chainName: "Goerli Test Network",
  //             nativeCurrency: {
  //                 name: "GoerliETH",
  //                 symbol: "GoerliETH",
  //                 decimals: 18
  //             },
  //             blockExplorerUrls: ["https://goerli.etherscan.io"]
  //         }]
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // issuing a new certificate. Signer is required. 
  const certify = async (userInput) => {
    setLoading('upload')

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();

        const dcContract = new ethers.Contract(contractAddress, abi, signer);           
        let tx = await dcContract.certify(userInput[0], userInput[1], userInput[2]);
        setMessage("uploadInProgress")
        // console.log(tx.hash) 

        await tx.wait();
        setMessage("uploadSuccessful")
      }
      else { setMessage("errorUpload") }

    } catch (err) { 
      setMessage("errorUpload")
      console.error(err.message);
    }

  setLoading(null)
  }

  // Revoke a certificate. Signer required. 
  const revokeCertificate = async (index) => {
    setLoading(index)
    
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const dcContract = new ethers.Contract(contractAddress, abi, signer);
        
        let tx = await dcContract.revokeCertificate(index);
        
        setMessage("revokeInProgress")
        await tx.wait();
      }

    } catch (err) {
      console.error(err.message);
    }
    setMessage("revokeSuccessful")
    setLoading(null)
  }

  /* 
  * Note that the following functions are read only. Only a provider is required. 
  * When a signer is not required, we do NOT call the MetaMask web3provider. 
  * Instead, access is provided through alchemy API which is accesible to every user.
  */

  // Checking certificates by docHash. Returns an array of indexes. Signer not required. 
  const checkDocHash = async (userInput) => {

    try {
        const provider = new ethers.providers.AlchemyProvider(5, apiKey);
        const dcContract = new ethers.Contract(contractAddress, abi, provider);
        const certificateIndex = await dcContract.checkDocHash(userInput);

        return certificateIndex
      } catch (err) {
      console.error(err.message);
    }
  }

  // Checking certificates by address of issuer. Returns an array of indexes.  Signer not required.
  const checkIssuer = async (userInput) => {
    try {
      const provider = new ethers.providers.AlchemyProvider(5, apiKey);
      const dcContract = new ethers.Contract(contractAddress, abi, provider);
      const certificateIndex = await dcContract.checkIssuer(userInput);
      
      return certificateIndex
    } catch (err) {
      console.error(err.message);
    }
  }

  // Checking certificates by address of recipient. Returns an array of indexes.  Signer not required.
  const checkRecipient = async (userInput) => {
    try {
      const provider = new ethers.providers.AlchemyProvider(5, apiKey);
      const dcContract = new ethers.Contract(contractAddress, abi, provider);
      const certificateIndex = await dcContract.checkRecipient(userInput);
      
      return certificateIndex
    } catch (err) {
      console.error(err.message);
    }
  }

  // Takes an array of indexes, and calls each certificate. No signer required.
  const callCertificate = async (index) => {

    try {
      const provider = new ethers.providers.AlchemyProvider(5, apiKey);
      const dcContract = new ethers.Contract(contractAddress, abi, provider);
      const data = await dcContract.callCertificate(parseInt(index));
      
      const dateTimeObj = new Date(parseInt(data[4] * 1000))
      const issuerEns = await provider.lookupAddress(data[1])
      const recipientEns = await provider.lookupAddress(data[2])

      const certificate = {
        id: index,
        docHash: data[0],
        issuer: data[1],
        issuerEns: issuerEns,
        recipient: data[2],
        recipientEns: recipientEns, 
        description: data[3],
        dateTime: new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(dateTimeObj)
      }
      
      return (certificate)

    } catch (err) {
      console.error(err.message);
    }
  }

  // Passes user input to the requested (read only) function, based on the selected tab. 
  // All these functions return index of certificates 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading('loading')

    let certificates = [];
    let data = []

    if (tab == 'Issued_Certs') {
      data = await (checkIssuer(userInput))
    } 
    if (tab == 'Received_Certs') {
      data = await (checkRecipient(userInput))
    } 
    if (tab == 'DocHash_Certs') {
      data = await (checkDocHash(userInput))
    } 

    // Note that the following mapping does NOT work. 
    // data.map(async (item) => {
    //     let _certificate = await callCertificate( parseInt(item) )
    //     certificates.concat(_certificate)
    // })

    // calls data of each certificate, based on index received from previous call. 
    try { 
      if (data.length === 0) {
        certificates.push(
          { id: 0,
            description: "empty" }
        )}

        for (let i = 0; i < data.length; i++) {
          // console.log(data)
          certificates.push(
            await callCertificate( parseInt(data[i]) )
        )}

      } catch (err) {
        setMessage("invalidUserInput")
      }
    
    setCertificatesArray(certificates)
    setLoading(null)
    setUserInput('')
  }

  /* 
  * What follows are the useEffect calls: changing state according to some change in another state. 
  */

  // at startup calls checks if wallet is connected, sets a background image and sets dynamic height for component. 
  useEffect(() => {
    // getProvider();
    setMessage('warningTestApp');
    // isWalletConnected()
    document.body.style.backgroundImage= `conic-gradient(from 90deg at 10% 15%, CornflowerBlue, fuchsia, salmon, CornflowerBlue)`;
    setHeightComponent(`${Math.round(document.documentElement.clientWidth * .38)}px`);
  }, []);
  
  useEffect(() => {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
      //   network: "goerli",
      //   providerOptions: {},
      //   disableInjectedProvider: false,
      // });
      // network: "goerli", 
      cacheProvider: false, 
      disableInjectedProvider: false,
      theme: "light", 
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            bridge: "https://polygon.bridge.walletconnect.org",
            infuraId: INFURA_ID,
            rpc: {
              1: `https://mainnet.infura.io/v3/${INFURA_ID}`, // mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
              42: `https://kovan.infura.io/v3/${INFURA_ID}`,
              100: "https://dai.poa.network", // xDai
            },
          },
        },
        fortmatic: {
          package: Fortmatic, // required
          options: {
            key: "pk_live_5A7C91B2FC585A17", // required
          },
        },
        authereum: {
          package: Authereum, // required
        },
      },
  })}, []);

  // useEffect(() => {
  //   if (web3Modal.cachedProvider) {
  //     loadWeb3Modal();
  //   }
  // }, [loadWeb3Modal]);

  // everytime tab is changed, resets certificate list and userinput. 
  useEffect(() => {
    setCertificatesArray(null)
    setUserInput('')
    
   // setMessage('invisible') 
  }, [tab]); 

  // when certificates are listed, user input is reset.
  useEffect(() => {
    setUserInput('')
  }, [certificatesArray]); 

/*
Here the actual (one page) app is rendered.
*/

  return (
      <div > 
        <UserContext.Provider value={{ 
          tab, setTab, heightComponent, 
          ensName, 
          loading, setLoading, 
          userInput, setUserInput,
          message, setMessage,
          walletAddress }}> 
        <NavBar connectWallet = {connectWallet} 
        // changeNetwork = {changeNetwork}
                /> 
        <Messages /> 
        <FrontPage />
        <AboutPage />
        <IssueCertificate certify = {certify} /> 
        { tab == 'DocHash_Certs'||
          tab == 'Issued_Certs'||
          tab == 'Received_Certs' ? 
            <Container>
              <Grid padded>
                <Grid.Column width = '8' > 
                  <CheckCertificates handleSubmit = {handleSubmit} /> 
                </Grid.Column> 
                <Grid.Column width = '8'>
                {/* Note that the certificates are rendered on this top level. 
                This allows for easy rendering of specific certificates.  */}
                      <Card.Group 
                      style={{
                        marginTop: '.1em',
                        height: heightComponent,
                        overflowY: 'auto'
                      }} > 
                      { certificatesArray ?
                           certificatesArray.map(
                            certificate => <RenderCertificate
                              key = {certificate.id} 
                              certificate = {certificate}
                              revokeCertificate = {() => revokeCertificate(certificate.id) }
                              /> 
                          ) 
                      : [null] }
                    </Card.Group> 
                </Grid.Column> 
              </Grid>
            </Container>            
          :
            <></>
        }
        </UserContext.Provider>
        </div>
      )
} 

// References: 
// https://codesandbox.io/s/j43b10?file=/src/App.js:469-571 // 
// sandbox example: https://codesandbox.io/s/j43b10?file=/src/App.js (not with react though, needed to add useEffect)
// main part is from web3dao learning course. -- the useContext tick is from youtube: https://www.youtube.com/watch?v=vYWMyOyrbYU
// Also large chunck is from Alchemy's road2web3. 
// NB check LEarnweb3.io class on ENS names to refactor this page. Insert ENS names
// https://learnweb3.io/courses/6394ea7c-0ad6-4a4a-879f-7f9756bc5976/lessons/23bacf56-3ceb-457a-a97d-419fe3b333d9 