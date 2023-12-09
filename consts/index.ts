import { TableItem } from "@/types/crypto";

export const NAV = [
  { title: "Tokens Dashboard", path: "/dashboard" },
  { title: "Buyer", path: "/buyer" },
  { title: "Owner", path: "/owner" },
];

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
