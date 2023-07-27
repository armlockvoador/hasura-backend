import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: 5555,
  HASURA_GRAPHQL_URL: "http://host.docker.internal:8080/v1/graphql",
  DATABASE_URL: "postgres://postgres:postgrespassword@postgres:5432/postgres",
  HASURA_GRAPHQL_ADMIN_SECRET: "test"
};
