const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Adoption', () => {
  /** @type {import('@ethersproject/contracts').Contract} */
  let adoption
  /** @type {string} */
  let signerAddress

  before(async () => {
    const signer = await ethers.getSigner()
    signerAddress = signer.address

    const Adoption = await ethers.getContractFactory('Adoption')
    adoption = await Adoption.deploy()
    await adoption.deployed()
  })

  describe('.adopt()', () => {
    it(`should adopt pet with ID #8`, async () => {
      const petId = 8

      /** @type {import('@ethersproject/transactions').Transaction} */
      const transaction = await adoption.adopt(petId)
      /** @type {import('@ethersproject/transactions').Transaction} */
      const result = await transaction.wait()

      expect(result.blockNumber).to.equal(2)
      expect(result.from).to.equal(signerAddress)
      expect(result.status).to.equal(1)
      expect(result.type).to.equal(2)
    })

    it(`should adopt pet with ID #1`, async () => {
      const petId = 1

      /** @type {import('@ethersproject/transactions').Transaction} */
      const transaction = await adoption.adopt(petId)
      /** @type {import('@ethersproject/transactions').Transaction} */
      const result = await transaction.wait()

      expect(result.blockNumber).to.equal(3)
      expect(result.from).to.equal(signerAddress)
      expect(result.status).to.equal(1)
      expect(result.type).to.equal(2)
    })
  })

  describe('.getAdopters()', () => {
    it(`should return the expected addresses`, async () => {
      const result = await adoption.getAdopters()

      expect(result).to.deep.equal([
        '0x0000000000000000000000000000000000000000',
        signerAddress,
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        signerAddress,
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
      ])
    })
  })
})
