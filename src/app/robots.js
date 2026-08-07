export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
      "https://lisbethwrites.vercel.app/sitemap.xml",
  };
}