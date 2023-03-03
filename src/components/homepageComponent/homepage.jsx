import React, { Component } from 'react';

import Header from '../generalComponent/header';
import Sidebar from '../generalComponent/sidebar';
import UploadPageComponent from '../uploadFile/uploadpage';


class HomePage extends Component {
    state = {  } 
    render() { 
        return (
            <>
            
            <Header />

            <div className='container-fluid' style={{background: "#E4E8FF"}}>

            <div className="row">

            <Sidebar />
            
            <UploadPageComponent />

            </div>
            </div>
            </>
        );
    }
}
 
export default HomePage;
