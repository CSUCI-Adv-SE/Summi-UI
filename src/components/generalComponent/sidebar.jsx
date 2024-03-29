import React from "react";
import "./sidebarModule.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cookies from "js-cookie";

const Sidebar = () => {
  let summi_token = Cookies.get("summi_token")
  let is_user_logged_in = summi_token !== undefined

  return (
    <div
      className="col-auto col-md-2 bg-custom desktop"
      style={{ paddingLeft: "0", paddingRight: "0" }}
    >
      <ul className="nav nav-pills flex-column">
        <li className="nav-item text-white fs-4">
          <a className="nav-link text-white fs-5" href="/" aria-current="page">
            <i className="bi bi-house" /> <span className="ms-2">Home</span>
          </a>
        </li>
        { is_user_logged_in && (<li className="nav-item text-white fs-4">
          <a
            className="nav-link text-white fs-5"
            href="/history"
            aria-current="page"
          >
            <i className="bi bi-archive" /> <span className="ms-2">History</span>
          </a>
        </li>
        )}
        <li className="nav-item text-white fs-4">
          <a
            className="nav-link text-white fs-5"
            href="/about"
            aria-current="page"
          >
            <i className="bi bi-info-circle" /> <span className="ms-2">About Us</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
