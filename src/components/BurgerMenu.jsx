import React from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

function BurgerMenu() {
    function openMenu() {
        document.body.classList += " menu--open"
      }
      
      function closeMenu() {
        document.body.classList.remove('menu--open')
      }

  return (
    <>
      <div className="btn__menu" onClick={openMenu}>
        <Bars4Icon />
      </div>

      <div className="menu__backdrop">
        <figure className="btn__menu btn__menu--close" onClick={closeMenu}>
          <XMarkIcon />
        </figure>

        <ul className="menu__links">
          <li className="nav__link menu__list" onClick={closeMenu}><a href="/">Home</a></li>
          <li className="nav__link menu__list" onClick={closeMenu}><a href="/search">Search Movies</a></li>
          <li>
            {" "}
            <button className="no-cursor">Contact</button>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenu;
