import logo from './logo.svg';
import './App.css';
import Home from './Views/Home/Home'
import { Routes, Route } from "react-router-dom";
import Login from './Views/Login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />


      </Routes>
      
    </div>
  );
}

export default App;

