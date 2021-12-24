import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import EarlyDelivery from './pages/EarlyDelivery';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Delivery" element={<EarlyDelivery/>}/>
    </Routes>
    </Router>
  );
}

export default App;
