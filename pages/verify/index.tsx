import Button from "@/components/Button";
import { Layout } from "@/components/Layout";
import { AnonAadhaarPCD, exportCallDataGroth16FromPCD } from "anon-aadhaar-pcd";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "anon-aadhaar-react";
import { useEffect } from "react";

const index = () => {
  // Use the Country Identity hook to get the status of the user.
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar: ", anonAadhaar.status);
  }, [anonAadhaar]);

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
              debugger;
              const result = await getproof(anonAadhaar.pcd);
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

export default index;
