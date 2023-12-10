import { Layout } from "@/components/Layout";
import { init, useQuery } from "@airstack/airstack-react";

init("1cd1f4c31e4f747c2aabf193868cd7014");

const query = `query MyQuery {
    TokenBalances(
      input: {filter: {tokenAddress: {_in: ["0x63ae1fF822c4C8da7f48c965bd7C2C922Ce59dcC"]}}, blockchain: ethereum, limit: 30}
    ) {
      TokenBalance {
        owner {
          addresses
          domains {
            name
            isPrimary
          }
          socials {
            dappName
            profileName
            userAssociatedAddresses
          }
          xmtp {
            isXMTPEnabled
          }
        }
      }
      pageInfo {
        nextCursor
        prevCursor
      }
    }
  }`; // Replace with GraphQL Query

const Component = () => {
  const { data, loading, error } = useQuery(query);

  if (data) {
    return (
      <Layout>
        <p className="text-white">Data: {JSON.stringify(data)}</p>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <p className="text-white">Loading...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p className="text-white">Error: {error.message}</p>
      </Layout>
    );
  }
};

export default Component;
