import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
        }),
    ],
    server: {
        host: true,
        port: 5173,
    },
    esbuild: {
        jsxFactory: "jsx",
    },
    test: {
        environment: "jsdom",
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        globals: true,
        setupFiles: "./vitest.setup.ts",
        coverage: {
            reporter: ["json-summary", "json", "text"],
        },
    },
});
