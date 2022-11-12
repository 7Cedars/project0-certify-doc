// hardhat.config.js

require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const REACT_APP_GOERLI_URL = process.env.REACT_APP_GOERLI_URL;
const REACT_APP_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: REACT_APP_GOERLI_URL,
      accounts: [REACT_APP_PRIVATE_KEY]
    }
  }
};