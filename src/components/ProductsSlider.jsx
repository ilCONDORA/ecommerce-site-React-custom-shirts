import React from "react";
import "../pages/Home/home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rufi from "../assets/img/products-img/men/rufi-black.png";
import Jojo from "../assets/img/products-img/men/jojo-white.png";
import Celtics from "../assets/img/products-img/women/celtics-gray.png";
import Knicks from "../assets/img/products-img/women/knicks-blue.png";
import Toronto from "../assets/img/products-img/women/toronto-red.png";
import Hunter from "../assets/img/products-img/kid/hunter-black.png";
import Zoro from "../assets/img/products-img/kid/zoro-white.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProductsSlider = () => {
  const data = [
    {
      id: 1,
      img: Rufi,
      name: "Rufi",
    },
    {
      id: 2,
      img: Jojo,
      name: "Jojo's Adventure",
    },
    {
      id: 3,
      img: Celtics,
      name: "Boston Celtics",
    },
    {
      id: 4,
      img: Knicks,
      name: "NY Knicks",
    },
    {
      id: 5,
      img: Toronto,
      name: "Toronto Raptors",
    },
    {
      id: 6,
      img: Hunter,
      name: "HunterXHunter",
    },
    {
      id: 7,
      img: Zoro,
      name: "Zoro",
    },
  ];
  return (
    <section className="products-slider">
      <motion.h1
        variants={fadeIn("right", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
      >
        Our Products
      </motion.h1>
      <Swiper
        modules={[Pagination]}
        loop={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 90,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 90,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 70,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="slider"
        style={{
          "--swiper-pagination-color": "var(--color-primary)",
          "--swiper-pagination-bullet-inactive-color": "rgb(255,255,255,.6)",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "8px",
        }}
      >
        <>
          {data.map(({ id, img, name, price }) => {
            return (
              <SwiperSlide key={id} className="slider-card">
                <Link to={"/products"}>
                  <motion.img
                    src={img}
                    alt="Our products"
                    variants={fadeIn("down", "spring", 0.5, 1)}
                    initial="hidden"
                    whileInView="show"
                  />
                </Link>
                <p>{name}</p>
                <h5>{price}</h5>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </section>
  );
};

export default ProductsSlider;
