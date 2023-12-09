import { Welcome } from "@/components";
import TableComponent from "@/components/Table";
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
        data={[
          {
            tokenName: "Token A",
            itoPrice: "$10",
            recallPrice: "$8",
            nextRolloverTime: "2023-01-01 12:00 PM",
            takenCount: 100,
            totalCount: 200,
            activeCount: 150,
            totalCountCap: 500,
            status: "Active",
          },
          {
            tokenName: "Token B",
            itoPrice: "$10",
            recallPrice: "$8",
            nextRolloverTime: "2023-01-01 12:00 PM",
            takenCount: 100,
            totalCount: 200,
            activeCount: 150,
            totalCountCap: 500,
            status: "Recalled",
          },
          {
            tokenName: "Token B",
            itoPrice: "$10",
            recallPrice: "$8",
            nextRolloverTime: "2023-01-01 12:00 PM",
            takenCount: 100,
            totalCount: 200,
            activeCount: 150,
            totalCountCap: 500,
            status: "Recalled",
          },
          {
            tokenName: "Token B",
            itoPrice: "$10",
            recallPrice: "$8",
            nextRolloverTime: "2023-01-01 12:00 PM",
            takenCount: 100,
            totalCount: 200,
            activeCount: 150,
            totalCountCap: 500,
            status: "Recalled",
          },
          // Add more dummy data as needed
        ]}
      />
    </Layout>
  );
};

export default Home;
