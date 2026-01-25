export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://portfolio-me-kappa-weld.vercel.app/sitemap.xml",
  };
}
