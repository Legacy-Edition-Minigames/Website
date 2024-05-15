import { defineConfig } from 'vite';
import { resolve } from "node:path";

export default defineConfig({
  base: '/',
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        index: "./index.html",
        faq: "./faq/index.html",
        blog: "./blog/index.html",
        viewPost: "./viewPost/index.html",
        join: "./join/index.html",
        youtube: "./youtube/index.html",
        github: "./github/index.html",
        rules: "./rules/index.html",
        patreon: "./patreon/index.html",
        patreonnotice: "./patreonnotice/index.html",
        joinrequest: "./joinrequest/index.html",
        credits: "./credits/index.html",
        appeal: "./appeal/index.html",
        about: "./about/index.html",
        404: "./404/index.html",
      },
    }
  },
  server: {
    host: '127.0.0.1',
    port: 8000,
    strictPort: true
  },
  preview: {
    host: '127.0.0.1',
    port: 8000,
    strictPort: true
  }
});
