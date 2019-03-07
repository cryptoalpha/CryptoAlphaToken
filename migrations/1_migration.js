var CryptoAlphaToken = artifacts.require("./CryptoAlphaToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoAlphaToken);
};
