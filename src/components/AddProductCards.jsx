import React, { useState, useEffect } from "react";
import "../../src/pages/Products/products.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useLiveItems } from "../App";
import AlertBox from "./AlertBox";
import Select from "react-dropdown-select";
import html2canvas from "html2canvas";

const AddProductCards = (props) => {
  //states
  const [size, setSize] = useState("");
  const [color, setColor] = useState("white");
  const [image, setImage] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState(0);
  const { setLiveItems, setFavs } = useLiveItems();
  const [alert, setAlert] = useState(false);
  const [favWarning, setFavWarning] = useState(false);
  const [favSuccess, setFavSuccess] = useState(false);
  const [cartWarning, setCartWarning] = useState(false);
  const [cartSuccess, setCartSuccess] = useState(false);
  const [finalImage, setFinalImage] = useState("");

  //localStorage object structure
  const newCartItem = {
    id: props.id,
    finalImage: finalImage,
    title: props.title,
    price: price,
    size: size,
    color: color,
    material: material,
    quantity: props.quantity,
    itemTotal: price * props.quantity,
  };

  //functions

  function captureScreen() {
    let container = document.querySelector("#" + newProduct);

    html2canvas(container, { backgroundColor: null }).then((canvas) => {
      
      const transparentCanvas = document.createElement("canvas");
      transparentCanvas.width = canvas.width;
      transparentCanvas.height = canvas.height;
      const context = transparentCanvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(canvas, 0, 0);

     
      const newImageData = transparentCanvas.toDataURL("image/png");

    
      setFinalImage(newImageData);
    });
  }
  let newProduct = "new" + props.title.replace(/\s+/g, '');
  const getImageUrl = (color) => {
    switch (color) {
      case "white":
        setImage(props.whiteTee);
        break;
      case "black":
        setImage(props.blackTee);
        break;
      case "gray":
        setImage(props.grayTee);
        break;
      case "blue":
        setImage(props.blueTee);
        break;
      case "red":
        setImage(props.redTee);
        break;
      default:
        setImage(props.whiteTee);
    }
  };

  const handleChange = (selectedOptions) => {
    if (selectedOptions.length > 0) {
      const selectedMaterial = selectedOptions[0].label;
      const selectedPrice = selectedOptions[0].value;
      setMaterial(selectedMaterial);
      setPrice(selectedPrice);
    } else {
      setMaterial("");
      setPrice(0);
    }
  };

  const handleAddToCart = () => {
    setFavSuccess(false);
    setFavWarning(false);

    // get existing cart items from localStorage, or create an empty array if none exist
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(newCartItem);

    if (size && color && material) {
      // save the updated cart items to localStorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setLiveItems(cartItems.length);
      setCartSuccess(true);
      setCartWarning(false);
    } else {
      setCartSuccess(false);
      setCartWarning(true);
    }
  };

  const handleFavs = () => {
    setCartSuccess(false);
    setCartWarning(false);

    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    favourites.push(newCartItem);

    if (size && color && material) {
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setFavs(favourites ? favourites : []);
      setFavSuccess(true);
      setFavWarning(false);
    } else {
      setFavWarning(true);
      setFavSuccess(false);
    }
  };

  const timeout = (time) => {
    setTimeout(() => {
      setAlert(false);
    }, time);
  };

  useEffect(() => {
    getImageUrl(color);
  });

  const materials = [
    { label: "Organic linen", value: 14.99 },
    { label: "Organic cotton", value: 19.99 },
    { label: "Recycled polyester", value: 9.99 },
    { label: "Lyocell", value: 24.99 },
  ];

  return (
    <div className="product-cards">
      <div className={alert ? "alert-box" : "hidden"}>
        {!alert ? (
          ""
        ) : alert && cartSuccess ? (
          <AlertBox
            status="success"
            title="Success!"
            message="Your product has been added to the cart."
            onCloseAlert={timeout(3000)}
          />
        ) : alert && favWarning ? (
          <AlertBox
            status="warning"
            title="Warning!"
            message="Be sure that you selected size, color and material before add this product as your favourite."
            onCloseAlert={timeout(7000)}
          />
        ) : alert && favSuccess ? (
          <AlertBox
            status="success"
            title="Success!"
            message="This product has been added as your favourite."
            onCloseAlert={timeout(3000)}
          />
        ) : alert && cartWarning ? (
          <AlertBox
            status="warning"
            title="Warning!"
            message="Be sure that you selected size, color and material before add to cart your
            product."
            onCloseAlert={timeout(7000)}
          />
        ) : (
          ""
        )}
      </div>
      <div className="product-card">
        <div className="products-favs-container">
          <AiOutlineHeart
            className="products-favs"
            onClick={() => {
              handleFavs();
              setAlert(true);
            }}
          />
        </div>
        <div className="tee-container" id={newProduct}>
          <img src={props.adminImage} alt="..." id="added-image-from-admin" />
          <img src={image || props.whiteTee} alt="..." />
        </div>
        <div className="card-body">
          <h4 className="title">{props.title}</h4>

          <div className="size-p">
            <button
              className={size === "XS" ? "selected" : "true"}
              onClick={() => {
                setSize("XS");
                captureScreen();
              }}
            >
              XS
            </button>
            <button
              className={size === "S" ? "selected" : "true"}
              onClick={() => {
                setSize("S");
                captureScreen();
              }}
            >
              S
            </button>
            <button
              className={size === "M" ? "selected" : "true"}
              onClick={() => {
                setSize("M");
                captureScreen();
              }}
            >
              M
            </button>
            <button
              className={size === "L" ? "selected" : "true"}
              onClick={() => {
                setSize("L");
                captureScreen();
              }}
            >
              L
            </button>
            <button
              className={size === "XL" ? "selected" : "true"}
              onClick={() => {
                setSize("XL");
                captureScreen();
              }}
            >
              XL
            </button>
          </div>
          <div className="color-p">
            <button
              id="white"
              className="color-box"
              onClick={() => {
                setColor("white");
                captureScreen();
              }}
            ></button>
            <button
              id="black"
              className="color-box"
              onClick={() => {
                setColor("black");
                captureScreen();
              }}
            ></button>
            <button
              id="gray"
              className="color-box"
              onClick={() => {
                setColor("gray");
                captureScreen();
              }}
            ></button>
            <button
              id="blue"
              className="color-box"
              onClick={() => {
                setColor("blue");
                captureScreen();
              }}
            ></button>
            <button
              id="red"
              className="color-box"
              onClick={() => {
                setColor("red");
                captureScreen();
              }}
            ></button>
          </div>

          <div className="material-p">
            <Select
              options={materials}
              onChange={(selectedOptions) => {
                handleChange(selectedOptions);
                captureScreen();
              }}
              placeholder="Select Material"
            />
          </div>
          <div className="price">
            {price > 0 && <p>${price.toFixed(2)}</p>}
            {price === 0 && <p>$0.00</p>}
          </div>
          {/* <h5 className="price">${prices}</h5> */}
          <div className="products-btn-container">
            <button
              className="button-p"
              onClick={() => {
                handleAddToCart();
                setAlert(true);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductCards;
