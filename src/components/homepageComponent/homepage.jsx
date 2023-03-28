import Header from "../generalComponent/header";
import Sidebar from "../generalComponent/sidebar";
import UploadPageComponent from "../uploadFile/uploadpage";
import { Component } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "../aboutpageComponent/aboutpage";

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

              <BrowserRouter>
                  <Routes>
                      <Route path="/about" element={<AboutPage />}>
                      </Route>
                      <Route path="/" element={<UploadPageComponent />} />
                  </Routes>
              </BrowserRouter>


          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
