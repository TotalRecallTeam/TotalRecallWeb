export type TableItem = {
  tokenName: string;
  itoPrice: string;
  recallPrice: string;
  nextRolloverTime: string;
  takenCount: number;
  totalCount: number;
  activeCount: number;
  totalCountCap: number;
  status: string;
  id: string;
  tokenType: "owner" | "open" | "deployed";
  content: string;
  DepositForRecall: number;
  buyCount: number;
  buyPrice: number;
};
