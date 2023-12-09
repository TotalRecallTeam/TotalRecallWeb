import { Welcome } from "@/components";
import TableComponent from "@/components/Table";
import { ALL_TOKENS } from "@/consts";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Layout = dynamic(
  () => import("../components/Layout").then((module) => module.Layout),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
      <TableComponent
        title={"All Deployed Recallable Tokens"}
        data={ALL_TOKENS}
      />
    </Layout>
  );
};

export default Home;
