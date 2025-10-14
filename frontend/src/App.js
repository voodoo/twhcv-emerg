import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Help988 from './pages/Help988';
import QPRTraining from './pages/QPRTraining';
import Community from './pages/Community';
import Donate from './pages/Donate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/988" element={<Help988 />} />
          <Route path="/qpr" element={<QPRTraining />} />
          <Route path="/community" element={<Community />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;