/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Footer({ mode }) {
  const navs = [
    {
      text: "Home",
      link: "#Home",
    },
    {
      text: "My projects",
      link: "#Portfolio",
    },
    {
      text: "About me",
      link: "#About",
    },
    {
      text: "Contact me",
      link: "#Contact",
    },
  ];

  const socials = [
    {
      icon: <i className="fa-brands fa-x-twitter"></i>,
      link: "https://x.com/Sujith2021cassy",
    },
    {
      icon: <i className="fa-brands fa-linkedin-in "></i>,
      link: "https://www.linkedin.com/in/sujith-kumar-2003cassy/",
    },
    {
      icon: <i className="fa-brands fa-github "></i>,
      link: "https://github.com/Sujith-Kumar-2003",
    },
    {
      icon: <i className="fa-brands fa-whatsapp"></i>,
      link: "https://wa.me/+14389797838",
    },
  ];

  return (
    <footer
      className={`${
        !mode && "text-black"
      } flex flex-col lg:flex-row justify-between pb-8 sm:pb-4 px-8 lg:px-32 lg:py-8 overflow-hidden`}
    >
      <motion.h1
        variants={fadeIn("up", 0, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="mb-4 logo tracking-wider text-xl"
      >
      let's Connect..<i className="fa-solid fa-circle text-[6px] text-myColor"></i>
      </motion.h1>
      <div
        className={`${
          mode && "opacity-[.7]"
        } flex flex-col lg:flex-row text-sm  lg:mr-24`}
      >
        <motion.div
          variants={fadeIn("up", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-col gap-[1rem] lg:gap-[1rem] lg:px-[4rem] lg:pb-[3rem]"
        >
          <p>Software Engineer</p>
          <p>Front-End-Developer</p>
        </motion.div>
        <motion.ul
          variants={fadeIn("up", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-col py-[2rem] gap-[1rem] lg:py-0 lg:px-[4rem] lg:pb-[3rem] lg:border-x-2 lg:border-solid"
        >
          {navs.map((nav) => {
            return (
              <li key={nav.text}>
                <a href={nav.link}>{nav.text}</a>
              </li>
            );
          })}
        </motion.ul>
        <motion.div
          variants={fadeIn("up", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="lg:px-[4rem]"
        >
          <p className="mb-4">Social media handles</p>
          <ul className="flex gap-[1.5rem] ">
            {socials.map((social) => {
              return (
                <li key={social.link}>
                  <a href={social.link} target="_blank" className="text-lg">
                    {social.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}
