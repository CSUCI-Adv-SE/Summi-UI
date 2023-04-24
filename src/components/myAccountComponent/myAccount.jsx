import Cookies from "js-cookie";
import React, { Component } from "react";
import { NotificationManager } from "react-notifications";

function logout() {
    Cookies.remove("summi_token");
    NotificationManager.success("Logout Successfull", "Success", 5000)
    setTimeout(window.location.replace("/"), 15 * 1000);
}

class MyAccount extends Component {
  render() {
    return (
      <div className="loginDropDown">
        <button className="btn btn-link" type="button" onClick={logout}> signout </button>
      </div>
    );
  }
}

export default MyAccount;
