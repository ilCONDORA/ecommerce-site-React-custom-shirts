import React from "react";
import { useState, useEffect } from "react";
import "./BurgerModal.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Link, useNavigate } from "react-router-dom";

const BurgerModal = () => {
  const navigate = useNavigate();
  const linkStyle = {
    textDecoration: "none",
    color: "#9370db",
  };
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isActive ? "hidden" : "auto";
    }
  }, [isActive]);

  return (
    <>
      <div
        className={`toggle ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`brg-bg ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          className="links"
        >
          <Link to={"/customizer"} style={linkStyle}>
            Customizer
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          className="links"
        >
          <Link to={"/products"} style={linkStyle}>
            Our Products
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.4, 0.5)}
          initial="hidden"
          whileInView="show"
          className="links"
        >
          <a
            href="#how-to-use"
            style={linkStyle}
            onClick={() => {
              navigate("/#how-to-use");
            }}
          >
            How To Use
          </a>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="links"
        >
          <Link to={"/favourites"} style={linkStyle}>
            Favourites
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.6, 0.5)}
          initial="hidden"
          whileInView="show"
          className="links"
        >
          <li>About</li>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.5)}
          initial="hidden"
          whileInView="show"
          className="links"
        >
          <li>Support</li>
        </motion.div>
      </div>
    </>
  );
};
export default BurgerModal;
