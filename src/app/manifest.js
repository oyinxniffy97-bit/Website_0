export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "ShopperSisi",
    short_name: "ShopperSisi",
    description:
      "Your trusted partner for African foodstuff, fabrics, errands, and delivery.",
    start_url: "/Website_0/",
    display: "standalone",
    background_color: "#FFF5F8",
    theme_color: "#B80668",
    icons: [
      {
        src: "/Website_0/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/Website_0/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}