// import { TextareaAutosize } from '@mui/material';
import React, { Component } from "react";
import './resultpage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "../../constants.js";

class ConversionResult extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      text: props.recognisedText,
      image_url: props.imageURL,

    //   image_url:
    //     "/media/68537dd4-af42-4d4c-b18b-fea21d434c82/IMG-20230221-WA0001.jpg",
    //   text: "some text from backend some text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backendsome text from backend",
    };
  }

  render() {
    return (
      <>
      <div className="col">
      <h2 className="text-header"> text </h2>
      
        <div className="col" style={{display: "flex", margin: "auto"}}>
            <div className="col">
            <img
                alt="Preview"
                src={config.url.API_URL + this.state.image_url}
                height="400"
            ></img>
            </div>

        <div className="col form-floating">
            <textarea className="form-control" placeholder="recognised text" value={this.state.text} id="floatingTextarea2" style={{height: "400px"}} readOnly>
            </textarea>
        </div>

        </div>
        </div>
      </>
    );
  }
}

export default ConversionResult;
