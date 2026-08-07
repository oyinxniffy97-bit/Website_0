"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Mail,
} from "lucide-react";

import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";


export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-24
        bg-[#121212]
        text-[#F5F1E8]
      "
    >

      <div className="max-w-5xl mx-auto px-6">


        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="
            relative
            rounded-3xl
            border
            border-[#D4AF37]/20
            bg-white/5
            backdrop-blur-xl
            p-10
            md:p-16
            text-center
            overflow-hidden
          "

        >


          {/* Background Glow */}

          <div
            className="
              absolute
              inset-0
              bg-[#D4AF37]/10
              blur-3xl
            "
          />



          <div className="relative">


            <Mail
              size={36}
              className="
                mx-auto
                text-[#D4AF37]
              "
            />



            <p
              className="
                mt-6
                text-[#D4AF37]
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              Start A Conversation
            </p>




            <h1
              className="
                mt-5
                text-4xl
                md:text-5xl
                font-serif
                leading-tight
              "
            >

              Have A Message
              <br />
              Worth Sharing?

            </h1>





            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                text-[#F5F1E8]/70
                text-lg
                leading-relaxed
              "
            >

              Whether you need faith-based writing,
              devotionals, articles, newsletters,
              editing, or thoughtful Christian
              storytelling, we would be honoured
              to help bring your vision into words.

            </p>





            {/* Email Button */}

            <a
              href="mailto:lisbethwrites07@gmail.com"

              className="
                mt-10
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-full
                bg-[#D4AF37]
                text-[#121212]
                font-medium
                hover:scale-105
                transition
              "
            >

              Let's Work Together

              <ArrowRight size={18}/>

            </a>






            {/* Social Links */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >



              {/* WhatsApp */}

              <a
                href="https://wa.me/2348132963356"

                target="_blank"

                rel="noopener noreferrer"

                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  border
                  border-[#F5F1E8]/20
                  hover:border-[#D4AF37]
                  transition
                "
              >

                <FaWhatsapp size={18}/>

                WhatsApp

              </a>






              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/company/lisbethwrites"

                target="_blank"

                rel="noopener noreferrer"

                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  border
                  border-[#F5F1E8]/20
                  hover:border-[#D4AF37]
                  transition
                "
              >

                <FaLinkedin size={18}/>

                LinkedIn

              </a>







              {/* Facebook */}

              <a
                href="https://facebook.com/thelisbethwrites"

                target="_blank"

                rel="noopener noreferrer"

                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  border
                  border-[#F5F1E8]/20
                  hover:border-[#D4AF37]
                  transition
                "
              >

                <FaFacebook size={18}/>

                Facebook

              </a>



            </div>



          </div>


        </motion.div>


      </div>


    </section>
  );
}