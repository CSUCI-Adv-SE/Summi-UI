// import { TextareaAutosize } from '@mui/material';
import React, { Component } from 'react';
// import './resultpage.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { config } from "../../constants.js"

class ConversionResult extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            text: props.recognisedText,
            image_url: props.imageURL,
        }
    }
    
    render() { 
        return (
            <>
                <div className="col">
                    <img alt="Preview" src={config.url.API_URL + this.state.image_url} width="400" height="500"></img>
                </div>
                <div className="col">
                    <textarea></textarea>
                </div>
            </>
        );
    }
}
 
export default ConversionResult;
