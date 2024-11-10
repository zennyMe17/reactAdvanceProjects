import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { Route,Routes } from "react-router-dom";
import { React,useState } from 'react'

function App() {
  const  [isLoggedIn, setLoggedIn] = useState(false);
 
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>

    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="login" element = {<Login setLoggedIn={setLoggedIn}/>}/>
      <Route path="signup" element = {<Signup setLoggedIn={setLoggedIn}/>}/>
      <Route path="dashboard" element = {<Dashboard/>}/>
    </Routes>

    </div>
  );
}

export default App;
