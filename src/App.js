import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Rockets from './pages/Rockets';
import Mission from './pages/Missions';
import Profile from './pages/Profile';
import { fetchMission } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Rockets />}></Route>
          <Route path='missions' element={<Mission />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
