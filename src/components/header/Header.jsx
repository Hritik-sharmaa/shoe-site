import React from "react";
import "../header/Header.css";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const navLink = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "mens",
      display: "Mens",
    },
    {
      path: "womens",
      display: "Womens",
    },
    {
      path: "kids",
      display: "Kids",
    },
    {
      path: "sports",
      display: "Sports",
    },
  ];
  return (
    <header>
      <div className="main container mx-auto">
        <h1>Cool Kicks.</h1>
        <div className="navigation">
          <ul className="menu">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={(active) => (active.isActive ? "isActive" : "")}>
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="icons">
          <span className="icon">
            <IoSearch />
          </span>
          <span className="icon">
            <FiShoppingCart />
            <span className="badge">1</span>
          </span>
          <span className="icon">
            <FaRegHeart />
            <span className="badge">1</span>
          </span>
          <span className="icon">
            <CgProfile />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
