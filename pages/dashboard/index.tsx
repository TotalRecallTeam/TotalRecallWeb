import Button from "@/components/Button";
import { Layout } from "@/components/Layout";
import { TokenDataTabs } from "@/components/Tabs";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex justify-end py-20 px-[140px]">
        <Button
          onClick={() => {
            router.push("/verify");
          }}
          title="Deploy your new Token"
        ></Button>
      </div>
      <TokenDataTabs />
    </Layout>
  );
};

export default Index;
