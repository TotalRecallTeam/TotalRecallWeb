export const vault = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "vaultMapping",
    outputs: [
      {
        internalType: "contract RWAVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenfactory",
        type: "address",
      },
    ],
    name: "CreateNewVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
