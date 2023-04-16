import Header from "../generalComponent/header";
import Sidebar from "../generalComponent/sidebar";
import UploadPageComponent from "../uploadFile/uploadpage";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../aboutpageComponent/aboutpage";
import History from "../historypageComponent/historypage"

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid" style={{ background: "#E4E8FF" }}>
          <div className="row" style={{ minHeight: "93vh" }}>
            <Sidebar />
            <BrowserRouter>
              <Routes>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/" element={<UploadPageComponent />} />
                <Route path="/history" element={<History />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
