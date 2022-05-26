async function main() {
    const [owner] = await ethers.getSigners()
    console.log("Deploying contracts with the account:", owner.address)
    const Donation = await ethers.getContractFactory("Donation", owner)
    const donation = await Donation.deploy()
    await donation.deployed()
    console.log("Donation deployed to:", donation.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });