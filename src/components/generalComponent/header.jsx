import React from 'react';
import './headerModule.css'

const Header = () => {
    const menus = [
        {name: 'Login', link:'/'}
    ]
    return(
        <div className='general header'>
            <nav className='navbar navbar-expand-lgnavbar-light'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-targer='#navbarNav' aria-controls='navbarNav'>
                    <span className='navbar-toggle-icon'>
                        
                    </span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {
                            menus.map((menu) => {
                                return(
                                    <li className='nav-item'>
                                        <a className='nav-link' href={menu.link}>{menu.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/'>
                        <img src='images/summiLogo.png' className='header-logo' alt='logo'/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header