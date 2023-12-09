import { ALL_TOKENS, MY_BOUGHT_TOKENS, MY_DEPLOYED_TOKENS } from "@/consts";
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
          className="px-2 px-5 h-[45px] flex-1 flex
          items-center justify-center text-white
          leading-none text-mauve11 select-none first:rounded-tl-md
          last:rounded-tr-md hover:text-violet11
          data-[state=active]:text-white data-[state=active]:shadow-white data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-white outline-none cursor-default"
          value="tab1"
        >
          My Deployed Tokens
        </Tabs.Trigger>
        <Tabs.Trigger
          className="px-2 px-5 h-[45px] flex-1 flex items-center justify-center text-white leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11
          data-[state=active]:text-white data-[state=active]:shadow-white data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-white outline-none cursor-default"
          value="tab2"
        >
          All Deployed Tokens
        </Tabs.Trigger>
        <Tabs.Trigger
          className="px-2 px-5 h-[45px] flex-1 flex items-center justify-center text-white leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11
          data-[state=active]:text-white data-[state=active]:shadow-white data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-white outline-none cursor-default"
          value="tab3"
        >
          Bought Tokens
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow p-5 px-2 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab1"
      >
        <TableComponent title="My Deployed Tokens" data={MY_DEPLOYED_TOKENS} />
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 px-2 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab2"
      >
        <TableComponent title="Total Deployed Tokens" data={ALL_TOKENS} />
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 px-2 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab3"
      >
        <TableComponent title="My Bought Tokens" data={MY_BOUGHT_TOKENS} />
      </Tabs.Content>
    </Tabs.Root>
  );
};
