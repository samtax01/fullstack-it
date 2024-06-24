import express, { type Express } from "express";
import { createServer } from "vite";

// This function safe use from adding `"start:frontend": "vite preview --port 3000 --mode production --host"`to in package.json
export async function viteServer({
  app,
  backendDir,
}: {
  app: Express;
  backendDir: string;
}) {
  app.use(express.static(`${process.cwd()}/dist`));
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: backendDir,
    appType: "custom",
    server: {
      port: 3000,
      proxy: {},
      // middlewareMode: true,
    },
  });
  await server.listen();
  server.printUrls();
  server.bindCLIShortcuts({ print: true });
  app.use(server.middlewares);
  app.use("*", async (_req, res) => {
    res.sendFile(`${process.cwd()}/dist/index.html`);
  });
}
