import React from "react";
import Logo from "../assets/movie.png";
import BurgerMenu from "./BurgerMenu";

const Nav = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 0",
        }}
      >
        <a href="/">
          <img src={Logo} alt="logo" style={{ minWidth: "100px", maxWidth: "200px" }} />
        </a>

        <div
          className="menu"
        >
          <a href="/" className="nav__link">
            Home
          </a>
          <a href="/search" className="nav__link">
            Search Movies
          </a>
          <button className="no-cursor">CONTACT</button>
        </div>
        <BurgerMenu />
      </div>
    </>
  );
};

export default Nav;
