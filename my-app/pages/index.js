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

// @dev: calls on the Web3Provider reference to create a new instance.
// It returns signer, ethaddress, and (if available) ens name  
const loadWeb3Modal= async () => {  
  try {
    const provider = await web3ModalRef.current.connect();
    let web3Provider = new ethers.providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    
    if (chainId !== 5) {
      setMessage('wrongNetwork');
      setWalletAddress('wrongNetwork');
    }

    const signer = web3Provider.getSigner();
    const ethAddress = await signer.getAddress(); 
    const ens = await web3Provider.lookupAddress(ethAddress); 

    setWalletConnected(true);
    setWalletAddress(ethAddress); 
    if (ens) { setEnsName(ens) }; 

    return { web3Provider, signer, ethAddress, ens };

    } catch (err) {
      console.error(err);
    }
  }

  // @dev: Connects to web3Provider.
  const connectWeb3 = async () => {
      await loadWeb3Modal();
  };
  
  // @dev: Disconnects web3Provider.
  const disconnectWeb3 = async () => {
    await web3ModalRef.current.clearCachedProvider();
    console.log("disconnectWeb3 called.")
    if (web3ModalRef.current && web3ModalRef.current.provider && typeof web3ModalRef.current.provider.disconnect == "function") {
      await web3ModalRef.current.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  // @dev: change chain to goerli network - on click .
  const changeChain = async () => {
    const ethereum = window.ethereum;
    let switchTx;
    
    try {
        switchTx = await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          { "chainId": "0x5" } 
        ] 
        });
      } catch (switchError) {
        try {
          switchTx = await ethereum.request({
            method: "wallet_addEthereumChain",
            params: {
              chainId: "0x5",
              chainName: "Goerli test network",
              nativeCurrency: "GoerliETH",
              rpcUrls: ["https://goerli.infura.io/v3/"],
              blockExplorerUrls: ["https://goerli.etherscan.io"],
            },
          });
        } catch (addError) {
          // handle "add" error
        }
      }
  };

  // issuing a new certificate. Signer is required. 
  const certify = async (userInput) => {
    setLoading('upload')

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.loadWeb3Modal();

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
        const signer = provider.loadWeb3Modal();
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

  // everytime tab is changed, resets certificate list and userinput. 
  useEffect(() => {
    setCertificatesArray(null)
    setUserInput('')
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
        <NavBar connectWeb3 = {connectWeb3} 
                disconnectWeb3 = { disconnectWeb3 }
                changeChain = {changeChain}
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