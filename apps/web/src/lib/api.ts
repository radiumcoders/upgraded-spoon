import { hc } from "hono/client";
import type { AppRouter } from "@server/src/index";

const client = hc<AppRouter>(
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
);

export default client;