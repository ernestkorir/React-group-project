import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';
import Profile from './components/pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Rockets />}></Route>
          <Route path='missions' element={<Missions />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
