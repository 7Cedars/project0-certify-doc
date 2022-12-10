import Portis from "@portis/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";
import Fortmatic from "fortmatic";

//ToDo: MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "efb3104e5e92412ea461cd620843e5c8";

// MY ETHERSCAN_ID, SWAP IN YOURS FROM https://etherscan.io/myapikey
export const ETHERSCAN_KEY = "QU2FKIIE4RJKMZKV1VPVSVGQX5W7J14EUP";

export const PROVIDER_OPTIONS = {
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
};

// BLOCKNATIVE ID FOR Notify.js:
// export const BLOCKNATIVE_DAPPID = "0b58206a-f3c0-4701-a62f-73c7243e8c77";

// EXTERNAL CONTRACTS vvvv, add the addresses and abi's here.
// export const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
// export const DAI_ABI = [
//   {
//     inputs: [{ internalType: "uint256", name: "chainId_", type: "uint256" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: true, internalType: "address", name: "src", type: "address" },
//       { indexed: true, internalType: "address", name: "guy", type: "address" },
//       { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "Approval",
//     type: "event",
//   },
//   {
//     anonymous: true,
//     inputs: [
//       { indexed: true, internalType: "bytes4", name: "sig", type: "bytes4" },
//       { indexed: true, internalType: "address", name: "usr", type: "address" },
//       { indexed: true, internalType: "bytes32", name: "arg1", type: "bytes32" },
//       { indexed: true, internalType: "bytes32", name: "arg2", type: "bytes32" },
//       { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
//     ],
//     name: "LogNote",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: true, internalType: "address", name: "src", type: "address" },
//       { indexed: true, internalType: "address", name: "dst", type: "address" },
//       { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "DOMAIN_SEPARATOR",
//     outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "PERMIT_TYPEHASH",
//     outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       { internalType: "address", name: "", type: "address" },
//       { internalType: "address", name: "", type: "address" },
//     ],
//     name: "allowance",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "usr", type: "address" },
//       { internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "approve",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [{ internalType: "address", name: "", type: "address" }],
//     name: "balanceOf",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "usr", type: "address" },
//       { internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "burn",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "decimals",
//     outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [{ internalType: "address", name: "guy", type: "address" }],
//     name: "deny",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "usr", type: "address" },
//       { internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "mint",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "src", type: "address" },
//       { internalType: "address", name: "dst", type: "address" },
//       { internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "move",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "name",
//     outputs: [{ internalType: "string", name: "", type: "string" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [{ internalType: "address", name: "", type: "address" }],
//     name: "nonces",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "holder", type: "address" },
//       { internalType: "address", name: "spender", type: "address" },
//       { internalType: "uint256", name: "nonce", type: "uint256" },
//       { internalType: "uint256", name: "expiry", type: "uint256" },
//       { internalType: "bool", name: "allowed", type: "bool" },
//       { internalType: "uint8", name: "v", type: "uint8" },
//       { internalType: "bytes32", name: "r", type: "bytes32" },
//       { internalType: "bytes32", name: "s", type: "bytes32" },
//     ],
//     name: "permit",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "usr", type: "address" },
//       { internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "pull",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "usr", type: "address" },
//       { internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "push",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [{ internalType: "address", name: "guy", type: "address" }],
//     name: "rely",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "symbol",
//     outputs: [{ internalType: "string", name: "", type: "string" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "totalSupply",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "dst", type: "address" },
//       { internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "transfer",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "src", type: "address" },
//       { internalType: "address", name: "dst", type: "address" },
//       { internalType: "uint256", name: "wad", type: "uint256" },
//     ],
//     name: "transferFrom",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "version",
//     outputs: [{ internalType: "string", name: "", type: "string" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [{ internalType: "address", name: "", type: "address" }],
//     name: "wards",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
// ];

export const NETWORKS = {
  // localhost: {
  //   name: "localhost",
  //   color: "#666666",
  //   chainId: 31337,
  //   blockExplorer: "",
  //   rpcUrl: "http://" + window.location.hostname + ":8545",
  // },
  mainnet: {
    name: "mainnet",
    color: "#ff8b9e",
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://etherscan.io/",
  },
  goerli: {
    name: "goerli",
    color: "#0975F6",
    chainId: 5,
    faucet: "https://goerli-faucet.slock.it/",
    blockExplorer: "https://goerli.etherscan.io/",
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`,
  },
  xdai: {
    name: "xdai",
    color: "#48a9a6",
    chainId: 100,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://dai.poa.network",
    faucet: "https://xdai-faucet.top/",
    blockExplorer: "https://blockscout.com/poa/xdai/",
  },
  matic: {
    name: "matic",
    color: "#2bbdf7",
    chainId: 137,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mainnet.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://explorer-mainnet.maticvigil.com//",
  },
  mumbai: {
    name: "mumbai",
    color: "#92D9FA",
    chainId: 80001,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://mumbai-explorer.matic.today/",
  },
  localArbitrum: {
    name: "localArbitrum",
    color: "#50a0ea",
    chainId: 153869338190755,
    blockExplorer: "",
    rpcUrl: `http://localhost:8547`,
  },
  localArbitrumL1: {
    name: "localArbitrumL1",
    color: "#50a0ea",
    chainId: 44010,
    blockExplorer: "",
    rpcUrl: `http://localhost:7545`,
  },
  rinkebyArbitrum: {
    name: "Arbitrum Testnet",
    color: "#50a0ea",
    chainId: 421611,
    blockExplorer: "https://rinkeby-explorer.arbitrum.io/#/",
    rpcUrl: `https://rinkeby.arbitrum.io/rpc`,
  },
  arbitrum: {
    name: "Arbitrum",
    color: "#50a0ea",
    chainId: 42161,
    blockExplorer: "https://explorer.arbitrum.io/#/",
    rpcUrl: `https://arb1.arbitrum.io/rpc`,
    gasPrice: 0,
  },
  // localOptimismL1: {
  //   name: "localOptimismL1",
  //   color: "#f01a37",
  //   chainId: 31337,
  //   blockExplorer: "",
  //   rpcUrl: "http://" + window.location.hostname + ":9545",
  // },
  // localOptimism: {
  //   name: "localOptimism",
  //   color: "#f01a37",
  //   chainId: 420,
  //   blockExplorer: "",
  //   rpcUrl: "http://" + window.location.hostname + ":8545",
  //   gasPrice: 0,
  // },
  kovanOptimism: {
    name: "kovanOptimism",
    color: "#f01a37",
    chainId: 69,
    blockExplorer: "https://kovan-optimistic.etherscan.io/",
    rpcUrl: `https://kovan.optimism.io`,
    gasPrice: 0,
  },
  optimism: {
    name: "optimism",
    color: "#f01a37",
    chainId: 10,
    blockExplorer: "https://optimistic.etherscan.io/",
    rpcUrl: `https://mainnet.optimism.io`,
  },
  localAvalanche: {
    name: "localAvalanche",
    color: "#666666",
    chainId: 43112,
    blockExplorer: "",
    rpcUrl: `http://localhost:9650/ext/bc/C/rpc`,
    gasPrice: 225000000000,
  },
  fujiAvalanche: {
    name: "fujiAvalanche",
    color: "#666666",
    chainId: 43113,
    blockExplorer: "https://cchain.explorer.avax-test.network/",
    rpcUrl: `https://api.avax-test.network/ext/bc/C/rpc`,
    gasPrice: 225000000000,
  },
  mainnetAvalanche: {
    name: "mainnetAvalanche",
    color: "#666666",
    chainId: 43114,
    blockExplorer: "https://cchain.explorer.avax.network/",
    rpcUrl: `https://api.avax.network/ext/bc/C/rpc`,
    gasPrice: 225000000000,
  },
  testnetHarmony: {
    name: "Harmony Testnet",
    color: "#00b0ef",
    chainId: 1666700000,
    blockExplorer: "https://explorer.pops.one/",
    rpcUrl: `https://api.s0.b.hmny.io`,
    gasPrice: 1000000000,
  },
  mainnetHarmony: {
    name: "Harmony Mainnet",
    color: "#00b0ef",
    chainId: 1666600000,
    blockExplorer: "https://explorer.harmony.one/",
    rpcUrl: `https://api.harmony.one`,
    gasPrice: 1000000000,
  },
};

export const NETWORK = chainId => {
  for (const n in NETWORKS) {
    if (NETWORKS[n].chainId === chainId) {
      return NETWORKS[n];
    }
  }
};