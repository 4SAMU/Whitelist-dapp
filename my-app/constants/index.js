export const WHITELIST_CONTRACT_ADDRESS = "0x498d3F590701fA539d88ABEDb854d300614033fB";
export const abi = [
    {
      "type": "constructor",
      "payable": false,
      "inputs": [{ "type": "uint8", "name": "_maxWhitelistedAddresses" }]
    },
    {
      "type": "function",
      "name": "addAddressToWhitelist",
      "constant": false,
      "payable": false,
      "inputs": [],
      "outputs": []
    },
    {
      "type": "function",
      "name": "maxWhitelistedAddresses",
      "constant": true,
      "stateMutability": "view",
      "payable": false,
      "inputs": [],
      "outputs": [{ "type": "uint8" }]
    },
    {
      "type": "function",
      "name": "numAddressesWhitelisted",
      "constant": true,
      "stateMutability": "view",
      "payable": false,
      "inputs": [],
      "outputs": [{ "type": "uint8" }]
    },
    {
      "type": "function",
      "name": "whitelistedAddresses",
      "constant": true,
      "stateMutability": "view",
      "payable": false,
      "inputs": [{ "type": "address" }],
      "outputs": [{ "type": "bool" }]
    }
  ];