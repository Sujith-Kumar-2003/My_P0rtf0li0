/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Contact({ mode }) {
  const dets = [
    {
      id: "1",
      icon: <i className="fa-solid fa-phone"></i>,
      text: "+1 4389797838",
      link: "tel:+1 4389797838",
    },
    {
      id: "2",
      icon: <i className="fa-solid fa-envelope"></i>,
      text: "sujithkumar2003k@gmail.com",
      link: "sujithkumar2003k@gmail.com",
    },
    {
      id: "3",
      icon: <i className="fa-solid fa-location-dot"></i>,
      text: "Montreal, QC",
    },
  ];
  return (
    <section id="Contact" className="lg:px-24 pt-12 pb-6">
      <div className={`${!mode && "text-black"}`}>
        <p className="text-sm opacity-[.5] text-center">GET IN TOUCH</p>
        <h1 className="text-center text-xl">
          Contact <span className="text-myColor">me</span>
        </h1>
        <p className="text-center mb-4 lg:mb-8 mt-4 text-sm px-2 lg:p-0 lg:text-lg">
          I am currently open to full-time, contract or part-time{" "}
          <span className="text-myColor">opportunities</span>
        </p>
      </div>
      <div className="flex flex-col pb-8 px-8 lg:flex-row bg-[#131313] lg:p-20 rounded-lg">
        <motion.div
          variants={fadeIn("up", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="py-4 lg:p-0 lg:w-[50%]"
        >
          <p className="text-lg">Have an Awesome project idea?</p>
          <p className="text-myColor mb-6 lg:mb-10 mt-2 text-lg">
            Let's discuss
          </p>
          <ul>
            {dets.map((det) => {
              const textStyle =
                det.id === "1" || det.id === "2" ? "text-myColor" : "";
              return (
                <li key={det.id} className="mb-[1rem]">
                  <div className="flex items-center gap-2">
                    <p className="text-black bg-[#CDCDCD] rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
                      {det.icon}
                    </p>{" "}
                    <a href={det.link} className={`${textStyle}`}>
                      {det.text}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="lg:w-[50%] flex"
        >
          <form
            action="https://formsubmit.co/sujithkumar2003k@gmail.com"
            method="POST"
            target="_blank"
            className="lg:mx-auto lg:w-[85%]"
          >
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" required placeholder="Enter name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="Enter email" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="8"
              required
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="bg-myColor rounded-lg px-6 py-2 text-black"
            >
              Send Message <i className="fa-regular fa-envelope ml-2"></i>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
