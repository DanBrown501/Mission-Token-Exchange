const { default: Web3 } = require("web3");

const ERC20 = artifacts.require("ERC20");
const Exchange = artifacts.require("Exchange");

module.exports = async function (deployer) {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(ERC20);

  const feeAccount = accounts[0]
  const feePercent = 10

  await deployer.deploy(Exchange, feeAccount, feePercent);
};
