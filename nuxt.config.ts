// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/device"],
  css: ["@/assets/css/main.css"],
  components: [
    {
      path: "@/components/",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "おでん 珈琲 酒 菊池",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },
});
