import React from 'react'
import './sidebarModule.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Sidebar = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto min-vh-100 col-md-3 bg-custom'>
                    <ul className='nav nav-pills flex-column'>
                        <li className='nav-item text-white fs-4'>
                            <a className='nav-link text-white fs-5' href='/' aria-current='page'>
                                <i className='bi bi-house'/> <span className='ms-2'>Home</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar