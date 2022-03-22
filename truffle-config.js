const Klaytn_HDWalletProvider = require('truffle-hdwallet-provider-klaytn')
const HDWalletProvider = require('truffle-hdwallet-provider')

require('dotenv').config()
const BAOBAB = `https://api.baobab.klaytn.net:8651`
const KLAYTN_PRIVATE_KEY = process.env.KLAYTN_PRIVATE_KEY

const RINKEBY = `https://rinkeby.infura.io/v3/${process.env.INFURA_RINKEBY}`
const METAMASK_MNEMOIC = process.env.METAMASK_MNEMOIC

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    },

    baobab:{
      provider: new Klaytn_HDWalletProvider(KLAYTN_PRIVATE_KEY, BAOBAB),
      network_id:'1001',
      gas:'8500000',
      gasPrice:null
    },

    rinkeby:{
      provider: new HDWalletProvider(METAMASK_MNEMOIC, RINKEBY),
      network_id:4,
      gas:4500000,
      gasPrice:10000000000
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
};
