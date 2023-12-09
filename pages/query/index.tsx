import { init, useQuery } from "@airstack/airstack-react";
import { Layout } from "@/components/Layout";

init("1cd1f4c31e4f747c2aabf193868cd7014");

const query = `query MyQuery {
    TokenBalances(
      input: {filter: {tokenAddress: {_in: ["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"]}}, blockchain: ethereum, limit: 30}
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
    return(
        <Layout>
            <p className="text-white">Data: {JSON.stringify(data)}</p>
        </Layout>
    );
  }

  if (loading) {
    return(
        <Layout>
            <p className="text-white">Loading...</p>
        </Layout>
    );
  }

  if (error) {
    return(
        <Layout>
            <p className="text-white">Error: {error.message}</p>
        </Layout>
    );
  }
};

export default Component;