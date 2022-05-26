// TODO: Сделать чтобы адрес смарт контракта вставлялся сам

module.exports = function () {
    task("balance", "Shows the smart contract balance")
    .setAction(async (taskArgs) => {
        const balance = await web3.eth.getBalance("0x5FbDB2315678afecb367f032d93F642f64180aa3");
        console.log("The balance is", balance, "Wei");
  });
}
