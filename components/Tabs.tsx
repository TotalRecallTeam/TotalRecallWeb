import * as Tabs from "@radix-ui/react-tabs";
import { FC } from "react";
import TableComponent from "./Table";

export const TokenDataTabs: FC = (props) => {
  return (
    <Tabs.Root
      className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2"
      defaultValue="tab1"
    >
      <Tabs.List
        className="shrink-0 flex border-b border-mauve6"
        aria-label="Manage your account"
      >
        <Tabs.Trigger
          className="px-2 px-5 h-[45px] flex-1 flex items-center justify-center text-white leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab1"
        >
          My Tokens
        </Tabs.Trigger>
        <Tabs.Trigger
          className="px-2 px-5 h-[45px] flex-1 flex items-center justify-center text-white leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab2"
        >
          Deployed Tokens
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow p-5 px-2 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab1"
      >
        <TableComponent
          title="my Token"
          data={[
            {
              tokenName: "Token A",
              itoPrice: "$10",
              recallPrice: "$8",
              nextRolloverTime: "2023-01-01 12:00 PM",
              takenCount: 100,
              totalCount: 200,
              activeCount: 150,
              totalCountCap: 500,
              status: "Active",
            },
            // Add more dummy data as needed
          ]}
        />
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 px-2 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab2"
      >
        <TableComponent
          title="Total Deployed Tokens"
          data={[
            {
              tokenName: "Token A",
              itoPrice: "$10",
              recallPrice: "$8",
              nextRolloverTime: "2023-01-01 12:00 PM",
              takenCount: 100,
              totalCount: 200,
              activeCount: 150,
              totalCountCap: 500,
              status: "Active",
            },
            {
              tokenName: "Token B",
              itoPrice: "$10",
              recallPrice: "$8",
              nextRolloverTime: "2023-01-01 12:00 PM",
              takenCount: 100,
              totalCount: 200,
              activeCount: 150,
              totalCountCap: 500,
              status: "Recalled",
            },
            {
              tokenName: "Token B",
              itoPrice: "$10",
              recallPrice: "$8",
              nextRolloverTime: "2023-01-01 12:00 PM",
              takenCount: 100,
              totalCount: 200,
              activeCount: 150,
              totalCountCap: 500,
              status: "Recalled",
            },
            {
              tokenName: "Token B",
              itoPrice: "$10",
              recallPrice: "$8",
              nextRolloverTime: "2023-01-01 12:00 PM",
              takenCount: 100,
              totalCount: 200,
              activeCount: 150,
              totalCountCap: 500,
              status: "Recalled",
            },
            // Add more dummy data as needed
          ]}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
};
