import React from 'react';

function Header() {
    return(
        <div className='general header'>
            <nav className='navbar navbar-expand-lgnavbar-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/'>
                        <img src='./summiLogo.png' className='header-logo' alt='logo'/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header