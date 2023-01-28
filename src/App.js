import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from "./components/layouts/Header";
import Home from "./components/home/Home";
import Response from "./components/Auth/Response";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login"
import "./style/Main.css";
import "./style/Button.scss";
import "./style/Animations.css";
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/response" element={<Response/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
 
      
    </Routes>
    {/* <Footer/> */}
   </Router>
    
  );
}

export default App;
