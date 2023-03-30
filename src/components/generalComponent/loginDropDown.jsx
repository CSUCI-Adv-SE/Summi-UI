import React from 'react'
import './loginDropDown.css'


const LoginDropDown = () => {
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
            <button type="submit" className='btn btn-primary right-btn'>Log in</button>
            <br />
            <br />
            <p className='link'>Don't have an account? <a href="text-button">Sign up</a></p>
          </form>
        </div>
      </ul>
    </div>
  )
}

export default LoginDropDown