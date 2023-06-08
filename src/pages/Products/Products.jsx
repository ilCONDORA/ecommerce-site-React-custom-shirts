import React from "react";

//sections
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductsCards from "../../components/ProductsCards";
import AddProductCards from "../../components/AddProductCards";

//basic tees
import whiteTeeM from "../../assets/img/tees/men-products/man-tee.png";
import blackTeeM from "../../assets/img/tees/men-products/man-black.png";
import greyTeeM from "../../assets/img/tees/men-products/man-gray.png";
import blueTeeM from "../../assets/img/tees/men-products/man-blue.png";
import redTeeM from "../../assets/img/tees/men-products/man-red.png";

import whiteTeeW from "../../assets/img/tees/woman/woman-white-front.png";
import blackTeeW from "../../assets/img/tees/woman/woman-black-front.png";
import greyTeeW from "../../assets/img/tees/woman/woman-grey-front.png";
import blueTeeW from "../../assets/img/tees/woman/woman-lightblue-front.png";
import redTeeW from "../../assets/img/tees/woman/woman-red-front.png";

import whiteTeeK from "../../assets/img/tees/kids/kid-tee.png";
import blackTeeK from "../../assets/img/tees/kids/kid-black.png";
import greyTeeK from "../../assets/img/tees/kids/kid-gray.png";
import blueTeeK from "../../assets/img/tees/kids/kid-blue.png";
import redTeeK from "../../assets/img/tees/kids/kid-red.png";

// PRODUCTS IMAGES MEN
import leviBlack from "../../assets/img/products-img/men/levi-black.png";
import leviWhite from "../../assets/img/products-img/men/levi-white.png";
import leviRed from "../../assets/img/products-img/men/levi-red.png";
import leviBlue from "../../assets/img/products-img/men/levi-blue.png";
import leviGray from "../../assets/img/products-img/men/levi-gray.png";
import erenWhite from "../../assets/img/products-img/men/eren-white.png";
import erenBlack from "../../assets/img/products-img/men/eren-black.png";
import erenRed from "../../assets/img/products-img/men/eren-red.png";
import erenBlue from "../../assets/img/products-img/men/eren-bluexcf.png";
import erenGray from "../../assets/img/products-img/men/eren-gray.png";
import jojoWhite from "../../assets/img/products-img/men/jojo-white.png";
import jojoBlack from "../../assets/img/products-img/men/jojo-black.png";
import jojoRed from "../../assets/img/products-img/men/jojo-red.png";
import jojoBlue from "../../assets/img/products-img/men/jojo-blue.png";
import jojoGray from "../../assets/img/products-img/men/jojo-gray.png";
import rufiWhite from "../../assets/img/products-img/men/rufi-white.png";
import rufiBlack from "../../assets/img/products-img/men/rufi-black.png";
import rufiRed from "../../assets/img/products-img/men/rufi-red.png";
import rufiBlue from "../../assets/img/products-img/men/rufi-blue.png";
import rufiGray from "../../assets/img/products-img/men/rufi-gray.png";
import assWhite from "../../assets/img/products-img/men/assassination-white.png";
import assBlack from "../../assets/img/products-img/men/assassination-black.png";
import assRed from "../../assets/img/products-img/men/assassination-red.png";
import assBlue from "../../assets/img/products-img/men/assassination-blue.png";
import assGray from "../../assets/img/products-img/men/assassination-gray.png";

// PRODUCTS IMAGES WOMEN
import celticsWhite from "../../assets/img/products-img/women/celtics-white.png";
import celticsBlack from "../../assets/img/products-img/women/celtics-black.png";
import celticsRed from "../../assets/img/products-img/women/celtics-red.png";
import celticsBlue from "../../assets/img/products-img/women/celtics-blue.png";
import celticsGray from "../../assets/img/products-img/women/celtics-gray.png";
import knicksWhite from "../../assets/img/products-img/women/knicks-white.png";
import knicksBlack from "../../assets/img/products-img/women/knicks-black.png";
import knicksRed from "../../assets/img/products-img/women/knicks-red.png";
import knicksBlue from "../../assets/img/products-img/women/knicks-blue.png";
import knicksGray from "../../assets/img/products-img/women/knicks-gray.png";
import torontoWhite from "../../assets/img/products-img/women/toronto-white.png";
import torontoBlack from "../../assets/img/products-img/women/toronto-black.png";
import torontoRed from "../../assets/img/products-img/women/toronto-red.png";
import torontoBlue from "../../assets/img/products-img/women/toronto-blue.png";
import torontoGray from "../../assets/img/products-img/women/toronto-gray.png";
import memphisWhite from "../../assets/img/products-img/women/memphis-white.png";
import memphisBlack from "../../assets/img/products-img/women/memphis-black.png";
import memphisRed from "../../assets/img/products-img/women/memphis-red.png";
import memphisBlue from "../../assets/img/products-img/women/memphis-blue.png";
import memphisGray from "../../assets/img/products-img/women/memphis-gray.png";
import lakersWhite from "../../assets/img/products-img/women/lakers-white.png";
import lakersBlack from "../../assets/img/products-img/women/lakers-black.png";
import lakersRed from "../../assets/img/products-img/women/lakers-red.png";
import lakersBlue from "../../assets/img/products-img/women/lakers-blue.png";
import lakersGray from "../../assets/img/products-img/women/lakers-gray.png";

// PRODUCTS IMAGES KID
import elleWhite from "../../assets/img/products-img/kid/elle-white.png";
import elleBlack from "../../assets/img/products-img/kid/elle-black.png";
import elleRed from "../../assets/img/products-img/kid/elle-red.png";
import elleBlue from "../../assets/img/products-img/kid/elle-blue.png";
import elleGray from "../../assets/img/products-img/kid/elle-gray.png";
import hunterWhite from "../../assets/img/products-img/kid/hunter-white.png";
import hunterBlack from "../../assets/img/products-img/kid/hunter-black.png";
import hunterRed from "../../assets/img/products-img/kid/hunter-red.png";
import hunterBlue from "../../assets/img/products-img/kid/hunter-blue.png";
import hunterGray from "../../assets/img/products-img/kid/hunter-gray.png";
import myheroWhite from "../../assets/img/products-img/kid/myhero-white.png";
import myheroBlack from "../../assets/img/products-img/kid/myhero-black.png";
import myheroRed from "../../assets/img/products-img/kid/myhero-red.png";
import myheroBlue from "../../assets/img/products-img/kid/myhero-blue.png";
import myheroGray from "../../assets/img/products-img/kid/myhero-gray.png";
import vegetaWhite from "../../assets/img/products-img/kid/vegeta-white.png";
import vegetaBlack from "../../assets/img/products-img/kid/vegeta-black.png";
import vegetaRed from "../../assets/img/products-img/kid/vegeta-red.png";
import vegetaBlue from "../../assets/img/products-img/kid/vegeta-blue.png";
import vegetaGray from "../../assets/img/products-img/kid/vegeta-gray.png";
import zoroWhite from "../../assets/img/products-img/kid/zoro-white.png";
import zoroBlack from "../../assets/img/products-img/kid/zoro-black.png";
import zoroRed from "../../assets/img/products-img/kid/zoro-red.png";
import zoroBlue from "../../assets/img/products-img/kid/zoro-blue.png";
import zoroGray from "../../assets/img/products-img/kid/zoro-gray.png";
import TopReminder from "../../components/TopReminder/TopReminder";

const Products = () => {
  let newProduct = JSON.parse(localStorage.getItem("newProducts")) || [];
  return (
    <>
      <TopReminder />
      <Navbar />
      <div className="men">
        <h1>Men</h1>
      </div>
      <div className="product-container">
        {/* MEN */}
        <ProductsCards
          id={"1"}
          whiteTee={leviWhite}
          blackTee={leviBlack}
          redTee={leviRed}
          blueTee={leviBlue}
          grayTee={leviGray}
          title="Levi Attack On Titan"
          // price={price}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"2"}
          whiteTee={erenWhite}
          blackTee={erenBlack}
          redTee={erenRed}
          blueTee={erenBlue}
          grayTee={erenGray}
          title="Eren Attack On Titan"
          // price={price}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"3"}
          whiteTee={jojoWhite}
          blackTee={jojoBlack}
          redTee={jojoRed}
          blueTee={jojoBlue}
          grayTee={jojoGray}
          title="Jojo's Adventure"
          // price={19.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"4"}
          whiteTee={rufiWhite}
          blackTee={rufiBlack}
          redTee={rufiRed}
          blueTee={rufiBlue}
          grayTee={rufiGray}
          title="Rufi"
          // price={19.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"5"}
          whiteTee={assWhite}
          blackTee={assBlack}
          redTee={assRed}
          blueTee={assBlue}
          grayTee={assGray}
          title="Assassination"
          // price={19.99}
          quantity={1}
          itemTotal={0}
        />
        {newProduct
          .filter((img) => img.category === "men")
          .map((img, imgidx) => {
            let nid = imgidx.toString() + "01";
            return (
              <AddProductCards
                id={nid}
                whiteTee={whiteTeeM}
                blackTee={blackTeeM}
                redTee={redTeeM}
                blueTee={blueTeeM}
                grayTee={greyTeeM}
                adminImage={img.productImage}
                title={img.name}
                quantity={1}
                itemTotal={0}
              />
            );
          })}
      </div>

      <div className="women">
        <h1>Women</h1>
      </div>

      <div className="product-container">
        <ProductsCards
          id={"6"}
          whiteTee={celticsWhite}
          blackTee={celticsBlack}
          redTee={celticsRed}
          blueTee={celticsBlue}
          grayTee={celticsGray}
          title="Celtics Boston"
          // price={24.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"7"}
          whiteTee={torontoWhite}
          blackTee={torontoBlack}
          redTee={torontoRed}
          blueTee={torontoBlue}
          grayTee={torontoGray}
          title="Toronto Raptors"
          // price={24.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"8"}
          whiteTee={lakersWhite}
          blackTee={lakersBlack}
          redTee={lakersRed}
          blueTee={lakersBlue}
          grayTee={lakersGray}
          title="LA Lakers"
          // price={24.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"9"}
          whiteTee={memphisWhite}
          blackTee={memphisBlack}
          redTee={memphisRed}
          blueTee={memphisBlue}
          grayTee={memphisGray}
          title="Memphis Grizzlies"
          // price={24.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"10"}
          whiteTee={knicksWhite}
          blackTee={knicksBlack}
          redTee={knicksRed}
          blueTee={knicksBlue}
          grayTee={knicksGray}
          title="Knicks"
          // price={24.99}
          quantity={1}
          itemTotal={0}
        />
        {newProduct
          .filter((img) => img.category === "woman")
          .map((img, imgidx) => {
            let nid = imgidx.toString() + "02";
            return (
              <AddProductCards
                id={nid}
                whiteTee={whiteTeeW}
                blackTee={blackTeeW}
                redTee={redTeeW}
                blueTee={blueTeeW}
                grayTee={greyTeeW}
                adminImage={img.productImage}
                title={img.name}
                quantity={1}
                itemTotal={0}
              />
            );
          })}
      </div>

      <div className="kid">
        <h1>Kids</h1>
      </div>

      <div className="product-container">
        <ProductsCards
          id={"11"}
          whiteTee={elleWhite}
          blackTee={elleBlack}
          redTee={elleRed}
          blueTee={elleBlue}
          grayTee={elleGray}
          title="Elle"
          // price={14.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"12"}
          whiteTee={hunterWhite}
          blackTee={hunterBlack}
          redTee={hunterRed}
          blueTee={hunterBlue}
          grayTee={hunterGray}
          title="Hunter"
          // price={14.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"13"}
          whiteTee={myheroWhite}
          blackTee={myheroBlack}
          redTee={myheroRed}
          blueTee={myheroBlue}
          grayTee={myheroGray}
          title="My Hero"
          // price={14.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"14"}
          whiteTee={vegetaWhite}
          blackTee={vegetaBlack}
          redTee={vegetaRed}
          blueTee={vegetaBlue}
          grayTee={vegetaGray}
          title="Vegeta"
          // price={14.99}
          quantity={1}
          itemTotal={0}
        />

        <ProductsCards
          id={"15"}
          whiteTee={zoroWhite}
          blackTee={zoroBlack}
          redTee={zoroRed}
          blueTee={zoroBlue}
          grayTee={zoroGray}
          title="Zoro"
          // price={14.99}
          quantity={1}
          itemTotal={0}
        />
        {newProduct
          .filter((img) => img.category === "kids")
          .map((img, imgidx) => {
            let nid = imgidx.toString() + "03";
            return (
              <AddProductCards
                id={nid}
                whiteTee={whiteTeeK}
                blackTee={blackTeeK}
                redTee={redTeeK}
                blueTee={blueTeeK}
                grayTee={greyTeeK}
                adminImage={img.productImage}
                title={img.name}
                quantity={1}
                itemTotal={0}
              />
            );
          })}
      </div>

      <Footer />
    </>
  );
};

export default Products;
