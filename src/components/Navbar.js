import React from "react";
import "../Navbar.css";

export default function Navbar() {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="header__logo">
            <img
              className="header__img"
              // src="https://image.ibb.co/kcVou6/path3000.png"
              src={require("../assets/synkin-low-resolution-logo-color.png")}
            />{" "}
          </div>
          <div className="header__menu">
            <nav id="navbar" className="header__nav collapse">
              <ul className="header__elenco">
                <li className="header__el">
                  <a href="#" className="header__link">
                    Home
                  </a>
                </li>

                <li className="header__el">
                  <a href="#" className="header__link">
                    About
                  </a>
                </li>
                <li className="header__el">
                  <a href="#" className="header__link">
                    Testimonials
                  </a>
                </li>
                <li className="header__el header__el--blue">
                  <a href="" className="btn btn--white">
                  Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
