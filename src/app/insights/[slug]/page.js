import { notFound } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  getInsightBySlug,
  getAllInsights,
} from "@/lib/insights";



export async function generateStaticParams() {

  const articles = getAllInsights();

  return articles.map((article) => ({
    slug: article.slug,
  }));

}




export async function generateMetadata({ params }) {

  const { slug } = await params;

  const article = getInsightBySlug(slug);


  if (!article) {

    return {
      title: "Insight Not Found | LisbethWrites",
    };

  }



  return {

    title: `${article.title} | LisbethWrites`,

    description: article.description,


    keywords: [
      "Christian Writing",
      "Christian Devotional",
      "Bible Study",
      "Faith Based Writing",
      "Christian Insights",
      "LisbethWrites",
    ],


    alternates: {

      canonical:
        `https://lisbethwrites.vercel.app/insights/${article.slug}`,

    },


    openGraph: {

      title: article.title,

      description: article.description,

      url:
        `https://lisbethwrites.vercel.app/insights/${article.slug}`,

      siteName: "LisbethWrites",

      type: "article",

      images: [

        {

          url:
            article.image || "/og-image.png",

          width: 1200,

          height: 630,

          alt: article.title,

        }

      ],

    },


    twitter: {

      card: "summary_large_image",

      title: article.title,

      description: article.description,

      images: [
        article.image || "/og-image.png"
      ],

    },

  };

}






export default async function InsightPage({ params }) {


  const { slug } = await params;


  const article =
    getInsightBySlug(slug);



  if (!article) {

    notFound();

  }





  const articleSchema = {

    "@context": "https://schema.org",

    "@type": "Article",

    headline: article.title,

    description: article.description,


    author: {

      "@type": "Person",

      name: article.author,

    },


    publisher: {

      "@type": "Organization",

      name: "LisbethWrites",

    },


    datePublished: article.date,


    image:

      article.image
        ? `https://lisbethwrites.vercel.app${article.image}`
        : "https://lisbethwrites.vercel.app/og-image.png",

  };






  return (

    <main
      className="
      min-h-screen
      bg-[#121212]
      text-[#F5F1E8]
      "
    >


      <Navbar />



      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(articleSchema),
        }}
      />




      <article
        className="
        max-w-4xl
        mx-auto
        px-6
        pt-40
        pb-24
        "
      >



        {/* CATEGORY */}

        <p
          className="
          text-[#D4AF37]
          uppercase
          tracking-[0.3em]
          text-sm
          "
        >

          {article.category}

        </p>






        {/* TITLE */}

        <h1
          className="
          mt-6
          text-5xl
          md:text-7xl
          font-serif
          leading-tight
          "
        >

          {article.title}

        </h1>







        {/* META */}

        <p
          className="
          mt-6
          text-[#F5F1E8]/60
          "
        >

          By {article.author}
          {" • "}
          {article.date}
          {" • "}
          {article.readTime}

        </p>







        {/* IMAGE */}

        {article.image && (

          <img

            src={article.image}

            alt={article.title}

            className="
            mt-12
            w-full
            rounded-3xl
            object-cover
            "

          />

        )}








        {/* BODY */}

        <div
          className="
          mt-14
          space-y-8
          text-lg
          leading-relaxed
          "
        >


          {article.body.map((block,index)=>{


            if(block.type === "paragraph"){

              return (

                <p key={index}>
                  {block.text}
                </p>

              );

            }





            if(block.type === "quote"){

              return (

                <blockquote

                  key={index}

                  className="
                  border-l-4
                  border-[#D4AF37]
                  pl-6
                  italic
                  text-2xl
                  text-[#D4AF37]
                  "

                >

                  {block.text}

                </blockquote>

              );

            }





            if(block.type === "scripture"){

              return (

                <div

                  key={index}

                  className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  "

                >

                  <p
                    className="
                    text-[#D4AF37]
                    font-semibold
                    "
                  >

                    {block.reference}

                  </p>


                  <p
                    className="
                    mt-3
                    italic
                    "
                  >

                    {block.text}

                  </p>


                </div>

              );

            }


            return null;


          })}



        </div>









        {/* PRAYER */}

        {article.prayer && (

          <section

            className="
            mt-16
            bg-white/5
            rounded-3xl
            p-8
            "

          >

            <h2
              className="
              text-3xl
              font-serif
              text-[#D4AF37]
              "
            >

              Prayer

            </h2>


            <p className="mt-5 leading-relaxed">

              {article.prayer}

            </p>


          </section>

        )}









        {/* REFLECTION */}

        {article.reflection && (

          <section className="mt-12">


            <h2
              className="
              text-3xl
              font-serif
              text-[#D4AF37]
              "
            >

              Reflection

            </h2>



            <ul
              className="
              mt-5
              space-y-3
              list-disc
              pl-6
              "
            >

              {article.reflection.map((item,index)=>(

                <li key={index}>

                  {item}

                </li>

              ))}


            </ul>


          </section>

        )}








        {/* NEXT ARTICLE */}

        {article.next && (

          <section className="mt-20">

            <Link

              href={`/insights/${article.next}`}

              className="
              text-[#D4AF37]
              hover:underline
              text-lg
              "

            >

              Continue Reading →

            </Link>


          </section>

        )}





      </article>




      <Footer />


    </main>

  );

}