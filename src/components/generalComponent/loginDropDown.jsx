import React, { useState } from "react";
import "./loginDropDown.css";
import axios from "axios";
import { config } from "../../constants";
import { NotificationManager } from "react-notifications";
import Cookies from "js-cookie";
import { is_email_valid, is_strong_password } from "../utils";
import MyAccount from "../myAccountComponent/myAccount";

const LoginDropDown = () => {
  const [showSignup, setShowSignup] = useState(false);

  let summi_token = Cookies.get("summi_token");

  let isUserLoggedIn = summi_token !== undefined;

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
  };

  const signInSubmit = async (e) => {
    let email = document.getElementById("logInEmail").value.trim();
    let password = document.getElementById("logInPassword").value;

    if (!is_email_valid(email)) {
      NotificationManager.error(
        "Please enter email in valid format.",
        "Error",
        5000
      );
      return;
    }

    if (!password.length) {
      NotificationManager.error("Password cannot be empty", "Error", 5000);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    let summi_token = Cookies.get("summi_token");

    if (summi_token !== undefined) {
      NotificationManager.error("User already logged in. ", "Error", 5000);
      return;
    }

    let myResponse = await axios
      .post(config.url.API_URL + "/login/", formData, {
        "content-type": "multipart/form-data",
      })
      .catch((error) => {
        NotificationManager.error(error.message, "Error", 5000);
        return;
      });
    if (myResponse.data["status"] === 200) {
      Cookies.set("summi_token", myResponse.data["token"]);
      NotificationManager.success(myResponse.data["message"], "Success", 5000);
      setTimeout(window.location.reload(), 5000);
    } else {
      NotificationManager.error(myResponse.data["message"], "Error", 5000);
    }
  };

  const signUpSubmit = async (e) => {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let error_element = document.getElementById("error-message");
    error_element.className = "error-message";

    if (username.length === 0) {
      error_element.textContent = "Please enter valid username";
      return;
    }

    if (email.length === 0 || !is_email_valid(email)) {
      error_element.textContent = "Please enter valid email";
      return;
    }

    if (password.length === 0) {
      error_element.textContent = "Please enter valid password";
      return;
    }

    if (password !== confirm_password) {
      error_element.textContent = "Passwords mismatch!";
      return;
    }

    if (!is_strong_password(password)) {
      error_element.textContent = "Please use strong password!";
      return;
    }

    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm_password", confirm_password);

    let myResponse = await axios
      .post(config.url.API_URL + "/register/", formData, {
        "content-type": "multipart/form-data",
      })
      .catch((error) => {
        NotificationManager.error(error.message, "Error", 5000);
        return;
      });

    if (myResponse.data["status"] === 200) {
      error_element.className = "success-message";
      error_element.textContent =
        "Signup success! Please use Login to use your account";
    } else {
      NotificationManager.error(myResponse.data["message"], "Error", 5000);
    }
  };

  return (
    <>
      {isUserLoggedIn ? (
        <MyAccount />
      ) : (
        <>
          <div className="loginDropDown">
            <ul className="loginDropDownItem">
              <div className="half-width white-bg">
                <h4>Login</h4>
                <br />
                <form action="">
                  <div className="form-group space">
                    <input
                      id="logInEmail"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="logInPassword"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <br />
                  <button
                    type="button"
                    className="submit-button"
                    onClick={signInSubmit}
                  >
                    Log in
                  </button>
                  <br />
                  <br />
                  <p className="link">
                    Don't have an account?
                    <button
                      type="button"
                      className="text-button"
                      onClick={handleSignupClick}
                    >
                      Sign up
                    </button>
                  </p>
                </form>
              </div>
            </ul>
            {showSignup && (
              <div className="modal-popup">
                <div className="modal-contents">
                  <button
                    type="button"
                    className="close-button"
                    onClick={handleSignupClick}
                  >
                    X
                  </button>
                  <h4>Sign up</h4>
                  <br />
                  <form action="">
                    <div className="form-group space">
                      <input
                        id="username"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group space">
                      <input
                        id="email"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group space">
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group space">
                      <input
                        id="confirm_password"
                        type="password"
                        className="form-control"
                        placeholder="Re-enter Password"
                      />
                    </div>
                    <div>
                      <p id="error-message" />
                    </div>
                    <button
                      type="button"
                      className="submit-button"
                      onClick={signUpSubmit}
                    >
                      Sign up
                    </button>
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default LoginDropDown;
