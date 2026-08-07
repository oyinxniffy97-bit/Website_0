"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";


export default function Footer() {

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <footer
      className="
        bg-[#121212]
        text-[#F5F1E8]
        border-t
        border-[#F5F1E8]/10
        py-16
      "
    >

      <div className="max-w-7xl mx-auto px-6">


        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="
            grid
            md:grid-cols-3
            gap-12
          "
        >



          {/* Brand */}

          <div>

            <h2
              className="
              text-3xl
              font-serif
              "
            >
              LisbethWrites
            </h2>


            <p
              className="
              mt-3
              text-sm
              text-[#D4AF37]
              tracking-wide
              "
            >
              Teaching the World the Word
              <br />
              through Writing.
            </p>



            <p
              className="
              mt-6
              text-sm
              text-[#F5F1E8]/60
              max-w-sm
              leading-relaxed
              "
            >
              Creating meaningful words,
              stories, and resources that
              inspire faith, purpose, and impact.
            </p>



            {/* Social Media */}

            <div
              className="
              flex
              items-center
              gap-5
              mt-8
              "
            >


              <a
                href="https://www.linkedin.com/company/lisbethwrites"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                text-[#F5F1E8]/70
                hover:text-[#D4AF37]
                transition
                "
              >
                <FaLinkedin size={22}/>
              </a>



              <a
                href="https://facebook.com/thelisbethwrites"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                text-[#F5F1E8]/70
                hover:text-[#D4AF37]
                transition
                "
              >
                <FaFacebook size={22}/>
              </a>




              <a
                href="https://www.instagram.com/lisbeth_writes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                text-[#F5F1E8]/70
                hover:text-[#D4AF37]
                transition
                "
              >
                <FaInstagram size={22}/>
              </a>




              <a
                href="https://wa.me/2348132963356"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                text-[#F5F1E8]/70
                hover:text-[#D4AF37]
                transition
                "
              >
                <FaWhatsapp size={22}/>
              </a>


            </div>


          </div>





          {/* Navigation */}

          <div>

            <h3
              className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-[#D4AF37]
              "
            >
              Explore
            </h3>


            <ul
              className="
              mt-6
              space-y-4
              "
            >

              {links.map((link)=>(

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="
                    text-[#F5F1E8]/70
                    hover:text-[#D4AF37]
                    transition
                    "
                  >
                    {link.name}
                  </Link>

                </li>

              ))}


            </ul>


          </div>






          {/* Contact */}

          <div>


            <h3
              className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-[#D4AF37]
              "
            >
              Contact
            </h3>



            <div
              className="
              mt-6
              space-y-5
              "
            >



              <a
                href="mailto:lisbethwrites07@gmail.com"
                className="
                flex
                items-center
                gap-3
                text-[#F5F1E8]/70
                hover:text-[#D4AF37]
                transition
                "
              >

                <Mail size={18}/>

                <span>
                  lisbethwrites07@gmail.com
                </span>

              </a>






              <a
                href="https://wa.me/2348132963356"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                items-center
                gap-3
                text-[#F5F1E8]/70
                hover:text-[#D4AF37]
                transition
                "
              >

                <MessageCircle size={18}/>

                <span>
                  +234 813 296 3356
                </span>

              </a>






              <Link
                href="/contact"
                className="
                inline-flex
                items-center
                gap-2
                pt-4
                text-[#D4AF37]
                hover:gap-3
                transition-all
                "
              >

                Start a Conversation

                <ArrowUpRight size={16}/>

              </Link>


            </div>


          </div>



        </motion.div>






        {/* Bottom */}

        <div

          className="
          mt-16
          pt-8
          border-t
          border-[#F5F1E8]/10
          text-sm
          text-[#F5F1E8]/50
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          "

        >

          <p>
            © {new Date().getFullYear()} LisbethWrites.
            All rights reserved.
          </p>


          <p>
            Crafted with faith and creativity.
          </p>


        </div>


      </div>


    </footer>
  );
}