import logo from "../assets/icon.svg";
import React from "react";

export default function Header({ switchTheme }) {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);
  return (
    <header className="d-flex align-items-center">
      <div className="container d-flex justify-content-start align-items-center text-white">
        <img src={logo} alt="logo" />
        <h2 className="ms-5 me-auto fw-normal">Cartek.</h2>
        <ul
          className={`nav-menu d-flex align-items-center m-0 d-none d-md-flex ${
            isActiveMenu ? "active" : ""
          }`}
        >
          <li className="me-5 clickable">Products</li>
          <li className="me-5 clickable">About us</li>
          <li className="me-3 clickable">
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </li>
          <li>
            <button
              className="btn fs-3 text-white clickable"
              onClick={switchTheme}
            >
              <i className="fa-solid fa-palette"></i>
            </button>
          </li>
        </ul>

        <button
          className="d-md-none btn fs-3 text-white"
          onClick={() => setIsActiveMenu((oldValue) => !oldValue)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
