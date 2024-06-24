import express, { Express } from "express";
import { onShutdown } from "./helpers/events";
import { fileURLToPath } from "url";
import { viteServer } from "./routers/viteServer";
import apiRouter from "./routers";

const app: Express = express();

// This is responsible for serving the frontend with express on PRODUCTION
process.env.NODE_ENV !== "development" &&
  (async () => {
    await viteServer({
      app,
      backendDir: fileURLToPath(new URL(".", import.meta.url)),
    });
  })();

app.use(express.json());
app.use("/api", apiRouter);
process.on("SIGTERM", onShutdown("SIGTERM"));
process.on("SIGINT", onShutdown("SIGINT"));

app.listen(process.env.PORT, () => {
  console.log(
    `[Server]: Server is running at http://localhost:${process.env.PORT}`,
  );
});
