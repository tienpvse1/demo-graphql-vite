import type { CodegenConfig } from "@graphql-codegen/cli";
import { config as configEnv } from "dotenv";
configEnv();
const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.HASURA_URL || ""]: {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_SECRET || "",
      },
    },
  },
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/index.ts": {
      plugins: [
        "typescript-react-apollo",
        "typescript",
        "typescript-operations",
      ],
    },
  },
};

export default config;
