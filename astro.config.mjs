// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import mdx from "@astrojs/mdx";

const isGitHub = process.env.GITHUB_ACTIONS === "true";
console.log("process.env.GITHUB_ACTIONS:", process.env.GITHUB_ACTIONS);
console.log("isGitHub:", isGitHub);

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },

  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  output: "static",
  site: "https://colinthepanda.github.io",
  base: isGitHub ? "/ACSLContestSite/" : "/",
});
