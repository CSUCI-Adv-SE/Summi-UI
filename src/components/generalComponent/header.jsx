import React, { useState } from "react";
import "./headerModule.css";
import LoginDropDown from "./loginDropDown";
import Cookies from "js-cookie";

const Header = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [showMobileSideMenu, setshowMobileSideMenu] = useState(false);

  let summi_token = Cookies.get("summi_token");
  let is_user_logged_in = summi_token !== undefined;

  const userpicButton = (event) => {
    setOpenDropDown((prev) => !prev);
  };

  const userMenuButton = () => {
    setshowMobileSideMenu((flag) => !flag);
  };

  return (
    <div className="general header">
      <nav className="navbar navbar-expand-lgnavbar-light custom-navbar">
        <div className="mobile">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              onClick={userMenuButton}
            >
              <svg
                fill="white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M21,17 C21.5522847,17 22,17.4477153 22,18 C22,18.5522847 21.5522847,19 21,19 L3,19 C2.44771525,19 2,18.5522847 2,18 C2,17.4477153 2.44771525,17 3,17 L21,17 Z M21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 L21,11 Z M21,5 C21.5522847,5 22,5.44771525 22,6 C22,6.55228475 21.5522847,7 21,7 L3,7 C2.44771525,7 2,6.55228475 2,6 C2,5.44771525 2.44771525,5 3,5 L21,5 Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="float-child">
          <a className="navbar-brand" href="/">
            <img
              src="images/summiLogo.png"
              className="header-logo"
              alt="logo"
            />
          </a>
        </div>
        <div className="float-child">
          <button className="header-login">
            <img
              src="images/placeholder_image.png"
              className="userpic-button"
              alt="userpic"
              onClick={userpicButton}
            />
          </button>
        </div>
        {openDropDown && <LoginDropDown />}
      </nav>

      <div
        className={showMobileSideMenu ? "show mobile" : "collapse"}
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        <ul className="nav-pills flex-column">
          <li className="nav-item text-white fs-4">
            <a
              className="nav-link text-white fs-5"
              href="/"
              aria-current="page"
            >
              <i className="bi bi-house" />
              <span className="ms-2">Home</span>
            </a>
          </li>
          {is_user_logged_in && (
            <li className="nav-item text-white fs-4">
              <a
                className="nav-link text-white fs-5"
                href="/history"
                aria-current="page"
              >
                <i className="bi bi-archive" />
                <span className="ms-2">History</span>
              </a>
            </li>
          )}
          <li className="nav-item text-white fs-4">
            <a
              className="nav-link text-white fs-5"
              href="/about"
              aria-current="page"
            >
              <i className="bi bi-info-circle" />
              <span className="ms-2">About Us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
