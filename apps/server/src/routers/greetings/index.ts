import { Hono } from "hono";

export const homeRouter = new Hono().get("/greet", (c) => {
  return c.json({ message: "OK" });
});
