export default function sitemap() {
  const baseUrl = "https://portfolio-me-kappa-weld.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
