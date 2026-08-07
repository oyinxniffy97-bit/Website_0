"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const links = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <>

      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            scrolled
            ? "bg-[#121212]/90 backdrop-blur-xl border-b border-[#D4AF37]/20"
            : "bg-transparent"
          }
        `}
      >

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          py-5
          flex
          items-center
          justify-between
          "
        >


          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <Image
              src="/logo.png"
              alt="LisbethWrites Logo"
              width={55}
              height={55}
              priority
            />


            <div className="flex flex-col">

              <span
                className="
                text-xl
                md:text-2xl
                font-serif
                text-[#F5F1E8]
                "
              >
                LisbethWrites
              </span>


              <span
                className="
                text-[10px]
                md:text-xs
                text-[#D4AF37]
                tracking-widest
                "
              >
                Teaching the World the Word,
                <br />
                Through Writing.
              </span>

            </div>

          </Link>





          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-10">

            {links.map((link)=>(

              <Link
                key={link.name}
                href={link.href}
                className="
                relative
                text-sm
                text-[#F5F1E8]/80
                hover:text-[#D4AF37]
                transition
                group
                "
              >

                {link.name}


                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  h-[1px]
                  w-0
                  bg-[#D4AF37]
                  group-hover:w-full
                  transition-all
                  duration-300
                  "
                />

              </Link>

            ))}

          </div>






          {/* Desktop CTA */}

          <Link
            href="/contact"
            className="
            hidden
            lg:flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-[#D4AF37]
            text-[#121212]
            text-sm
            font-medium
            hover:scale-105
            transition
            "
          >

            Start Your Project

            <ArrowRight size={16}/>

          </Link>






          {/* Mobile Button */}

          <button
            onClick={()=>setMobileOpen(!mobileOpen)}
            className="
            lg:hidden
            text-[#F5F1E8]
            "
          >

            {
              mobileOpen
              ? <X size={28}/>
              : <Menu size={28}/>
            }

          </button>


        </div>





        {/* Mobile Menu */}

        <AnimatePresence>

        {
          mobileOpen && (

            <motion.div

              initial={{
                opacity:0,
                height:0
              }}

              animate={{
                opacity:1,
                height:"auto"
              }}

              exit={{
                opacity:0,
                height:0
              }}

              className="
              lg:hidden
              bg-[#121212]/95
              backdrop-blur-xl
              border-t
              border-[#D4AF37]/20
              "

            >

              <div
                className="
                flex
                flex-col
                gap-6
                px-6
                py-8
                "
              >

                {
                  links.map((link)=>(

                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={()=>setMobileOpen(false)}
                      className="
                      text-[#F5F1E8]
                      hover:text-[#D4AF37]
                      "
                    >

                      {link.name}

                    </Link>

                  ))
                }



                <Link
                  href="/contact"
                  onClick={()=>setMobileOpen(false)}
                  className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  bg-[#D4AF37]
                  text-[#121212]
                  "
                >

                  Start Your Project

                  <ArrowRight size={16}/>

                </Link>


              </div>


            </motion.div>

          )
        }

        </AnimatePresence>


      </nav>

    </>
  );
}