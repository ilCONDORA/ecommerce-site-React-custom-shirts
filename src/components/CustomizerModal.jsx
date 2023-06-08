import React, { useState, useEffect } from "react";
import "../pages/Customizer/customizer.css";
import { AiOutlineClose } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { BsPlusLg } from "react-icons/bs";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import Select from "react-dropdown-select";
import { BsFront } from "react-icons/bs";
import { BsBack } from "react-icons/bs";
import { GoArrowSmallUp } from "react-icons/go";
import { GoArrowSmallDown } from "react-icons/go";
import { GoArrowSmallLeft } from "react-icons/go";
import { GoArrowSmallRight } from "react-icons/go";
import ScrollToTop from "../utils/scrollToTop";

// import man tees
import ManTee from "../assets/img/tees/man/man-white-front.png";
import ManBackTee from "../assets/img/tees/man/man-white-back.png";
import ManGrey from "../assets/img/tees/man/man-grey-front.png";
import ManGreyBack from "../assets/img/tees/man/man-grey-back.png";
import ManBlack from "../assets/img/tees/man/man-black-front.png";
import ManBlackBack from "../assets/img/tees/man/man-black-back.png";
import ManLightblue from "../assets/img/tees/man/man-lightblue-front.png";
import ManLightblueBack from "../assets/img/tees/man/man-lightblue-back.png";
import ManRoyalblue from "../assets/img/tees/man/man-royalblue-front.png";
import ManRoyalblueBack from "../assets/img/tees/man/man-royalblue-back.png";
import ManPurple from "../assets/img/tees/man/man-purple-front.png";
import ManPurpleBack from "../assets/img/tees/man/man-purple-back.png";
import ManGreen from "../assets/img/tees/man/man-green-front.png";
import ManGreenBack from "../assets/img/tees/man/man-green-back.png";
import ManYellow from "../assets/img/tees/man/man-yellow-front.png";
import ManYellowBack from "../assets/img/tees/man/man-yellow-back.png";
import ManRed from "../assets/img/tees/man/man-red-front.png";
import ManRedBack from "../assets/img/tees/man/man-red-back.png";

// import woman tees
import WomanTee from "../assets/img/tees/woman/woman-white-front.png";
import WomanBackTee from "../assets/img/tees/woman/woman-white-back.png";
import WomanGrey from "../assets/img/tees/woman/woman-grey-front.png";
import WomanGreyBack from "../assets/img/tees/woman/woman-grey-back.png";
import WomanBlack from "../assets/img/tees/woman/woman-black-front.png";
import WomanBlackBack from "../assets/img/tees/woman/woman-black-back.png";
import WomanRed from "../assets/img/tees/woman/woman-red-front.png";
import WomanRedBack from "../assets/img/tees/woman/woman-red-back.png";
import WomanLightblue from "../assets/img/tees/woman/woman-lightblue-front.png";
import WomanLightblueBack from "../assets/img/tees/woman/woman-lightblue-back.png";
import WomanRoyalblue from "../assets/img/tees/woman/woman-royalblue-front.png";
import WomanRoyalblueBack from "../assets/img/tees/woman/woman-royalblue-back.png";
import WomanPurple from "../assets/img/tees/woman/woman-purple-front.png";
import WomanPurpleBack from "../assets/img/tees/woman/woman-purple-back.png";
import WomanYellow from "../assets/img/tees/woman/woman-yellow-front.png";
import WomanYellowBack from "../assets/img/tees/woman/woman-yellow-back.png";
import WomanGreen from "../assets/img/tees/woman/woman-green-front.png";
import WomanGreenBack from "../assets/img/tees/woman/woman-green-back.png";
import HelpModal from "./HelpModal";
import AlertBox from "./AlertBox";
import { useLiveItems } from "../App";

const CustomizerModal = ({ open, onClose, idBtn }) => {
  //states
  const [xs, setXS] = useState(false);
  const [s, setS] = useState(false);
  const [m, setM] = useState(false);
  const [l, setL] = useState(false);
  const [xl, setXL] = useState(false);
  const [sizeData, setSizeData] = useState("");
  const [sideData, setSideData] = useState("");
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
  const [image, setImage] = useState("");
  const [idCol, setIdCol] = useState("white");
  const [file, setFile] = useState("");
  const [frontFile, setFrontFile] = useState(false);
  const [backFile, setBackFile] = useState(false);
  const [translateXFront, setTranslateXFront] = useState(0);
  const [translateYFront, setTranslateYFront] = useState(0);
  const [translateXBack, setTranslateXBack] = useState(0);
  const [translateYBack, setTranslateYBack] = useState(0);
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState(0);
  const [idItem, setIdItem] = useState(0);
  const [alert, setAlert] = useState(false);
  const { setLiveItems } = useLiveItems();

  //functions
  const clearAllSizes = () => {
    setXS(false);
    setS(false);
    setM(false);
    setL(false);
    setXL(false);
  };
  const clearAllPositions = () => {
    setFront(false);
    setBack(false);
  };
  const selectedSize = (idSize) => {
    clearAllSizes();
    if (idSize === "xs") {
      setXS(true);
    } else if (idSize === "s") {
      setS(true);
    } else if (idSize === "m") {
      setM(true);
    } else if (idSize === "l") {
      setL(true);
    } else {
      setXL(true);
    }
  };
  const selectedPosition = (idPos) => {
    clearAllPositions();
    if (idPos === "front") {
      setFront(true);
    } else {
      setBack(true);
    }
  };
  const setImg = () => {
    if (front && (idBtn === 0 || idBtn === 2) && idCol === "white") {
      setImage(ManTee);
    } else if (!front && (idBtn === 0 || idBtn === 2) && idCol === "white") {
      setImage(ManBackTee);
    } else if (front && (idBtn === 0 || idBtn === 2) && idCol === "black") {
      setImage(ManBlack);
    } else if (!front && (idBtn === 0 || idBtn === 2) && idCol === "black") {
      setImage(ManBlackBack);
    } else if (front && (idBtn === 0 || idBtn === 2) && idCol === "grey") {
      setImage(ManGrey);
    } else if (!front && (idBtn === 0 || idBtn === 2) && idCol === "grey") {
      setImage(ManGreyBack);
    } else if (front && (idBtn === 0 || idBtn === 2) && idCol === "lightblue") {
      setImage(ManLightblue);
    } else if (
      !front &&
      (idBtn === 0 || idBtn === 2) &&
      idCol === "lightblue"
    ) {
      setImage(ManLightblueBack);
    } else if (front && (idBtn === 0 || idBtn === 2) && idCol === "royalblue") {
      setImage(ManRoyalblue);
    } else if (
      !front &&
      (idBtn === 0 || idBtn === 2) &&
      idCol === "royalblue"
    ) {
      setImage(ManRoyalblueBack);
    } else if (front && (idBtn === 0 || idBtn === 2) && idCol === "purple") {
      setImage(ManPurple);
    } else if (!front && (idBtn === 0 || idBtn === 2) && idCol === "purple") {
      setImage(ManPurpleBack);
    } else if (front && (idBtn === 0 || idBtn === 2) && idCol === "green") {
      setImage(ManGreen);
    } else if (!front && (idBtn === 0 || idBtn === 2) && idCol === "green") {
      setImage(ManGreenBack);
    } else if (front && (idBtn === 0 || idBtn === 2) && idCol === "yellow") {
      setImage(ManYellow);
    } else if (!front && (idBtn === 0 || idBtn === 2) && idCol === "yellow") {
      setImage(ManYellowBack);
    } else if (front && (idBtn === 0 || idBtn === 2) && idCol === "red") {
      setImage(ManRed);
    } else if (!front && (idBtn === 0 || idBtn === 2) && idCol === "red") {
      setImage(ManRedBack);
    } else if (front && idBtn === 1 && idCol === "white") {
      setImage(WomanTee);
    } else if (!front && idBtn === 1 && idCol === "white") {
      setImage(WomanBackTee);
    } else if (front && idBtn === 1 && idCol === "grey") {
      setImage(WomanGrey);
    } else if (!front && idBtn === 1 && idCol === "grey") {
      setImage(WomanGreyBack);
    } else if (front && idBtn === 1 && idCol === "black") {
      setImage(WomanBlack);
    } else if (!front && idBtn === 1 && idCol === "black") {
      setImage(WomanBlackBack);
    } else if (front && idBtn === 1 && idCol === "red") {
      setImage(WomanRed);
    } else if (!front && idBtn === 1 && idCol === "red") {
      setImage(WomanRedBack);
    } else if (front && idBtn === 1 && idCol === "lightblue") {
      setImage(WomanLightblue);
    } else if (!front && idBtn === 1 && idCol === "lightblue") {
      setImage(WomanLightblueBack);
    } else if (front && idBtn === 1 && idCol === "royalblue") {
      setImage(WomanRoyalblue);
    } else if (!front && idBtn === 1 && idCol === "royalblue") {
      setImage(WomanRoyalblueBack);
    } else if (front && idBtn === 1 && idCol === "purple") {
      setImage(WomanPurple);
    } else if (!front && idBtn === 1 && idCol === "purple") {
      setImage(WomanPurpleBack);
    } else if (front && idBtn === 1 && idCol === "yellow") {
      setImage(WomanYellow);
    } else if (!front && idBtn === 1 && idCol === "yellow") {
      setImage(WomanYellowBack);
    } else if (front && idBtn === 1 && idCol === "green") {
      setImage(WomanGreen);
    } else if (!front && idBtn === 1 && idCol === "green") {
      setImage(WomanGreenBack);
    }
  };
  const handleContent = (e) => {
    const content = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(content);
    reader.onload = () => {
      setFile(reader.result);
    };
  };
  const moveImg = (idDir) => {
    if (idDir === "left" && frontFile && front) {
      setTranslateXFront(translateXFront - 3);
    } else if (idDir === "up" && frontFile && front) {
      setTranslateYFront(translateYFront - 3);
    } else if (idDir === "down" && frontFile && front) {
      setTranslateYFront(translateYFront + 3);
    } else if (idDir === "right" && frontFile && front) {
      setTranslateXFront(translateXFront + 3);
    } else if (idDir === "left" && backFile && !front) {
      setTranslateXBack(translateXBack - 3);
    } else if (idDir === "up" && backFile && !front) {
      setTranslateYBack(translateYBack - 3);
    } else if (idDir === "down" && backFile && !front) {
      setTranslateYBack(translateYBack + 3);
    } else if (idDir === "right" && backFile && !front) {
      setTranslateXBack(translateXBack + 3);
    }
    if (idBtn === 0 && translateXFront < -6) {
      setTranslateXFront(-6);
    } else if (idBtn === 0 && translateXFront > 12) {
      setTranslateXFront(12);
    } else if (idBtn === 0 && translateYFront < -15) {
      setTranslateYFront(-15);
    } else if (idBtn === 0 && translateYFront > 147) {
      setTranslateYFront(147);
    } else if (idBtn === 1 && translateXFront < -6) {
      setTranslateXFront(-6);
    } else if (idBtn === 1 && translateXFront > 15) {
      setTranslateXFront(15);
    } else if (idBtn === 1 && translateYFront < -12 && front) {
      setTranslateYFront(-12);
    } else if (idBtn === 1 && translateYFront < -3 && !front) {
      setTranslateYFront(-3);
    } else if (idBtn === 1 && translateYFront > 144) {
      setTranslateYFront(144);
    } else if (idBtn === 2 && translateXFront < -12) {
      setTranslateXFront(-12);
    } else if (idBtn === 2 && translateXFront > 12) {
      setTranslateXFront(12);
    } else if (idBtn === 2 && translateYFront < -6) {
      setTranslateYFront(-6);
    } else if (idBtn === 2 && translateYFront > 96) {
      setTranslateYFront(96);
    } else if (idBtn === 0 && translateXBack < -6) {
      setTranslateXBack(-6);
    } else if (idBtn === 0 && translateXBack > 12) {
      setTranslateXBack(12);
    } else if (idBtn === 0 && translateYBack < -15) {
      setTranslateYBack(-15);
    } else if (idBtn === 0 && translateYBack > 147) {
      setTranslateYBack(147);
    } else if (idBtn === 1 && translateXBack < -6) {
      setTranslateXBack(-6);
    } else if (idBtn === 1 && translateXBack > 15) {
      setTranslateXBack(15);
    } else if (idBtn === 1 && translateYBack < -12 && front) {
      setTranslateYBack(-12);
    } else if (idBtn === 1 && translateYBack < -3 && !front) {
      setTranslateYBack(-3);
    } else if (idBtn === 1 && translateYBack > 144) {
      setTranslateYBack(144);
    } else if (idBtn === 2 && translateXBack < -6) {
      setTranslateXBack(-6);
    } else if (idBtn === 2 && translateXBack > 6) {
      setTranslateXBack(6);
    } else if (idBtn === 2 && translateYBack < -6) {
      setTranslateYBack(-6);
    } else if (idBtn === 2 && translateYBack > 96) {
      setTranslateYBack(96);
    }
  };
  const setSide = () => {
    if (frontFile && !backFile) {
      setSideData("Only on the frontside");
    } else if (!frontFile && backFile) {
      setSideData("Only on the backside");
    } else if (frontFile && backFile) {
      setSideData("On both sides");
    }
  };
  let quantity = 1;
  const setData = () => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    const article = {
      id: idItem.toString(),
      image: image,
      color: idCol,
      size: sizeData,
      customImage: file,
      side: sideData,
      positionFront: `X: ${translateXFront}, Y: ${translateYFront}`,
      positionBack: `X: ${translateXBack}, Y: ${translateYBack}`,
      material: material,
      price: price,
      quantity: quantity,
      itemTotal: quantity * price,
      title: "Custom Tee",
    };
    items.push(article);
    for (let i = 0; i < items.length; i++) {
      setIdItem(idItem + 1);
    }
    if (
      file &&
      (frontFile || backFile) &&
      (xs || s || m || l || xl) &&
      material
    ) {
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
    setLiveItems(items.length);
  };
  const handleChange = (value) => {
    setMaterial(value[0].label);
    setPrice(value[0].value);
  };
  const timeout = (time) => {
    setTimeout(() => {
      setAlert(false);
    }, time);
  };

  //effects
  useEffect(() => {
    setImg();
  });
  useEffect(() => {
    if (onClose) {
      setTranslateXFront(0);
      setTranslateYFront(0);
      setTranslateXBack(0);
      setTranslateYBack(0);
      setIdCol("white");
      setFront(true);
      setBack(false);
      clearAllSizes();
      setFile(false);
      setFrontFile(false);
      setBackFile(false);
      setSideData("");
      setSideData("");
      setAlert(false);
      setMaterial("");
      setPrice("");
    }
  }, [onClose]);
  useEffect(() => {
    setSide();
  });

  //translateStyles
  const translateImgFront = {
    transform: `translate(${translateXFront}px,${translateYFront}px)`,
  };
  const translateImgKidFront = {
    transform: `translate(${translateXFront}px,${translateYFront}px) scale(0.7)`,
  };
  const translateImgBack = {
    transform: `translate(${translateXBack}px,${translateYBack}px)`,
  };
  const translateImgKidBack = {
    transform: `translate(${translateXBack}px,${translateYBack}px) scale(0.7)`,
  };

  //material select options
  let prices = [14.99, 19.99, 9.99, 24.99];
  const materials = [
    "Organic linen",
    "Organic cotton",
    "Recycled polyester",
    "Lyocell",
  ];
  const options = [
    {
      label: materials[0],
      value: prices[0],
    },
    {
      label: materials[1],
      value: prices[1],
    },
    {
      label: materials[2],
      value: prices[2],
    },
    {
      label: materials[3],
      value: prices[3],
    },
  ];

  if (!open) return;
  return (
    <div className="modal-bg">
      <ScrollToTop />
      {!alert ? (
        ""
      ) : alert &&
        file &&
        (frontFile || backFile) &&
        (xs || s || m || l || xl) &&
        material ? (
        <AlertBox
          status="success"
          title="Success!"
          message="Your product has been added to the cart."
          onCloseAlert={timeout(3000)}
        />
      ) : (
        <AlertBox
          status="warning"
          title="Warning!"
          message="Be sure that you selected size, material, loaded a custom image and
        positioned it on frontside, backside or both before add to cart your
        product."
          onCloseAlert={timeout(10000)}
        />
      )}
      <div className="modal-container">
        <div className="exit-container">
          <AiOutlineClose className="exit" onClick={onClose} />
        </div>
        <div className="modal-left">
          <div className="position">
            <div
              className={front ? "selectedPosition front" : "front"}
              onClick={() => {
                selectedPosition("front");
              }}
            >
              <h5>Front</h5>
            </div>
            <div
              className={back ? "selectedPosition back" : "back"}
              onClick={() => {
                selectedPosition("back");
              }}
            >
              <h5>Back</h5>
            </div>
          </div>
          <div className="canvas-container">
            <img
              src={image}
              alt=""
              className={idBtn === 2 ? "canvas-sm" : ""}
            />
            {frontFile && front && idBtn === 0 ? (
              <img
                src={file}
                alt=""
                className="file-img file-img-front"
                style={translateImgFront}
              />
            ) : backFile && !front && idBtn === 0 ? (
              <img
                src={file}
                alt=""
                className="file-img file-img-back"
                style={translateImgBack}
              />
            ) : frontFile && front && idBtn === 2 ? (
              <img
                src={file}
                alt=""
                className="file-img file-img-front-kid"
                style={translateImgKidFront}
              />
            ) : backFile && !front && idBtn === 2 ? (
              <img
                src={file}
                alt=""
                className="file-img file-img-back-kid"
                style={translateImgKidBack}
              />
            ) : frontFile && front && idBtn === 1 ? (
              <img
                src={file}
                alt=""
                className="file-img file-img-front-woman"
                style={translateImgFront}
              />
            ) : backFile && !front && idBtn === 1 ? (
              <img
                src={file}
                alt=""
                className="file-img file-img-back-woman"
                style={translateImgBack}
              />
            ) : (
              <div></div>
            )}
          </div>
          <div className="modal-left-bottom">
            <div
              className="buy-now"
              onClick={() => {
                setData();
                setAlert(true);
              }}
            >
              <p>Add To Cart</p>
              <BsPlusLg className="plus" />
            </div>
            <div className="modal-left-bottom-directions">
              <div
                className="modal-left-bottom-btns"
                onClick={() => moveImg("left")}
              >
                <GoArrowSmallLeft />
              </div>
              <div
                className="modal-left-bottom-btns"
                onClick={() => moveImg("up")}
              >
                <GoArrowSmallUp />
              </div>
              <div
                className="modal-left-bottom-btns"
                onClick={() => moveImg("down")}
              >
                <GoArrowSmallDown />
              </div>
              <div
                className="modal-left-bottom-btns"
                onClick={() => moveImg("right")}
              >
                <GoArrowSmallRight />
              </div>
            </div>
            <div className="modal-left-bottom-right">
              <div
                className="modal-left-bottom-btns"
                onClick={() => {
                  setFrontFile(!frontFile);
                }}
              >
                <BsFront className="frontSelect" />
              </div>
              <div
                className="modal-left-bottom-btns"
                onClick={() => {
                  setBackFile(!backFile);
                }}
              >
                <BsBack className="backSelect" />
              </div>
              <div>
                <HelpModal />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-right">
          <div className="size">
            <h5>Size</h5>
            <div className="sizes">
              <p
                className={xs ? "selectedSize" : ""}
                onClick={() => {
                  selectedSize("xs");
                  setSizeData("XS");
                }}
              >
                XS
              </p>
              <span>|</span>
              <p
                className={s ? "selectedSize" : ""}
                onClick={() => {
                  selectedSize("s");
                  setSizeData("S");
                }}
              >
                S
              </p>
              <span>|</span>
              <p
                className={m ? "selectedSize" : ""}
                onClick={() => {
                  selectedSize("m");
                  setSizeData("M");
                }}
              >
                M
              </p>
              <span>|</span>
              <p
                className={l ? "selectedSize" : ""}
                onClick={() => {
                  selectedSize("l");
                  setSizeData("L");
                }}
              >
                L
              </p>
              <span>|</span>
              <p
                className={xl ? "selectedSize" : ""}
                onClick={() => {
                  selectedSize("xl");
                  setSizeData("XL");
                }}
              >
                XL
              </p>
            </div>
          </div>
          <div className="color">
            <h5>Color</h5>
            <div className="colors">
              <div
                className="colors-box white"
                onClick={() => setIdCol("white")}
              ></div>
              <div
                className="colors-box grey"
                onClick={() => setIdCol("grey")}
              ></div>
              <div
                className="colors-box black"
                onClick={() => setIdCol("black")}
              ></div>
              <div
                className="colors-box lightblue"
                onClick={() => setIdCol("lightblue")}
              ></div>
              <div
                className="colors-box royalblue"
                onClick={() => setIdCol("royalblue")}
              ></div>
              <div
                className="colors-box purple"
                onClick={() => setIdCol("purple")}
              ></div>
              <div
                className="colors-box green"
                onClick={() => setIdCol("green")}
              ></div>
              <div
                className="colors-box yellow"
                onClick={() => setIdCol("yellow")}
              ></div>
              <div
                className="colors-box red"
                onClick={() => setIdCol("red")}
              ></div>
            </div>
          </div>
          <div className="material">
            <h5>Material</h5>
            <Select
              options={options}
              onChange={(value) => handleChange(value)}
            />
          </div>
          <div className="load">
            <div className="drag-n-drop-box">
              {!file ? (
                <div className="before-load">
                  <label className="custom-file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleContent}
                    />
                    Load Image <BsFillCloudArrowUpFill className="cloud" />
                  </label>
                </div>
              ) : (
                <div className="after-load">
                  <img src={file} alt="" />
                  <GoTrashcan
                    className="trash-load"
                    onClick={() => {
                      setFile("");
                      setFrontFile(false);
                      setBackFile(false);
                    }}
                  />
                </div>
              )}
            </div>
            <div
              className="buy-now-mobile"
              onClick={() => {
                setData();
                setAlert(true);
              }}
            >
              <p>Add To Cart</p>
              <BsPlusLg className="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizerModal;
