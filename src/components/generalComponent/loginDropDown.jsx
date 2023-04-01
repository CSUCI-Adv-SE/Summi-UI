import React, { useState } from 'react';
import './loginDropDown.css';

const LoginDropDown = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <div className='loginDropDown'>
      <ul className='loginDropDownItem'>
        <div className='half-width white-bg'>
          <h4>Login</h4>
          <br />
          <form action="">
            <div className='form-group'>
              <input type="text" className='form-control' placeholder='Email' />
            </div>
            <div className='form-group'>
              <input type="password" className='form-control' placeholder='Password' />
            </div>
            <br />
            <button type="submit" className='submit-button'>Log in</button>
            <br />
            <br />
            <p className='link'>
              Don't have an account?{' '}
              <button type="button" className="text-button" onClick={handleSignupClick}>
                Sign up
              </button>
            </p>
          </form>
        </div>
      </ul>
      {showSignup && (
        <div className="modal-popup">
          <div className="modal-content">
            <button type="button" className="close-button" onClick={handleCloseSignup}>
              X
            </button>
            <h4>Sign up</h4>
            <br />
            <form action="">
              <div className='form-group'>
                <input type="text" className='form-control' placeholder='Name' />
              </div>
              <div className='form-group'>
                <input type="text" className='form-control' placeholder='Email' />
              </div>
              <div className='form-group'>
                <input type="password" className='form-control' placeholder='Password' />
              </div>
              <br />
              <button type="submit" className='submit-button'>Sign up</button>
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