import config from "../env";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(config.HASURA_GRAPHQL_URL, {
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": config.HASURA_GRAPHQL_ADMIN_SECRET,
    "x-hasura-role": config.HASURA_GRAPHQL_ADMIN_SECRET,
  },
});

export default client;
