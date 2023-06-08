import React, { useState } from "react";
import "./customizer.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomizerModal from "../../components/CustomizerModal";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import ManTee from "../../assets/img/tees/man/man-white-front.png";
import WomanTee from "../../assets/img/tees/woman/woman-white-front.png";
import KidTee from "../../assets/img/tees/man/man-white-front.png";
import TopReminder from "../../components/TopReminder/TopReminder";

const Customizer = () => {
  const cards = [
    {
      id: 0,
      img: ManTee,
      desc: "Man",
    },
    {
      id: 1,
      img: WomanTee,
      desc: "Woman",
    },
    {
      id: 2,
      img: KidTee,
      desc: "Kid",
    },
  ];
  const [idButton, setIdButton] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="customizer-container">
      <TopReminder />
      <div className={openModal ? "hidden" : ""}>
        <Navbar />
      </div>
      <div className={openModal ? "hidden" : ""}>
        <div className="custom-slider-container">
          <section className="select">
            <motion.div
              variants={fadeIn("right", "spring", 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              className="select-title"
            >
              <h5>Select the model</h5>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              className="models"
            >
              {cards.map(({ id, img, desc }) => {
                return (
                  <div className="model-card" key={id}>
                    <img
                      src={img}
                      alt={desc}
                      className={id === 2 ? "canvas-sm" : ""}
                    />
                    <div className="model-bottom">
                      <p>{desc}</p>
                      <HiOutlineArrowLongRight
                        className="long-arrow"
                        onClick={() => {
                          setOpenModal(true);
                          setIdButton(id);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </section>
          <div className="border-bottom"></div>
        </div>
      </div>
      <div className={openModal ? "hidden" : ""}>
        <Footer />
      </div>
      <CustomizerModal
        className="modal"
        open={openModal}
        onClose={() => setOpenModal(false)}
        idBtn={idButton}
      />
    </div>
  );
};

export default Customizer;
