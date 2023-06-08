import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GoTrashcan } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useLiveItems } from "../../App";

const CartModal = ({ onClose }) => {
  const products = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cart, setCart] = useState(products);
  const { setLiveItems } = useLiveItems();

  let total = 0;
  const totalPrice = () => {
    cart.forEach((item) => {
      total = total + item.itemTotal;
    });
  };
  totalPrice();

  function deleteHandler(array, id) {
    const newCartItems = array.filter((_item, index) => index !== id);
    setCart(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }

  useEffect(() => {
    setLiveItems(cart.length);
  }, [cart]);

  return (
    <motion.div
      variants={fadeIn("down", "spring", 0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      onMouseLeave={onClose}
      className="cart-modal-container"
    >
      <div className="cart-modal">
        <div className="cart-modal-title">
          <h4>Cart</h4>
        </div>
        <div className="cart-modal-content">
          {cart.map((item, index) => {
            return (
              <div className="cart-modal-card" key={index}>
                <div className="cart-modal-card-left">
                  <div className="cart-modal-card-img">
                    <img src={item.image || item.finalImage} alt={item.title} />
                  </div>
                  <div className="cart-modal-card-desc">
                    <p id="item-name">{item.title}</p>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                    <p>Material: {item.material}</p>
                  </div>
                </div>
                <div className="cart-modal-card-right">
                  <div className="cart-modal-card-price">
                    <h5>${item.price}</h5>
                  </div>
                  <GoTrashcan
                    className="cart-modal-item-trash"
                    onClick={() => deleteHandler(cart, index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-modal-card-border-bottom"></div>
        <div className="cart-modal-bottom">
          <div className="cart-modal-info">
            <div className="cart-modal-shipping">
              <h5>Shipping:</h5>
              <p>$0.00</p>
            </div>
            <div className="cart-modal-total">
              <h5>Total:</h5>
              <p>{`$${total.toFixed(2)}`}</p>
            </div>
          </div>
        </div>
        <div className="cart-modal-button">
          <Link to={"/cart"}>
            <button>Go To Cart</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CartModal;
