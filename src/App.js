import './App.css';
import UpLoad from './components/uploadFile/uploadFile';
import 'react-notifications/lib/notifications.css';
import Header from './components/generalComponent/header';
import Sidebar from './components/generalComponent/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />


      <UpLoad />






    </div>

  );


}

export default App;
