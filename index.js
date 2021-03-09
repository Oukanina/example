const Web3 = require("web3");
const web3 = new Web3("wss://bsc-ws-node.nariox.org:443");


// https://ethereum.stackexchange.com/questions/28521/how-to-detect-if-an-address-is-a-contract
async function isContract(address) {
  const code = await web3.eth.getCode(address);
  return code !== "0x0" && code !== "0x";
}

function getTransaction(txhash) {
  return web3.eth.getTransaction(txhash);
}

function getReceipt(txhash) {
  return web3.eth.getTransactionReceipt(txhash);
}


async function main() {
  const txhash = "0xe3e8c34684a0af77ed30af7f575e1f3ba298f751c4a3dbe656e44abd0921f94a";
  const transaction = await getTransaction(txhash);
  const recept = await getReceipt(txhash);
  console.log(transaction);
  console.log(recept);
  console.log(await isContract(transaction.to));
}

main();