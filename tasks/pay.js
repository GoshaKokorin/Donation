module.exports = function () {
    task("pay", "Donate money")
    .addParam("value", "How much money would you like to donate")
    .setAction(async (taskArgs) => {
        const Donation = await ethers.getContractFactory("Donation");
        const donation = await Donation.attach("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
        await donation.pay({ value: taskArgs.value });

        console.log("Donation was successful");
  });
}