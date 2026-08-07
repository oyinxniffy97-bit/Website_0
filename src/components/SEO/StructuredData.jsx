export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "LisbethWrites",

    url: "https://lisbethwrites.vercel.app",

    logo: "https://lisbethwrites.vercel.app/favicon.ico",

    description:
      "LisbethWrites is a Christian Writing Studio helping ministries, churches, Christian authors, Kingdom organizations, and faith-driven brands communicate God's message through thoughtful, Scripture-centered writing.",

    slogan:
      "Teaching the World the Word through Writing",

    email:
      "Lisbethwrites07@gmail.com",

    telephone:
      "+2348132963356",

    sameAs: [
      "https://linkedin.com/company/lisbethwrites",
      "https://facebook.com/thelisbethwrites",
      "https://www.instagram.com/lisbeth_writes",
      "https://x.com/LisbethWrites",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2348132963356",
      contactType: "customer service",
      email: "Lisbethwrites07@gmail.com",
    },
  };


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}