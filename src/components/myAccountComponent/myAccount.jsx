import Cookies from "js-cookie";
import React, { Component } from "react";
import { NotificationManager } from "react-notifications";

function logout() {
    Cookies.remove("summi_token");
    Cookies.remove("loggined_user");
    NotificationManager.success("Logout Successfull", "Success", 5000)
    setTimeout(window.location.replace("/"), 15 * 1000);
}

class MyAccount extends Component {
  render() {
    return (
      <div className="loginDropDown">
        <p> Hi {Cookies.get("loggined_user")} </p>
        <p> Welcome to your account</p>
        <button className="submit-button" type="button" onClick={logout}> <i class="fa-solid fa-right-from-bracket" /> Signout </button>
      </div>
    );
  }
}

export default MyAccount;
