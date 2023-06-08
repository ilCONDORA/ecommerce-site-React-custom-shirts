import React, { useState, useEffect } from "react";
import "./favourites.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { GoTrashcan } from "react-icons/go";
import { useLiveItems } from "../../App";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

//men tees
import Men1 from "../../assets/img/products-img/men/eren-bluexcf.png";
import Men2 from "../../assets/img/products-img/men/jojo-white.png";
import Men3 from "../../assets/img/products-img/men/rufi-red.png";
import Men4 from "../../assets/img/products-img/men/assassination-black.png";
import Men5 from "../../assets/img/products-img/men/levi-gray.png";
//kids tees
import Kid1 from "../../assets/img/products-img/kid/vegeta-red.png";
import Kid2 from "../../assets/img/products-img/kid/elle-white.png";
import Kid3 from "../../assets/img/products-img/kid/hunter-black.png";
import Kid4 from "../../assets/img/products-img/kid/myhero-gray.png";
import Kid5 from "../../assets/img/products-img/kid/zoro-blue.png";
//women tees
import Women1 from "../../assets/img/products-img/women/celtics-gray.png";
import Women2 from "../../assets/img/products-img/women/knicks-blue.png";
import Women3 from "../../assets/img/products-img/women/lakers-black.png";
import Women4 from "../../assets/img/products-img/women/memphis-white.png";
import Women5 from "../../assets/img/products-img/women/toronto-black.png";
import TopReminder from "../../components/TopReminder/TopReminder";

const Favourites = () => {
  //states
  const [menImg, setMenImg] = useState();
  const [womenImg, setWomenImg] = useState();
  const [kidsImg, setKidsImg] = useState();
  const [allImg, setAllImg] = useState();
  const [idMenImg, setIdMenImg] = useState(0);
  const [idKidsImg, setIdKidsImg] = useState(0);
  const [idWomenImg, setIdWomenImg] = useState(0);
  const [idAllImg, setIdAllImg] = useState(0);
  const { favs, setFavs } = useLiveItems();

  //functions
  const handleDeleteItem = (array, id) => {
    const newFavourites = array.filter((_item, index) => index !== id);
    setFavs(newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  };

  //images intervals
  useEffect(() => {
    const men = [Men1, Men2, Men3, Men4, Men5];
    setMenImg(men[idMenImg]);
    const interval = setInterval(() => {
      setIdMenImg(idMenImg + 1);
      if (idMenImg > men.length - 2) {
        setIdMenImg(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [idMenImg, menImg]);
  useEffect(() => {
    const kids = [Kid1, Kid2, Kid3, Kid4, Kid5];
    setKidsImg(kids[idKidsImg]);
    const interval = setInterval(() => {
      setIdKidsImg(idKidsImg + 1);
      if (idKidsImg > kids.length - 2) {
        setIdKidsImg(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [idKidsImg, kidsImg]);
  useEffect(() => {
    const women = [Women1, Women2, Women3, Women4, Women5];
    setWomenImg(women[idWomenImg]);
    const interval = setInterval(() => {
      setIdWomenImg(idWomenImg + 1);
      if (idWomenImg > women.length - 2) {
        setIdWomenImg(0);
      }
    }, 700);
    return () => clearInterval(interval);
  }, [idWomenImg, womenImg]);
  useEffect(() => {
    const all = [
      Men1,
      Men2,
      Men3,
      Men4,
      Men5,
      Women1,
      Women2,
      Women3,
      Women4,
      Women5,
      Kid1,
      Kid2,
      Kid3,
      Kid4,
      Kid5,
    ];
    setAllImg(all[idAllImg]);
    const interval = setInterval(() => {
      setIdAllImg(idAllImg + 1);
      if (idAllImg > all.length - 2) {
        setIdAllImg(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [idAllImg, allImg]);

  return (
    <section className="favourites">
      <Navbar />
      <div className="favourites-container">
        <TopReminder />
        {favs === undefined || favs.length === 0 ? (
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            className="if-empty"
          >
            <div className="if-empty-title">
              <h1>You haven't a favourite product yet.</h1>
            </div>
            <div className="if-empty-products-reminder">
              <div className="if-empty-products-images">
                <img src={menImg} alt="men-products" id="menImg" />
                <img src={womenImg} alt="women-products" id="womenImg" />
                <img src={kidsImg} alt="kids-products" id="kidsImg" />
                <img src={allImg} alt="kids-products" id="allImg" />
              </div>
            </div>
            <div className="if-empty-products-reminder-button">
              <Link to={"/products"}>
                <button>Go To Shop</button>
              </Link>
            </div>
            <div className="border-bottom"></div>
          </motion.div>
        ) : (
          <div className="if-not-empty">
            <div className="if-not-empty-title">
              <h1>Your favourites products</h1>
            </div>
            <div className="favourites-cards">
              {favs.map((product, index) => {
                return (
                  <div className="favourites-card" key={index}>
                    <div className="favourites-card-img">
                      <img
                        src={product.image || product.finalImage}
                        alt="Your favourite product"
                      />
                    </div>
                    <div className="favourites-card-desc">
                      <h5>{product.title}</h5>
                      <p>Color: {product.color}</p>
                      <p>Size: {product.size}</p>
                      <p>Material: {product.material}</p>
                    </div>
                    <div className="favourites-card-price">
                      <h5>${product.price}</h5>
                      <GoTrashcan
                        className="favs-trash"
                        onClick={() => handleDeleteItem(favs, index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border-bottom"></div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Favourites;
