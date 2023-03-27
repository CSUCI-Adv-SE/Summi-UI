import "./App.css";
import "react-notifications/lib/notifications.css";

import HomePage from "./components/homepageComponent/homepage";
import AboutPage from './components/aboutpageComponent/aboutpage';


function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
