import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Region from './Components/Region';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Region />} />
      </Routes>
    </div>
  );
}

export default App;
