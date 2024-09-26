import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Intro() {
  const [typeEffect] = useTypewriter({
    words: ["Front-End-Developement", "React.js-Developer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });
  const socials = [
    {
      icon: <i className="fa-brands fa-linkedin-in text-black"></i>,
      link: "https://www.linkedin.com/in/sujith-kumar-2003cassy/",
    },
    {
      icon: <i className="fa-brands fa-github text-black"></i>,
      link: "https://github.com/Sujith-Kumar-2003",
    },
    {
      icon: <i className="fa-brands fa-x-twitter text-black"></i>,
      link: "https://x.com/Sujith2021cassy",
    },
  ];
  return (
    <section className="h-screen relative flex">
      <img
        src="public/Back.webp"
        alt=""
        className="absolute w-full h-full opacity-[.1]"
      />
      <div className=" mx-auto my-auto flex flex-col pt-24 z-[1] px-4">
        <motion.h1
          variants={fadeIn("up", 0, 0.7)}
          initial="hidden"
          animate={"show"}
          className="text-xl sm:text-4xl tracking-wider text-center "
        >
          Hi, I am&nbsp;
          <span className="text-myColor font-medium">Sujith Kumar</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.5, 0.7)}
          initial="hidden"
          animate={"show"}
          className="text-sm sm:w-[45rem] sm:text-xl text-center tracking-wider mt-6 mb-12 lg:mb-6"
        >
          Passionate &nbsp;
          <span className="text-myColor font-medium">{typeEffect}</span>
          &nbsp; crafting innovative digital experiences with a blend of elegant
          design and cutting-edge technology.
        </motion.p>
        <motion.button
          variants={fadeIn("up", 1, 0.7)}
          initial="hidden"
          animate={"show"}
        >
          <a
            href="/Users/sujithkumaravel/IdeaProjects/My_P0rtf0li0/file/new_resume.pdf"
            target="_blank"
            className="bg-myColor rounded px-4 py-2 text-black lg:hidden"
          >
            View Resume <i className="fa-solid fa-download text-black ml-2"></i>
          </a>
        </motion.button>
        <motion.ul
          variants={fadeIn("up", 1, 0.7)}
          initial="hidden"
          whileInView={"show"}
          className="flex gap-[2rem] mx-auto mt-20"
        >
          {socials.map((social) => {
            return (
              <li key={social.link}>
                <a
                  href={social.link}
                  target="_blank"
                  className="bg-[#CDCDCD] cursor-pointer px-[10px] py-[5px] sm:text-2xl rounded-full"
                >
                  {social.icon}
                </a>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
