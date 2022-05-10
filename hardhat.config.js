require("@nomiclabs/hardhat-waffle");
require('solidity-coverage');
require("@nomiclabs/hardhat-web3");

const balance = require("./tasks/balance")

balance();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
};
