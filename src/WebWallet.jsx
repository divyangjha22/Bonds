// Import the web3.js library
const Web3 = require('web3');

// Set the HTTP or IPC provider for web3.js
const web3 = new Web3('http://localhost:8545');

// Import the contract ABI
const contractABI = require('./my-contract-abi.json');

// Set the contract address
const contractAddress = '0x853B8A5682a277b04e2a0e714046d3977b188391C';
import contractAbi from "./"
// Create an instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call a contract function
contract.methods.myFunction(123).send({ from: '0x123...' })
  .then(function(receipt) {
    // The function has been executed
  });