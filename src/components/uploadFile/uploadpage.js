import React, { Component } from "react";
import "react-notifications/lib/notifications.css";
import ConversionResult from "../resultPageComponent/resultPage";
import UpLoad from "./upload";

class UploadPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked_on_navigate: false,
      recognised_text: "",
      image_url: "",
    };
  }

  state = {};

  handleCallback = (childData) => {
    this.setState({
      clicked_on_navigate: childData["clicked_on_navigate"],
      recognised_text: childData["recognised_text"],
      image_url: childData["image_url"],
    });
  };

  render() {
    return this.state.clicked_on_navigate ? (
      <ConversionResult
        imageURL={this.state.image_url}
        recognisedText={this.state.recognised_text}
      />
    ) : (
      <UpLoad parentCallback={this.handleCallback} />
    );
  }
}

export default UploadPageComponent;
