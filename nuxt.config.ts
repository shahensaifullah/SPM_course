export default defineNuxtConfig({
  compatibilityDate: "2026-09-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  ssr: true,
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/trainer",
        "/case-2",
        "/topics/definition",
        "/topics/competition",
        "/topics/resources",
        "/topics/formation",
        "/topics/organization",
        "/topics/ethics",
        "/topics/cpm",
        "/topics/okrs",
      ],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "bn" },
      title: "SPM Field Guide — HNU AIDA Exam Prep",
      meta: [
        { name: "description", content: "Bangla-first interactive study guide for HNU AIDA Strategy and Performance Management." },
        { name: "theme-color", content: "#182118" },
      ],
      link: [{ rel: "icon", href: "/favicon.svg" }],
    },
  },
  typescript: { strict: true, typeCheck: false },
});
