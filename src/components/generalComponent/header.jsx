import React, { useState } from 'react';
import './headerModule.css'
import LoginDropDown from './loginDropDown';


const Header = () => {
    const [openDropDown, setOpenDropDown] = useState(false);

    const userpicButton = (event) => {
        setOpenDropDown((prev)=>!prev);
    }
    return(
        <div className='general header'>
            <nav className='navbar navbar-expand-lgnavbar-light custom-navbar'>
                <div className='float-child'>
                    <a className='navbar-brand' href='/'>
                        <img src='images/summiLogo.png' className='header-logo' alt='logo'/>
                    </a>
                </div>
                <div className='float-child'>
                    <button className='header-login'><img src='images/placeholder_image.png' className='userpic-button' alt='userpic' onClick={userpicButton}/></button>      
                </div>  
                {
                    openDropDown && <LoginDropDown/>
                }   
            </nav>
        </div>
    )
}

export default Header