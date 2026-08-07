import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/SEO/StructuredData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://lisbethwrites.vercel.app"),

  title: {
    default: "LisbethWrites | Teaching the World the Word Through Writing",
    template: "%s | LisbethWrites",
  },

  description:
    "LisbethWrites is a Christian Writing Studio helping ministries, churches, Christian authors, Kingdom organizations, and faith-driven brands communicate God's message through thoughtful, Scripture-centered writing.",

  applicationName: "LisbethWrites",

  keywords: [
    "Christian Writing Studio",
    "Christian Writer",
    "Christian Content Writer",
    "Christian Ghostwriter",
    "Christian Copywriter",
    "Christian Editor",
    "Christian Book Writer",
    "Devotional Writer",
    "Bible Study Writer",
    "Church Content Writer",
    "Ministry Writing",
    "Kingdom Writing",
    "Faith-Based Writing",
    "Christian Publishing",
    "Christian Newsletter Writer",
    "Christian YouTube Script Writer",
  ],

  authors: [
    {
      name: "LisbethWrites Team",
      url: "https://lisbethwrites.vercel.app",
    },
  ],

  creator: "LisbethWrites",

  publisher: "LisbethWrites",

  category: "Christian Writing",

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

  alternates: {
    canonical: "https://lisbethwrites.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lisbethwrites.vercel.app",
    siteName: "LisbethWrites",
    title: "LisbethWrites | Teaching the World the Word Through Writing",
    description:
      "A Christian Writing Studio creating Scripture-centered content, devotionals, Bible studies, articles, and resources that communicate God's truth with clarity and excellence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LisbethWrites – Teaching the World the Word Through Writing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LisbethWrites | Teaching the World the Word Through Writing",
    description:
      "A Christian Writing Studio helping ministries, authors, and faith-driven organizations communicate God's message through meaningful writing.",
    creator: "@LisbethWrites",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${cormorant.variable} ${sourceSans.variable}`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}