import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

import {
  getAllInsights,
} from "@/lib/insights";



export const metadata = {

  title:
    "Christian Insights | LisbethWrites",

  description:
    "Explore biblical reflections, faith teachings, and spiritual insights from LisbethWrites.",

  keywords: [
    "Christian Insights",
    "Christian Devotional",
    "Bible Reflection",
    "Faith Writing",
    "Christian Living",
    "LisbethWrites",
  ],

  openGraph: {

    title:
      "Christian Insights | LisbethWrites",

    description:
      "Biblical reflections inspired by everyday experiences.",

    url:
      "https://lisbethwrites.vercel.app/insights",

    siteName:
      "LisbethWrites",

    type:
      "website",

    images: [
      {
        url:
          "/og-image.png",

        width:
          1200,

        height:
          630,

        alt:
          "LisbethWrites Insights",
      },
    ],

  },

};





export default function InsightsPage() {


  const articles =
    getAllInsights();

  
  const featured =
    articles[0];


  const recent =
    articles.slice(1);



  return (

    <main
      className="
        bg-[#121212]
        text-[#F5F1E8]
        min-h-screen
      "
    >

      <Navbar />



      <section
        className="
          max-w-6xl
          mx-auto
          px-6
          pt-40
          pb-24
        "
      >



        {/* Hero */}


        <p
          className="
            uppercase
            tracking-[0.3em]
            text-[#D4AF37]
            text-sm
          "
        >
          Insights
        </p>



        <h1
          className="
            mt-6
            text-5xl
            md:text-7xl
            font-serif
            leading-tight
          "
        >

          Teaching the World
          <br />
          the Word,
          <br />
          Through Writing.

        </h1>




        <p
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-relaxed
            text-[#F5F1E8]/70
          "
        >

          Welcome to the writing library of LisbethWrites—
          a collection of biblical reflections inspired by
          everyday life. Here, ordinary experiences become
          extraordinary lessons as God's Word is revealed
          through storytelling, reflection, and faith.

        </p>





        {/* Featured Article */}



        {featured && (

          <div
            className="
              mt-20
              rounded-3xl
              border
              border-[#D4AF37]/20
              bg-white/5
              backdrop-blur-xl
              p-10
            "
          >

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-sm
                text-[#D4AF37]
              "
            >

              Featured Reflection

            </p>




            <h2
              className="
                mt-5
                text-4xl
                font-serif
                leading-tight
              "
            >

              {featured.title}

            </h2>




            <p
              className="
                mt-3
                text-sm
                text-[#F5F1E8]/50
              "
            >

              {featured.readTime}

              {" • "}

              {featured.date}

            </p>





            <p
              className="
                mt-6
                leading-relaxed
                text-[#F5F1E8]/70
              "
            >

              {featured.description}

            </p>





            <Link
              href={`/insights/${featured.slug}`}
              className="
                inline-block
                mt-8
                text-[#D4AF37]
                hover:underline
              "
            >

              Read the Full Reflection →

            </Link>



          </div>

        )}






        {/* Recent Articles */}



        <div
          className="
            mt-24
          "
        >

          <h2
            className="
              text-3xl
              font-serif
            "
          >

            Recent Writings

          </h2>





          <div
            className="
              mt-10
              space-y-10
            "
          >



            {recent.map((article) => (

              <article
                key={article.slug}
                className="
                  border-b
                  border-[#F5F1E8]/10
                  pb-10
                "
              >



                <p
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-xs
                    text-[#D4AF37]
                  "
                >

                  {article.category}

                </p>





                <h3
                  className="
                    mt-3
                    text-2xl
                    font-serif
                  "
                >

                  {article.title}

                </h3>





                <p
                  className="
                    mt-2
                    text-sm
                    text-[#F5F1E8]/50
                  "
                >

                  {article.readTime}

                  {" • "}

                  {article.date}

                </p>





                <p
                  className="
                    mt-5
                    leading-relaxed
                    text-[#F5F1E8]/70
                  "
                >

                  {article.description}

                </p>





                <Link
                  href={`/insights/${article.slug}`}
                  className="
                    inline-block
                    mt-5
                    text-[#D4AF37]
                    hover:underline
                  "
                >

                  Read Reflection →

                </Link>




              </article>


            ))}



          </div>


        </div>







        {/* Newsletter */}




        <div
          className="
            mt-28
            rounded-3xl
            border
            border-[#D4AF37]/20
            bg-white/5
            p-12
            text-center
          "
        >



          <p
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-[#D4AF37]
            "
          >

            Stay Connected

          </p>





          <h2
            className="
              mt-5
              text-4xl
              font-serif
            "
          >

            Never Miss a Reflection

          </h2>





          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-lg
              leading-relaxed
              text-[#F5F1E8]/70
            "
          >

            Join the LisbethWrites community and receive
            biblical reflections, devotionals, and ministry
            updates directly in your inbox.

          </p>





          <a
            href="http://eepurl.com/i4Zz9A"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-10
              rounded-full
              bg-[#D4AF37]
              px-8
              py-4
              font-medium
              text-[#121212]
              transition
              hover:scale-105
            "
          >

            Subscribe via Mailchimp

          </a>



        </div>




      </section>



      <Footer />


    </main>

  );

}