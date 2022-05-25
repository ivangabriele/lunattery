require('@nomiclabs/hardhat-waffle')

/**
 * @type {import('hardhat/config').HardhatUserConfig}
 */
module.exports = {
  paths: {
    tests: './contracts/__tests__',
  },
  solidity: '0.8.4',
}
