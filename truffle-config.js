require('babel-polyfill');
require('babel-register');
require('dotenv').config();
const privateKeys = process.env.PRIVATE_KEYS || ""
const HDWalletProvider =  require('@truffle/hdwallet-provider')

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
			provider: function () {
				return new HDWalletProvider(
					privateKeys.split(','),
					`wss://rinkeby.infura.io/ws/v3/${process.env.INFURA_API_KEY}` // URL to Ethereum Node
				)
			},
      gas: 5000000,
      gasPrice: 25000000000,
			network_id: 4
		},

  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  compilers: {
    solc: {
          version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
          optimizer: {
            enabled: true,
            runs: 200
          }
      }
  },
};