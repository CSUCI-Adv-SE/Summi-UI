import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "react-notifications/lib/notifications.css";

import HomePage from "./components/homepageComponent/homepage";
import AboutPage from './components/aboutpageComponent/aboutpage';


function App() {
  return (
    <div className="App">
      <HomePage />
        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/about" element={<AboutPage />}>*/}
        {/*        </Route>*/}
        {/*    </Routes>*/}
        {/*</BrowserRouter>*/}
    </div>
  );
}

export default App;
