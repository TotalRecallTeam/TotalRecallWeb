// pages/dashboard.js

import Button from "@/components/Button";
import { Card } from "@/components/Card";
import { DialogWithdraw } from "@/components/Dialog";
import { Layout } from "@/components/Layout";
import { ALL_TOKENS, MY_BOUGHT_TOKENS, MY_DEPLOYED_TOKENS } from "@/consts";
import { TableItem } from "@/types/crypto";
import { getWalletClient } from "@wagmi/core";
import { Client } from "@xmtp/xmtp-js";
import { useRouter } from "next/router";
import React from "react";
import {
  PiArrowElbowRightDownFill,
  PiArrowFatLinesRight,
} from "react-icons/pi";
import { useAccount } from "wagmi";

// await createConversation(xmtp, buyer_address);

const add = [
  "0xf5842e45243642C87726149ff1258b8d6D75c544",
  "0xf5842e45243642C87726149ff1258b8d6D75c544",
  "0xf5842e45243642C87726149ff1258b8d6D75c544",
  "0xf5842e45243642C87726149ff1258b8d6D75c544",
];
export async function createConversation(xmtp, address) {
  if (await isWalletActive(xmtp, address)) {
    await xmtp.conversations.newConversation(address);
  }
}

export async function loadMessages(xmtp: any, address: any) {
  if (await isWalletActive(xmtp, address)) {
    const conversation = await xmtp.conversations.newConversation(address);

    const response = await conversation.messages();

    const messages = [];
    for (let i = 0; i < response.length; i++) {
      messages.push(response[i].content);
    }

    return messages;
  }
}

export async function isWalletActive(xmtp: any, address: any) {
  const is_active = await xmtp.canMessage(address);

  return is_active;
}

export async function broadcastMessage(
  xmtp: any,
  broadcast_address_array: any,
  message: any
) {
  console.log(xmtp);
  const broadcast_address_can_message_array = await isWalletActive(
    xmtp,
    broadcast_address_array
  );
  for (let i = 0; i < broadcast_address_array.length; i++) {
    const to = broadcast_address_array[i];

    const canMessage = broadcast_address_can_message_array[i];
    if (canMessage) {
      const conversation = await xmtp.conversations.newConversation(to);

      const sent = await conversation.send(message);
    }
  }
}

const TokenPage = () => {
  const router = useRouter();

  const { id, tokenType } = router.query;
  const { address, isConnected } = useAccount();
  const [message, setMessage] = React.useState<any>();

  if (!id || !tokenType) {
    return <div>Invalid token</div>;
  }

  const findItemById = (idToFind: string): TableItem => {
    return [...MY_DEPLOYED_TOKENS, ...ALL_TOKENS, ...MY_BOUGHT_TOKENS].find(
      (item) => item.id === idToFind
    ) as TableItem;
  };
  const foundItem = findItemById(id as string);
  const isOwner = foundItem.tokenType === "owner";
  const isDeployed = foundItem.tokenType === "deployed";
  const isOpen = foundItem.tokenType === "open";

  return (
    <Layout>
      <div className="px-20">
        <div className="text-white mb-4 flex justify-between">
          <h2 className="text-3xl text-white text-gradient flex items-center gap-4">
            {foundItem.tokenName} <PiArrowFatLinesRight /> ID: {id}
          </h2>
          <div className="flex gap-4">
            {isDeployed && <DialogWithdraw />}
            {isDeployed && (
              <Button
                title="Deposit & recall"
                onClick={() => {
                  alert("Deposit & recall");
                }}
              />
            )}
            {(isOpen || isOwner) && (
              <Button
                title="Buy"
                onClick={() => {
                  alert("Buy");
                }}
              />
            )}
          </div>
        </div>
        <div className="mb-4">
          <Card
            content={
              <>
                <h2 className="text-3xl text-white text-gradient flex items-center gap-2 mb-2">
                  <span>Token Content</span> <PiArrowElbowRightDownFill />
                </h2>
                <span>{foundItem.content} </span>
              </>
            }
          />
        </div>
        <div className="flex  gap-4 items-top w-[100%]">
          <Card
            content={
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-bold">Name:</div>
                  <div>{foundItem.tokenName}</div>

                  <div className="font-bold">Price:</div>
                  <div>{foundItem.itoPrice}</div>

                  <div className="font-bold">Recall Price:</div>
                  <div>{foundItem.recallPrice}</div>

                  <div className="font-bold">Next rollover time:</div>
                  <div>{foundItem.nextRolloverTime}</div>
                  <div className="font-bold">Total count:</div>
                  <div>{foundItem.totalCount}</div>
                  <div className="font-bold">Active Count:</div>
                  <div>{foundItem.activeCount}</div>
                  <div className="font-bold">Total count cap:</div>
                  <div>{foundItem.totalCountCap}</div>
                  {/* Include other properties as needed */}

                  <div className="font-bold">status:</div>
                  <div>{foundItem.status}</div>

                  {isDeployed && (
                    <>
                      <div className="font-bold">Taken Count:</div>
                      <div>{foundItem.takenCount}</div>
                      <div className="font-bold">Deposit for Recall:</div>
                      <div>{foundItem.DepositForRecall}</div>
                    </>
                  )}
                  {isOpen ||
                    (isOwner && (
                      <>
                        <div className="font-bold">Buy Count:</div>
                        <div>{foundItem.buyCount}</div>
                        <div className="font-bold">Buy Price:</div>
                        <div>{foundItem.buyPrice}</div>
                      </>
                    ))}
                </div>
              </>
            }
          />

          <Card
            content={(() => {
              if (isDeployed) {
                return (
                  <>
                    <h2 className="text-3xl text-white text-gradient flex items-center gap-4 mb-2">
                      <PiArrowFatLinesRight /> Message to Send
                    </h2>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setMessage(e.target.value);
                      }}
                      className="resize-none border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                      rows={4}
                      placeholder="Enter your text here..."
                    />
                    <div className="flex justify-end mt-2">
                      <Button
                        title="Send message"
                        onClick={async () => {
                          const walletClient = await getWalletClient();
                          alert("Message sent!");
                          const xmtp = await Client.create(walletClient, {
                            env: "dev",
                          });
                          await broadcastMessage(xmtp, add, message);
                        }}
                      ></Button>
                    </div>
                  </>
                );
              }
              if (isOpen || isOwner) {
                return (
                  <>
                    <h2 className="text-3xl text-white text-gradient flex items-center gap-4 mb-2">
                      <PiArrowFatLinesRight /> Available Count:
                      {foundItem.activeCount}
                    </h2>
                    {(async () => {
                      const walletClient = await getWalletClient();
                      if (isOwner) {
                        const xmtp = await Client.create(walletClient, {
                          env: "dev",
                        });

                        await createConversation(
                          xmtp,
                          "0xf5842e45243642C87726149ff1258b8d6D75c544"
                        );
                        const messages = await loadMessages(
                          xmtp,
                          "0xf5842e45243642C87726149ff1258b8d6D75c544"
                        );
                      }
                    })()}
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </span>
                  </>
                );
              }
            })()}
          />
        </div>
      </div>
    </Layout>
  );
};
export default TokenPage;
