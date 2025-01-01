import { defineConfig } from "vite";
import nodePolyfills from "vite-plugin-node-polyfills";

export default defineConfig({
    plugins: [
        nodePolyfills({
            protocolImports: true, // Enable polyfills for "node:*" imports
        }),
    ],
    resolve: {
        alias: {
            buffer: "buffer", // Add alias for the `buffer` polyfill
        },
    },
});
