import React from "react";
import "./navbar.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import BurgerModal from "./BurgerModal";
import Logo from "../../assets/img/logos/gosc/gosc-black.png";
import CartModal from "./CartModal";
import { useLiveItems } from "../../App";

const Navbar = () => {
  const { liveItems, cartModal, setCartModal, favs } = useLiveItems();
  const navigate = useNavigate();

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const cartStyle = {
    textDecoration: "none",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <nav className="navbar">
      {cartModal ? <CartModal onClose={() => setCartModal(false)} /> : ""}
      <div className="burger">
        <BurgerModal className="burger-icon" />
      </div>
      <div className="nav-left">
        <Link to={"/"}>
          <img src={Logo} alt="" className="nav-logo" />
        </Link>
      </div>
      <div className="center">
        <ul>
          <li>
            <Link to={"/customizer"} style={linkStyle}>
              Customizer
            </Link>
          </li>
          <li>
            <Link to={"/products"} style={linkStyle}>
              Our Products
            </Link>
          </li>
          <li>
            <a
              href="/#how-to-use"
              style={linkStyle}
              onClick={() => {
                navigate("/#how-to-use");
              }}
            >
              How To Use
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchicon">
            <BsSearch />
          </div>
        </div>
        <Link to={"/favourites"} style={cartStyle}>
          {favs === undefined || favs.length === 0 ? (
            <AiOutlineHeart className="favs" />
          ) : (
            <AiFillHeart className="favs favs-animation" />
          )}
        </Link>
        <div className="cart-container">
          {liveItems > 0 ? (
            <div className="cart-notification">
              <p>{liveItems}</p>
            </div>
          ) : (
            ""
          )}
          <Link to={"/cart"} style={cartStyle}>
            <AiOutlineShoppingCart
              className="cart"
              onMouseEnter={() => setCartModal(true)}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
