import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import News from "./collections/News";
import path from "path";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  typescript: {
    outputFile: path.resolve(__dirname, "types.ts"),
  },
  collections: [News],
});
