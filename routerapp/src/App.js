import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
          </ul>
        </nav>
        


      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/support" element = {<Support/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/labs" element = {<Labs/>}/>
        <Route path="*" element={<div>Not Found</div>}/>
      </Routes>
      
    </div>
  );
}

export default App;
