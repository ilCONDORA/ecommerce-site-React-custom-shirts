import React from "react";
import "../pages/Home/home.css";
import Tee from "../assets/img/man-tee.png";
import { HiArrowLongRight } from "react-icons/hi2";
import TeeSlider from "./TeeSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          className="title"
        >
          <h1>YOUR STYLE IS A YOUR CHOICE.</h1>
          <h5>
            The right outfit can makes feel you comfortable with yourself. GOSC
            was started from this concept, then we matched it with eco-friendly
            and high quality materials.
          </h5>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          className="cta"
        >
          <Link to={"/customizer"}>
            <button>
              Customize now <HiArrowLongRight className="right-arrow" />
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="right">
        <motion.img
          src={Tee}
          alt=""
          variants={fadeIn("left", "spring", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
        />
        <TeeSlider />
      </div>
    </section>
  );
};

export default Hero;
