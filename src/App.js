import './App.css';
import Header from './components/generalComponent/header';
import Sidebar from './components/generalComponent/sidebar';
import 'react-notifications/lib/notifications.css';

import UploadPageComponent from './components/uploadFile/uploadpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      
      <UploadPageComponent />
    </div>
  );
}

export default App;
