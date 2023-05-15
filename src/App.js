import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path='/'></Route>
          <Route path='missions'></Route>
          <Route path='profile'></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
