import { defineConfig } from "cypress";

export default defineConfig({
  retries: 1,
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  viewportWidth: 1366,
  viewportHeight: 768,
});