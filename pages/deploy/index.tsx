import { DeployForm } from "@/components/DeployForm";
import { Layout } from "@/components/Layout";
import { TOKEN_ADDRESS } from "@/consts";
import { vaultFactory } from "@/consts/abit";
import { prepareWriteContract, readContract, writeContract } from "@wagmi/core";
import { useEffect, useRef, useState } from "react";
import { parseEther } from "viem";
import { Address, erc721ABI, useAccount } from "wagmi";

const Index = () => {
  const { address, isConnected } = useAccount();
  const [deployAddress, setDeployAddress] = useState<Address>();
  const ref = useRef({ current: false });
  const abc = async () => {
    try {
      ref.current.current = true;
      if (!address) return;
      const fac = TOKEN_ADDRESS.vaultFactory as Address;
      const nft = TOKEN_ADDRESS.nft as Address;

      const data = (await readContract({
        address: fac,
        abi: vaultFactory,
        functionName: "vaultMapping",
        args: [address],
      })) as Address;

      const { request: approve } = await prepareWriteContract({
        address: nft,
        abi: erc721ABI,
        functionName: "approve",
        args: [data, parseEther("0")],
      });
      await writeContract(approve);
      setDeployAddress(data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    if (ref.current.current) {
      return;
    }
    abc();
  }, []);

  return (
    <Layout>
      <h2
        onClick={async () => {}}
        className="text-3xl text-white text-gradient   gap-4 text-center"
      >
        Deploy Token
      </h2>
      <DeployForm deployAddress={abc} />;
    </Layout>
  );
};
export default Index;
