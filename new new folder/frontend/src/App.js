import logo from './logo.svg';
import './App.css';
import Home from './Views/Home/Home'
import { Routes, Route } from "react-router-dom";
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';
import HotelBooking from './Views/HotelBooking/HotelBooking';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/HotelBooking" element={<HotelBooking />} />


      </Routes>
      
    </div>
  );
}

export default App;

