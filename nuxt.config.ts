import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/device"],
  css: ["@/assets/css/main.css", "@/assets/main.scss"],
  components: [
    {
      path: "@/components/",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "一般社団法人 うるの木",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: "https://af72wdiit6.ap-northeast-1.awsapprunner.com",
    },
  },
});
