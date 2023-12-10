import { TableItem } from "@/types/crypto";
import { Address } from "viem";

export const NAV = [
  { title: "Tokens Dashboard", path: "/dashboard" },
  { title: "Query", path: "/query" },
];

export const TOKEN_ADDRESS: {
  tokenFactory: Address;
  vaultFactory: Address;
  nft: Address;
} = {
  tokenFactory: "0xE68dc1169dc1329A789ffF5B8d6AD271bdf19a96",
  vaultFactory: "0x6d7b4a4F1b5596781E841fa89c62BF5280c6aADa",
  nft: "0x69FfBBb061afe9B2E04077C3b710e0c42645eb0F",
};

export const MY_DEPLOYED_TOKENS: TableItem[] = [
  {
    id: "ksnvlskvs",
    tokenName: "Token A",
    itoPrice: "$10",
    recallPrice: "$8",
    nextRolloverTime: "2023-01-01 12:00 PM",
    takenCount: 100,
    totalCount: 200,
    activeCount: 150,
    totalCountCap: 500,
    status: "Active",
    tokenType: "deployed",
    content: "This building is blah blah blah, so blah blah blah.",
    DepositForRecall: 100,
    buyCount: 100,
    buyPrice: 300,
  },
  // Add more dummy data as needed
];
export const MY_BOUGHT_TOKENS: TableItem[] = [
  {
    id: "lknlnlnkl",
    tokenName: "Token A",
    itoPrice: "$10",
    recallPrice: "$8",
    nextRolloverTime: "2023-01-01 12:00 PM",
    takenCount: 100,
    totalCount: 200,
    activeCount: 150,
    totalCountCap: 500,
    status: "Active",
    tokenType: "owner",
    content: "This building is blah blah blah, so blah blah blah.",
    DepositForRecall: 100,
    buyCount: 100,
    buyPrice: 300,
  },
  // Add more dummy data as needed
];

export const ALL_TOKENS: TableItem[] = [
  {
    id: "bjiubbukb",
    tokenName: "Token A",
    itoPrice: "$10",
    recallPrice: "$8",
    nextRolloverTime: "2023-01-01 12:00 PM",
    takenCount: 100,
    totalCount: 200,
    activeCount: 150,
    totalCountCap: 500,
    status: "Active",
    tokenType: "open",
    content: "This building is blah blah blah, so blah blah blah.",
    DepositForRecall: 100,
    buyCount: 100,
    buyPrice: 300,
  },
  {
    id: "jhsvdhjdsvf",
    tokenName: "Token B",
    itoPrice: "$10",
    recallPrice: "$8",
    nextRolloverTime: "2023-01-01 12:00 PM",
    takenCount: 100,
    totalCount: 200,
    activeCount: 150,
    totalCountCap: 500,
    status: "Recalled",
    tokenType: "open",
    content: "This building is blah blah blah, so blah blah blah.",
    DepositForRecall: 100,
    buyCount: 100,
    buyPrice: 300,
  },
  {
    id: "4sdsdffsf",
    tokenName: "Token B",
    itoPrice: "$10",
    recallPrice: "$8",
    nextRolloverTime: "2023-01-01 12:00 PM",
    takenCount: 100,
    totalCount: 200,
    activeCount: 150,
    totalCountCap: 500,
    status: "Recalled",
    tokenType: "open",
    content: "This building is blah blah blah, so blah blah blah.",
    DepositForRecall: 100,
    buyCount: 100,
    buyPrice: 300,
  },
  {
    id: "5sdfsffdfd",
    tokenName: "Token B",
    itoPrice: "$10",
    recallPrice: "$8",
    nextRolloverTime: "2023-01-01 12:00 PM",
    takenCount: 100,
    totalCount: 200,
    activeCount: 150,
    totalCountCap: 500,
    status: "Recalled",
    tokenType: "open",
    content: "This building is blah blah blah, so blah blah blah.",
    DepositForRecall: 100,
    buyCount: 100,
    buyPrice: 300,
  },
  // Add more dummy data as needed
];
