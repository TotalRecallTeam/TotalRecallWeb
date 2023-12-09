import { DeployForm } from "@/components/DeployForm";
import { Layout } from "@/components/Layout";

const index = () => {
  return (
    <Layout>
      <h2 className="text-3xl text-white text-gradient   gap-4 text-center">
        Deploy Token
      </h2>
      <DeployForm />;
    </Layout>
  );
};
export default index;
