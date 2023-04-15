// import { TextareaAutosize } from '@mui/material';
import React, { Component } from "react";
import "./resultpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "../../constants.js";

function go_back() {
  window.location.reload();
}
class ConversionResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.recognisedText,
      image_url: props.imageURL,
    };
  }

  render() {
    return (
      <>
        <div className="col">
          <div className="row" style={{ margin: "2rem 0" }}>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <svg
                style={{ cursor: "pointer" }}
                onClick={go_back}
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                viewBox="0 0 52 52"
                enableBackground="new 0 0 52 52"
                xmlSpace="preserve"
              >
                <path
                  d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
            L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
            h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                />
              </svg>
            </div>
            <div className="col-10 justify-content-center">
              <h4> Summarized Text </h4>
            </div>
          </div>
          <div className="row">
            <div className="col desktop">
              <img alt="Preview" src={config.url.API_URL + this.state.image_url} height="400"></img>
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