import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { Route,Routes } from "react-router-dom";
import { React,useState } from 'react';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const  [isLoggedIn, setLoggedIn] = useState(false);
 
  return (
    <div className="w-screen h-screen bg-richblack-900">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>

    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="login" element = {<Login setLoggedIn={setLoggedIn}/>}/>
      <Route path="signup" element = {<Signup setLoggedIn={setLoggedIn}/>}/>
      <Route path="dashboard" element = {
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
        }/>
    </Routes>

    </div>
  );
}

export default App;
