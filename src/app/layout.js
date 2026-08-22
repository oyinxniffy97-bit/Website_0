import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Shopper Sisi | We Run Errands for a Living",
    template: "%s | Shopper Sisi",
  },

  description:
    "Shopper Sisi makes it easy to shop for authentic African foodstuff, fabrics, spices, dry fish, meat and more from Nigeria. We shop for you and deliver to your doorstep.",

  applicationName: "Shopper Sisi",

  keywords: [
    "Shopper Sisi",
    "African foodstuff",
    "Nigerian foodstuff",
    "Nigerian foodstuff abroad",
    "buy Nigerian food online",
    "African groceries",
    "Nigerian groceries",
    "Nigerian fabrics",
    "African fabrics",
    "dry fish",
    "Nigerian spices",
    "African food delivery",
    "Nigeria shopping errands",
    "Nigerian shopping service",
    "shop Nigerian products",
    "African food delivery abroad",
  ],

  authors: [
    {
      name: "Shopper Sisi",
    },
  ],

  creator: "Shopper Sisi",
  publisher: "Shopper Sisi",
  category: "E-commerce",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shopper Sisi",
    title: "Shopper Sisi | We Run Errands for a Living",

    description:
      "From Nigerian foodstuff and fabrics to spices, dry fish and more, Shopper Sisi helps you get what you need from Nigeria without the stress.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopper Sisi — We Run Errands for a Living",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopper Sisi | We Run Errands for a Living",

    description:
      "Shop authentic Nigerian and African products with ease. Shopper Sisi shops for you and delivers to your doorstep.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#8D0668",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={
          playfair.variable +
          " " +
          poppins.variable +
          " bg-white text-[#1D1D1D] antialiased"
        }
      >
        {children}
      </body>
    </html>
  );
}