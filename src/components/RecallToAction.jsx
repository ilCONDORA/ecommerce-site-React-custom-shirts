import React from "react";
import "../pages/Home/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const RecallToAction = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "transparent",
    WebkitTextStroke: "0.7px white",
  };
  return (
    <section className="vision-container">
      <div className="rta">
        <motion.h1
          variants={fadeIn("right", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <Link to={"/customizer"} style={linkStyle}>
            CUSTOMIZE NOW
          </Link>
        </motion.h1>
      </div>
    </section>
  );
};

export default RecallToAction;
