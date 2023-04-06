// import { TextareaAutosize } from '@mui/material';
import React, { Component } from "react";
import "./resultpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "../../constants.js";

class ConversionResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.recognisedText,
      image_url: props.imageURL,
    };
    this.is_local_image = !props.imageURL.startsWith("https://");
    this.preview_image_url = this.is_local_image? config.url.API_URL + this.state.image_url: this.state.image_url
  }

  render() {
    return (
      <>
        <div className="col">
          <h2 className="text-header"> Recongnized Text </h2>

          <div className="col" style={{ display: "flex", margin: "auto" }}>
            <div className="col desktop">
              <img
                alt="Preview"
                src={this.preview_image_url}
                height="400"
              ></img>
            </div>

            <div className="col form-floating">
              <textarea
                className="form-control"
                placeholder="recognised text"
                value={this.state.text}
                id="floatingTextarea2"
                style={{ height: "400px" }}
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ConversionResult;
