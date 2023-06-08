import React, { useEffect } from "react";
import "./home.css";

//sections
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero";
import HowToUse from "../../components/HowToUse";
import ProductsSlider from "../../components/ProductsSlider";
import Footer from "../../components/Footer/Footer";
import RecallToAction from "../../components/RecallToAction";
import { useLiveItems } from "../../App";
import TopReminder from "../../components/TopReminder/TopReminder";

const Home = () => {
  const prova = JSON.parse(localStorage.getItem("cartItems")) || [];
  const { setLiveItems } = useLiveItems();
  useEffect(() => {
    setLiveItems(prova.length);
  });
  return (
    <div>
      <TopReminder />
      <Navbar />
      <Hero />
      <HowToUse />
      <ProductsSlider />
      <RecallToAction />
      <Footer />
    </div>
  );
};

export default Home;
