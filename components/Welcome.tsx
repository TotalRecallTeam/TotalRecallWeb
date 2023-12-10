import { ConnectButton } from "@rainbow-me/rainbowkit";
import { watchAccount } from "@wagmi/core";
import { BsInfoCircle } from "react-icons/bs";
import { PiHandCoinsBold } from "react-icons/pi";

import { Toaster } from "react-hot-toast";
import { useAccount, useBalance } from "wagmi";

export const Welcome = () => {
  const { address, isConnected } = useAccount();
  const { data } = useBalance({
    address,
  });

  const unwatch = watchAccount((account) => console.log("account", account));

  return (
    <div className="flex w-full justify-center items-center">
      <Toaster containerClassName="lex w-full justify-center items-center" />
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 flex-grow">
        <div className="flex flex-1 justify-start items-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Total recall <br /> lorem ipsum
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            lorem ipsun , bla bla bla, lorem ipsun , bla bla bla lorem ipsun ,
            bla bla bla
          </p>

          {!isConnected && (
            <div className="my-5">
              <ConnectButton />
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-50 sm:w-106 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <PiHandCoinsBold fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg mt-1">
                  Account Info
                </p>

                <p className="text-white font-light text-sm">
                  {address ?? "address"}
                </p>

                <p className="text-white font-semibold text-lg mt-1">
                  {data ? `${data?.symbol} - ${data?.formatted}` : "0.00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
