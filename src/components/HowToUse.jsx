import React from "react";
import "../pages/Home/home.css";
import firstStep from "../assets/img/how-to-2.jpg";
import secondStep from "../assets/img/how-to-1.jpg";
import lastStep from "../assets/img/how-to-3.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const HowToUse = () => {
  const data = [
    {
      img: firstStep,
      alt: "how-to-use",
      desc: "Click on Customizer at the top of the page.",
    },
    {
      img: secondStep,
      alt: "how-to-use",
      desc: "Choose the model and material that you want.",
    },
    {
      img: lastStep,
      alt: "how-to-use",
      desc: "Now have fun creating your personal tee.",
    },
  ];
  return (
    <section className="how-to-use-container" id="how-to-use">
      <motion.h1
        variants={fadeIn("left", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
      >
        How To Use
      </motion.h1>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="cards"
      >
        {data.map(({ img, alt, desc }) => {
          return (
            <div className="card" key={img}>
              <img src={img} alt={alt} />
              <p>{desc}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default HowToUse;
