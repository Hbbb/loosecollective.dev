// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  // adapter: deno(),
  output: "static",
});
