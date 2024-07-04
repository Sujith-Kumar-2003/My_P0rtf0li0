/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function About({ mode }) {
  return (
      <section id="About" className={`${!mode && "text-black"} py-6`}>
        <p className="text-center text-sm opacity-[.5]">MY BIO</p>
        <h1 className="text-center text-xl">
          About <span className="text-myColor">Me</span>
        </h1>
        <div className="sm:flex sm:py-6 sm:px-6 gap-2 sm:items-start">
          <motion.div
              variants={fadeIn("right", 0, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="left flex py-6 sm:py-0 lg:w-[50%]"
          >
            <div className="m-auto border-[2px] border-solid border-myColor relative rounded-full w-max p-6">
              <img
                  src="../../images/profilePic.jpeg"
                  alt=""
                  className="rounded-full w-[15rem] lg:w-[25rem] border-[2px] border-solid border-myColor"
              />
              <motion.img
                  variants={fadeIn("right", 0.5, 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  src="../../images/progIcons/js.webp"
                  alt=""
                  className="icon top-2 left-10 lg:top-6 lg:left-20"
              />
              <motion.img
                  variants={fadeIn("right", 0.5, 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  src="../../images/progIcons/redux.webp"
                  alt=""
                  className="icon bottom-10 lg:bottom-20"
              />
              <motion.img
                  variants={fadeIn("left", 0.5, 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  src="../../images/progIcons/react.webp"
                  alt=""
                  className="icon right-2 top-10 lg:right-6 lg:top-20"
              />
              <motion.img
                  variants={fadeIn("left", 0.5, 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  src="../../images/progIcons/mango.webp"
                  alt=""
                  className="icon right-0 bottom-10 lg:right-4 lg:bottom-20"
              />
            </div>
          </motion.div>
          <motion.div
              variants={fadeIn("left", 0, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="right flex flex-col gap-6 items-start px-6 lg:w-[50%] lg:px-20 mx-auto"
          >
            <div className="opacity-[.7] text-sm flex flex-col gap-4 lg:text-base">
              <p>
                Greetings! I'm
                <span className="text-myColor font-medium"> Sujith Kumar</span>, a
                seasoned software engineer and Front End Developer driven by the
                pursuit of crafting immersive digital experiences. Pursuing a Masters
                degree in
                <span className="text-myColor font-medium"> Applied Computer Science (MACS) </span>
                from
                <span className="text-myColor font-medium"> Concordia University.</span>
                My journey into technology began, fueled by an innate curiosity
                for coding and problem solving. When I see something, I just think about the logic behind it and how to code it.
              </p>
              <p>
                In the realm of software development, I specialize in
                <span className="text-myColor font-medium"> Python</span>, adept
                at transforming conceptual ideas into robust, user-centric
                solutions. Concurrently, my passion for
                <span className="text-myColor font-medium"> UI FrontEnd-Development</span>
                stems from a belief in the power of aesthetics to elevate
                functionality, creating interfaces that resonate with users on a
                profound level.
              </p>
              <p>
                Beyond the screen, I find inspiration in
                <span className="text-myColor font-medium"> Development</span>. Whether
                it's exploring the latest tech trends or immersing myself in
                nature, I'm always seeking new sources of creativity and
                innovation.
              </p>
            </div>
            <button>
              <a
                  href="https://sujith-kumar-2003.github.io/file/Resume_Updated_Software_Developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-myColor rounded px-4 py-2 text-black"
              >
                View Resume
                <i className="fa-solid fa-download text-black ml-2"></i>
              </a>
            </button>
          </motion.div>
        </div>
      </section>
  );
}
