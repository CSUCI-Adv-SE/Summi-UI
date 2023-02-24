import React from 'react';
import './headerModule.css'

const Header = () => {
    return(
        <div className='general header'>
            <nav className='navbar navbar-expand-lgnavbar-light custom-navbar'>
                <div className='float-child'>
                    <a className='navbar-brand' href='/'>
                        <img src='images/summiLogo.png' className='header-logo' alt='logo'/>
                    </a>
                </div>
                <div className='float-child'>
                    {/* <button className='header-login' color="inherit">Login</button> */}
                    {/* <RaisedButton
                        label="Submit"
                        buttonStyle={{ borderRadius: 25 }}
                        style={{ borderRadius: 25 }}
                        labelColor={'#FFFFFF'}
                        backgroundColor={"#0066e8"}
    /> */}
                </div>
                
            </nav>
        </div>
    )
}

export default Header