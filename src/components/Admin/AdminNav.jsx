import React from "react";
import "../../pages/Admin/admin.css";
import Logo from "../../assets/img/logos/gosc/gosc-white.png";
import AdminBurgerModal from "./AdminBurgerModal"
// import { useLiveItems } from "../../App";

const AdminNav = () => {
  // const { setABurger } = useLiveItems();
  // const handleClick = (event) => {
  //   setABurger((current) => !current);
  // };
  return(
    <nav className="a-navbar">
      <div className="a-left">
        <AdminBurgerModal /*onClick={handleClick()}*//>
      </div>
      <div className="a-center">
        <img src={Logo} alt="" />
      </div>
    </nav>
  );
};

export default AdminNav;