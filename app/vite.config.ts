// WSL USERS ON WINDOWS ONLY (NOT NECESSARY FOR LINUX/MACOS)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Buffer } from 'buffer';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({ protocolImports: true })],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      'buffer': 'buffer'
    }
  },
  define: {
    // Make Buffer globally available
    global: {},
    'window.Buffer': Buffer,
  },
});