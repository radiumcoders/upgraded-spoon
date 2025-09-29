import "dotenv/config";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { homeRouter } from "./routers/home-router";

const app = new Hono().basePath("/api")
  .use(logger())
  .use(
    "/*",
    cors({
      origin: [process.env.CORS_ORIGIN || "", "http://localhost:3001"],
      allowMethods: ["GET", "POST", "OPTIONS"],
    })
  )
  .route("/router", homeRouter);
// ✅ This is the type you want for hc
export type AppRouter = typeof app;

export default app;
