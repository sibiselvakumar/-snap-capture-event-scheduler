import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//  import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Admin from './admin/Admin';
import Dashboard from './admin/Dashboard';
import Eventlist from './pages/Eventlist';
import Eventlist1 from './pages/Eventlist1';
import Eventbilling from './pages/Eventbilling';
import Gallery from './pages/Gallery';
import Userdetails from './pages/Userdetails';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem("userData"));
  
  return (
    <Router>

{window.location.pathname === "/Dashboard" || window.location.pathname === "/Admin"   ? (
        null
      ) : (
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      )}


     
      <Routes>
         <Route path="/" element={<Home />} />
        {/* <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} />} /> */}
        <Route path="/Cart" element={<Cart isLoggedIn={isLoggedIn} />} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Contactus" element={<Contactus/>} /> 
        <Route path="/Eventbilling" element={<Eventbilling isLoggedIn={isLoggedIn} />} />
        <Route path="/Userdetails" element={<Userdetails isLoggedIn={isLoggedIn} />} />
        <Route path='/Eventlist/:eid/:ename' exact element={<Eventlist isLoggedIn={isLoggedIn} />} />
        <Route path='/Eventlist1/:pid/:pname' exact element={<Eventlist1 isLoggedIn={isLoggedIn} />} />
        <Route path="/Admin" element={<Admin/>} /> 
        <Route path="/Dashboard" element={<Dashboard/>} /> 
      </Routes>
      {window.location.pathname === "/Dashboard" || window.location.pathname === "/Admin"   ? (
        null
      ) : (
        <Footer/>
      )}
    </Router>
  );
}

export default App;

