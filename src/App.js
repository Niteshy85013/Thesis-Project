import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from "./components/layouts/Header";
import Home from "./components/home/Home";
import Contact from "./components/home/Contact";
import About from "./components/home/About";
import Response from "./components/Auth/Response";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login"
import Module from "./components/Rest/Module";
import ModuleDetail from "./components/Rest/ModuleDetail";

// Css Imports
import "./style/Main.css";
 
// import "./style/Animations.css";
// import "./style/Registration.css";
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/response" element={<Response/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/module" element={<Module/>}/>
      <Route path="/moduledetail" element={<ModuleDetail/>}/>
    </Routes>
    {/* <Footer/> */}
   </Router>
    
  );
}

export default App;
