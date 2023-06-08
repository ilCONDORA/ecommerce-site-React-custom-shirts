import React, { useState, useEffect } from "react";
import "../pages/Home/home.css";
import Eren from "../assets/img/tee-slider-images/attack.png";
import Assassination from "../assets/img/tee-slider-images/assassination.png";
import Hero from "../assets/img/tee-slider-images/my-hero.png";
import Elle from "../assets/img/tee-slider-images/elle.png";
import Rufi from "../assets/img/tee-slider-images/rufi.png";
import Jojo from "../assets/img/tee-slider-images/jojo.png";
import Levi from "../assets/img/tee-slider-images/levi.png";
import Css from "../assets/img/logos/css.svg";
import Motion from "../assets/img/logos/framermotion.svg";
import Html from "../assets/img/logos/html5.svg";
import Mysql from "../assets/img/logos/mysql.svg";
import Node from "../assets/img/logos/nodejs.svg";
import ReactJS from "../assets/img/logos/reactjs.svg";
import Atl from "../assets/img/logos/nbaLogos/atl.png";
import Bucks from "../assets/img/logos/nbaLogos/bucks.png";
import Orlando from "../assets/img/logos/nbaLogos/orlando.png";
import Sixers from "../assets/img/logos/nbaLogos/sixers.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TeeSlider = () => {
  const [image, setImage] = useState();
  const [idImg, setIdImg] = useState(0);

  useEffect(() => {
    const images = [
      Atl,
      Bucks,
      Orlando,
      Sixers,
      Eren,
      Assassination,
      Hero,
      Elle,
      Rufi,
      Jojo,
      Levi,
      Css,
      Motion,
      Html,
      Mysql,
      Node,
      ReactJS,
    ];
    setImage(images[idImg]);
    const interval = setInterval(() => {
      setIdImg(idImg + 1);
      if (idImg > images.length - 2) {
        setIdImg(0);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [idImg, image]);

  return (
    <div className="tee-slider-container">
      <div className="tee-slide">
        <motion.img
          src={image}
          alt=""
          variants={fadeIn("up", "spring", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
        />
      </div>
    </div>
  );
};

export default TeeSlider;
