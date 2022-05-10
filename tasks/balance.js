// TODO: Сделать чтобы адрес смарт контракта вставлялся сам

module.exports = function () {
    task("balance", "Shows the smart contract balance")
    .setAction(async (taskArgs) => {
        const balance = await web3.eth.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
        console.log("The balance is", balance, "Wei");
  });
}
