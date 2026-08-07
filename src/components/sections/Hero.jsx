"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#121212]"
    >

      {/* Background Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute 
        top-1/4 
        right-0 
        w-[500px] 
        h-[500px] 
        bg-[#D4AF37]/10 
        blur-[120px] 
        rounded-full
        "
      />


      <div
        className="
        max-w-7xl 
        mx-auto 
        px-6 
        pt-32 
        pb-20 
        grid 
        lg:grid-cols-2 
        gap-16 
        items-center
        "
      >


        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >


          <p
            className="
            text-[#D4AF37]
            uppercase
            tracking-[0.35em]
            text-sm
            mb-6
            "
          >
            Faith • Story • Purpose
          </p>



          <h1
            className="
            text-5xl 
            md:text-7xl 
            font-serif 
            leading-[1.1] 
            text-[#F5F1E8]
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
            text-lg 
            leading-relaxed 
            text-[#F5F1E8]/70 
            max-w-xl
            "
          >
            LisbethWrites is a Christian writing studio helping ministries,
            authors, and purpose-driven organizations communicate God's message
            through thoughtful, meaningful, and impactful writing.
          </p>




          {/* Buttons */}
          <div
            className="
            mt-10 
            flex 
            flex-wrap 
            gap-5
            "
          >


            <Link
              href="/contact"
              className="
              inline-flex 
              items-center 
              gap-2 
              px-7 
              py-4 
              rounded-full 
              bg-[#D4AF37] 
              text-[#121212] 
              font-medium 
              hover:scale-105 
              transition
              "
            >
              Start Your Project
              <ArrowRight size={18}/>
            </Link>



            {/* FIXED ROUTE */}
            <Link
              href="/our-work"
              className="
              inline-flex 
              items-center 
              px-7 
              py-4 
              rounded-full 
              border 
              border-[#F5F1E8]/20 
              text-[#F5F1E8]
              hover:border-[#D4AF37]
              hover:text-[#D4AF37]
              transition
              "
            >
              Explore Our Work
            </Link>


          </div>




          {/* Mobile Card */}
          <div
            className="
            lg:hidden 
            mt-14 
            flex 
            justify-center
            "
          >

            <div
              className="
              w-64
              rounded-2xl
              border
              border-[#D4AF37]/20
              bg-gradient-to-br
              from-white/10
              to-[#D4AF37]/10
              backdrop-blur-xl
              p-6
              "
            >

              <p
                className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
                "
              >
                The Word
              </p>


              <h3
                className="
                mt-5
                text-3xl
                font-serif
                text-[#F5F1E8]
                leading-tight
                "
              >
                Stories
                <br/>
                That
                <br/>
                Transform
              </h3>


              <div
                className="
                mt-5
                h-px
                bg-[#D4AF37]/40
                "
              />


              <p
                className="
                mt-4
                text-sm
                italic
                text-[#F5F1E8]/70
                "
              >
                Written with faith and purpose.
              </p>


            </div>

          </div>


        </motion.div>





        {/* Desktop Visual */}
        <motion.div
          initial={{
            opacity:0,
            scale:0.9
          }}
          animate={{
            opacity:1,
            scale:1
          }}
          transition={{
            duration:1
          }}
          className="
          hidden 
          lg:flex 
          justify-center 
          relative
          "
        >


          <motion.div
            animate={{
              y:[0,-15,0]
            }}
            transition={{
              duration:5,
              repeat:Infinity,
              ease:"easeInOut"
            }}
            className="
            w-[420px]
            h-[520px]
            rounded-3xl
            border
            border-[#D4AF37]/20
            bg-gradient-to-br
            from-white/10
            to-[#D4AF37]/10
            backdrop-blur-xl
            flex
            items-center
            justify-center
            overflow-hidden
            relative
            "
          >


            <div
              className="
              absolute
              inset-0
              bg-[#D4AF37]/10
              blur-3xl
              "
            />



            <motion.div
              animate={{
                y:[0,-8,0],
                rotate:[3,1,3]
              }}
              transition={{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut"
              }}
              className="
              relative
              bg-[#F5F1E8]
              text-[#121212]
              w-[260px]
              h-[340px]
              rounded-lg
              shadow-2xl
              flex
              flex-col
              justify-center
              px-8
              "
            >


              <p
                className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#8B6B23]
                "
              >
                The Word
              </p>


              <h2
                className="
                mt-6
                text-4xl
                font-serif
                leading-tight
                "
              >
                Stories
                <br/>
                That
                <br/>
                Transform
              </h2>


              <div
                className="
                mt-8
                h-px
                bg-[#D4AF37]
                "
              />


              <p
                className="
                mt-4
                text-xs
                italic
                "
              >
                Written with faith and purpose.
              </p>


            </motion.div>


          </motion.div>


        </motion.div>


      </div>


    </section>
  );
}