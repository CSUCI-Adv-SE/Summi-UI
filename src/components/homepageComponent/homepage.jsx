import Header from "../generalComponent/header";
import Sidebar from "../generalComponent/sidebar";
import UploadPageComponent from "../uploadFile/uploadpage";
import AboutPage from '../aboutpageComponent/aboutpage';
import { Component } from "react";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />

        <div
          className="container-fluid"
          style={{ background: "#E4E8FF", height: "100%" }}
        >
          <div className="row" style={{ height: "100%" }}>
            <Sidebar />

            <UploadPageComponent />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
