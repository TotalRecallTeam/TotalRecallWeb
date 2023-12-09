import Button from "@/components/Button";
import { Layout } from "@/components/Layout";
import { TOKEN_ADDRESS } from "@/consts";
import { vaultFactory } from "@/consts/abit";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { AnonAadhaarPCD, exportCallDataGroth16FromPCD } from "anon-aadhaar-pcd";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "anon-aadhaar-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Address } from "viem";

const Index = () => {
  // Use the Country Identity hook to get the status of the user.
  const [anonAadhaar] = useAnonAadhaar();
  const router = useRouter();

  useEffect(() => {
    console.log("Anon Aadhaar: ", anonAadhaar.status);
    if (anonAadhaar.status === "logged-in") {
      console.log("Anon Aadhaar: ", anonAadhaar.pcd);
    }
  }, [anonAadhaar, router]);

  const getproof = async (_pcd: AnonAadhaarPCD) => {
    const { a, b, c, Input } = await exportCallDataGroth16FromPCD(_pcd);
    return { a, b, c, Input };
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black-100 px-4 py-8">
        <main className="flex flex-col items-center gap-8 bg-white rounded-2xl max-w-screen-sm mx-auto h-[24rem] md:h-[20rem] p-8">
          <h1 className="font-bold text-2xl">
            Verify using Anon Aadhar for depositing RWA
          </h1>
          <p>Prove your Identity anonymously using your Aadhaar card.</p>

          {/* Import the Connect Button component */}
          <LogInWithAnonAadhaar />
          <Button
            onClick={async () => {
              // const { a, b, c, input } = await getproof(anonAadhaar.pcd);
              const fac = TOKEN_ADDRESS.vaultFactory as Address;

              const { request: approve } = await prepareWriteContract({
                address: fac,
                abi: vaultFactory,
                functionName: "CreateNewVault",
                args: [TOKEN_ADDRESS.tokenFactory],
              });
              const { hash } = await writeContract(approve);
              router.push("./deploy");

              console.log(hash);
            }}
            title="next"
          />
          {/* {getproof(anonAadhaar.pcd)}; */}
        </main>
        <div className="flex flex-col items-center gap-4 rounded-2xl max-w-screen-sm mx-auto p-8">
          {/* Render the proof if generated and valid */}
          {anonAadhaar?.status === "logged-in" && (
            <>
              <p className="text-white">✅ Proof is valid</p>
              <p className="text-white">Got your Aadhaar Identity Proof</p>
              <p className="text-white">Welcome anon!</p>
              <AnonAadhaarProof
                code={JSON.stringify(anonAadhaar.pcd, null, 2)}
              />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
