// pages/dashboard.js

import Button from "@/components/Button";
import { Card } from "@/components/Card";
import { DialogWithdraw } from "@/components/Dialog";
import { Layout } from "@/components/Layout";
import { ALL_TOKENS, MY_BOUGHT_TOKENS, MY_DEPLOYED_TOKENS } from "@/consts";
import { TableItem } from "@/types/crypto";
import { useRouter } from "next/router";
import {
  PiArrowElbowRightDownFill,
  PiArrowFatLinesRight,
} from "react-icons/pi";

const TokenPage = () => {
  const router = useRouter();
  const { id, tokenType } = router.query;

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
                      className="resize-none border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                      rows={4}
                      placeholder="Enter your text here..."
                    />
                    <div className="flex justify-end mt-2">
                      <Button
                        title="Send message"
                        onClick={() => {
                          alert("Message sent!");
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
