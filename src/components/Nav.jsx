import React from "react";
import Logo from "../assets/movie.png";

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
        <img src={Logo} alt="logo" style={{ maxWidth: "200px" }} />
        <div
          style={{
            maxWidth: "630px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // border: "1px solid black"
        }}
        >
          <a href="/" className="nav__link">Home</a>
          <a href="/search" className="nav__link">Search Movies</a>
          <button>CONTACT</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
