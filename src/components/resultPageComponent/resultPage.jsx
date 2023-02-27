// import { TextareaAutosize } from '@mui/material';
import React, { Component } from 'react';
import './resultpage.css';


class ConversionResult extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            text: props.recognisedText,
            image_url: props.imageURL,

            text: "some text from backend",
            image_url: "/media/fabc7226-37fe-43c0-882c-693a779540ad/sdf _html onload=alert('hi')_.jpg",
        }
    }
    
    render() { 
        return (
            <div className={"row"}>
                <div className={"col"}>
                    <img src={"http://127.0.0.1:8000" + this.state.image_url} width="500" height="500"></img>
                </div>
                <div className={"col"}>
                    <textarea></textarea>
                </div>
            </div>
        );
    }
}
 
export default ConversionResult;
