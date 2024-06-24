import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  const backendURL = process.env.VITE_BACKEND_URL;

  return defineConfig({
    envDir: ".prod.env",
    plugins: [react()],
    resolve: {
      alias: {
        "@/frontend": path.resolve(__dirname, "./src/frontend"),
        "@/shared": path.resolve(__dirname, "./src/shared"),
      },
    },
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: `${backendURL}`,
          changeOrigin: false,
          secure: true,
        },
      },
    },
  });
};
