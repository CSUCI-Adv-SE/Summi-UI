import React, { useEffect, useState } from 'react';
import './loginDropDown.css';
import axios from 'axios';
import { config } from '../../constants';
import {
  NotificationManager,
} from "react-notifications";

const LoginDropDown = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignupClick = () => {
    setShowSignup(true);
    
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  const signInSubmit = async(e) => {
    let email = document.getElementById('logInEmail').value
    let password = document.getElementById('logInPassword').value
    const formData = { 'email': email, 'password': password }
    let myResponse = await axios.post(config.url.API_URL + '/login/', formData, {
      "content-type": "multipart/form-data",
    }).catch((error) => {
      NotificationManager.error(error.message, "Error", 5000);
    });
    console.log(myResponse.data)
    if(myResponse.data['login']==true){
      window.location.reload()
    }
  };

  const signUpSubmit = async (e) => {
    let username = document.getElementById('registerName').value
    let email = document.getElementById('registerEmail').value
    let password = document.getElementById('registerPassword').value
    const formData = { 'username': username, 'email': email, 'password': password }
    let myResponse = await axios.post(config.url.API_URL + '/register/', formData, {
      "content-type": "multipart/form-data",
    }).catch((error) => {
      NotificationManager.error(error.message, "Error", 5000);
    });
    console.log(myResponse.data)
    if(myResponse.data['status'] == 200) {
      handleCloseSignup()
      setUser(user)
    }
  };

  const currentUser = async(e) => {
    let myResponse = await axios.get(config.url.API_URL + '/currentUser/')
    let user = myResponse.data && myResponse.data[0] && myResponse.data[0].fields
    setUser(user)
    console.log(user)
  };

  const signOutSubmit = async(e) => {
    let myResponse = await axios.get(config.url.API_URL + '/logout/')
    if(myResponse.data['logout'] == true) {
      window.location.reload()
    }
  };

  useEffect(() => {
    currentUser()
  }, [])

  return (
    <div className='loginDropDown'>
      <ul className='loginDropDownItem'>
        <div className='half-width white-bg'>
          <h4>Login</h4>
          <br />
          <form action="">
            <div className='form-group space'>
              <input id='logInEmail' type="text" className='form-control' placeholder='Email' />
            </div>
            <div className='form-group'>
              <input id='logInPassword' type="password" className='form-control' placeholder='Password' />
            </div>
            <br />
            <button type="button" className='submit-button' onClick={signInSubmit}>Log in</button>
            <br />
            <br />
            <p className='link'>
              Don't have an account?
              <button type="button" className="text-button" onClick={handleSignupClick}>
                Sign up
              </button>
            </p>
          </form>
        </div>
      </ul>
      {showSignup && (
        <div className="modal-popup">
          <div className="modal-contents">
            <button type="button" className="close-button" onClick={handleCloseSignup}>
              X
            </button>
            <h4>Sign up</h4>
            <br />
            <form action="">
              <div className='form-group space'>
                <input id='registerName' type="text" className='form-control' placeholder='Name' />
              </div>
              <div className='form-group space'>
                <input id='registerEmail' type="text" className='form-control' placeholder='Email' />
              </div>
              <div className='form-group'>
                <input id='registerPassword' type="password" className='form-control' placeholder='Password' />
              </div>
              <br />
              <button type="button" className='submit-button' onClick={signUpSubmit}>Sign up</button>
              <br />
              <br />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginDropDown;