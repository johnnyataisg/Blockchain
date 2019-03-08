const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("554f73ba1fa069f90f241be7fb5e7b991f7639a267f6f5723ddbd69a5be98bdf");
const myWalletAddress = myKey.getPublic('hex');

let ahriCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 0);
tx1.signTransaction(myKey);
ahriCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
ahriCoin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of xavier is", ahriCoin.getBalanceOfAddress(myWalletAddress));