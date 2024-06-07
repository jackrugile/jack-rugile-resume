// https://nuxt.com/docs/api/configuration/nuxt-config

import data from "./assets/data.json";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  devServer: {
    host: "0.0.0.0",
  },
  css: ["~/assets/css/index.css"],
  app: {
    head: {
      title: data.meta.title,
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
        {
          name: "description",
          content: data.description,
        },
      ],
    },
  },
});
