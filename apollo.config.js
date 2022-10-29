const { config } = require("dotenv");

config();

module.exports = {
  client: {
    includes: ["./src/**/*.graphql"],
    excludes: ["./node_modules/**/*.ts", "./src/graphql/*.ts"],
    service: {
      name: "laundry-service",
      url: process.env.HASURA_URL || "",
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_SECRET || "",
      },
    },
  },
};
