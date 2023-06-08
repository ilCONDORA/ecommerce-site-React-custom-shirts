import React, { createContext, useState, useContext } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Customizer from "./pages/Customizer/Customizer";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Favourites from "./pages/Favourites/Favourites";
import Admin from "./pages/Admin/Admin";
import Logout from "./pages/Admin/logout";

const itemsContext = createContext();
const defaultLiveItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const defaultFavs = JSON.parse(localStorage.getItem("favourites")) || [];

const Provider = ({ children }) => {
  const [liveItems, setLiveItems] = useState(defaultLiveItems.length);
  const [favs, setFavs] = useState(defaultFavs);
  const [aBurger, setABurger] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  const exposed = {
    liveItems,
    setLiveItems,
    favs,
    setFavs,
    aBurger,
    setABurger,
    cartModal,
    setCartModal,
  };
  return (
    <itemsContext.Provider value={exposed}>{children}</itemsContext.Provider>
  );
};
export const useLiveItems = () => useContext(itemsContext);

const App = () => {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customizer" element={<Customizer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/logout" element={<Logout />}/>
      </Routes>
    </Provider>
  );
};

export default App;
