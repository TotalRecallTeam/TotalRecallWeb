import Button from "@/components/Button";
import { Layout } from "@/components/Layout";
import { TokenDataTabs } from "@/components/Tabs";

const index = () => {
  return (
    <Layout>
      <div className="flex justify-end py-20 px-[140px]">
        <Button
          onClick={() => {
            alert("button clicked ");
          }}
          title="Deploy your new Token"
        ></Button>
      </div>
      <TokenDataTabs />
    </Layout>
  );
};

export default index;
