export default function manifest() {
  return {
    name: "LisbethWrites",
    short_name: "LisbethWrites",
    description:
      "Teaching the World the Word Through Writing.",
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#121212",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}