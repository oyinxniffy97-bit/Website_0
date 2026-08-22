export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://oyinxniffy97-bit.github.io/Website_0";

  const routes = [
    {
      path: "",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/services",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/shop",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/errands",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/how-it-works",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/faq",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/request",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/contact",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}