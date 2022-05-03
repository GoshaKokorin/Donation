const { inputToConfig } = require("@ethereum-waffle/compiler");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Donation", function () {
  let owner; 
  let donater; 

  beforeEach(async function () {
    [owner, donater] = await ethers.getSigners()

    const Donation = await ethers.getContractFactory("Donation", owner)
    donation = await Donation.deploy()
    await donation.deployed()
  })

  it("sets owner", async function() {
    const currentOwner = await donation.owner()
    expect(currentOwner).to.eq(owner.address)
  })
});
