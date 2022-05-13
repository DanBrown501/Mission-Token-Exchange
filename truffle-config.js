require('babel-polyfill');
require('babel-register');
require('dotenv').config();

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
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