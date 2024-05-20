/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/navbar.css";
import Login from '../pages/Login';

const Navbar = ({ isLoggedIn, setLoggedIn }) => {

  useEffect(() => {
    viewEvent();
    viewMenu();
  }, []);

  // ------------------------view event-------------------------------------------
  const [viewevent, setViewevent] = useState([]);
  const viewEvent = async () => {
    try {
      const result = await axios("http://localhost:8081/ViewEvent");
      setViewevent(result.data)
    }
    catch (err) {
      console.log(err)
    }
  }


  // ------------------------viewwdpkg menu-------------------------------------------
  const [viewmenu, setViewmenu] = useState([]);
  const viewMenu = async () => {
    try {
      const result = await axios("http://localhost:8081/ViewMenu");
      setViewmenu(result.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  function logout() {
    localStorage.removeItem("userData");
    setLoggedIn(false);
  }

  return (
    <div className='navbar-root'>


      {/* --------------navbar----------------------------- */}

      <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
        <div className="container-fluid d-flex justify-content-between" style={{ padding: '0px', paddingLeft: "10px" }}>
          <NavLink to="/"> <span className="navbar-brand" >
            <img src={require("../images/logo.png")} style={{ maxHeight: '40px' }} className="img-fluid" alt="slider2" />

          </span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto calign-content">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
              </li>

              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events
                </span>
                <ul className="dropdown-menu">
                  {
                    viewevent.map((result, index) => {
                      return (
                        <NavLink to={`/Eventlist/${result.eid}/${result.ename}`} className="dropdown-item" >{result.ename}</NavLink>

                      )
                    })}
                  {/* <li><span className="dropdown-item" >Engagement
Photography</span></li>
                  <li><span className="dropdown-item" >Post Wedding
Photography</span></li>
                  <li><span className="dropdown-item" >Birthday
Photography</span></li>
                  <li><span className="dropdown-item" >Baby Shower
Photography</span></li>
                  <li><span className="dropdown-item" >Product
Photography</span></li>
                  <li><span className="dropdown-item" >House Warming
Photography</span></li> */}

                </ul>
              </li>

              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Wedding Packages
                </span>
                <ul className="dropdown-menu">
                  {
                    viewmenu.map((result, index) => {
                      return (
                        <NavLink to={`/Eventlist1/${result.pid}/${result.pname}`} className="dropdown-item" >{result.pname}</NavLink>
                      )
                    })}
                  {/* <li><span className="dropdown-item" >Silver</span></li>
                  <li><span className="dropdown-item" >Gold</span></li>
                  <li><span className="dropdown-item" >Platinum</span></li> */}
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/Gallery" className="nav-link" >Gallery</NavLink>

              </li>

              <li className="nav-item">
                <NavLink to="/Aboutus" className="nav-link" >About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Contactus" className="nav-link" >Contact</NavLink>
              </li>

              <li className="nav-item" style={{ paddingRight: "10px" }}>
                <NavLink to="/Eventbilling" >
                  <span className='ebbtn'>My Bookings's</span></NavLink>
              </li>


            </ul>


            <ul className="navbar-nav ralign-content">
              {/* <li className="nav-item">
                <span className="nav-link" ><i className="bi bi-search"></i></span>
              </li> */}

              {isLoggedIn ? (
                <>
                  <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Profile
                    </span>
                    <ul className="dropdown-menu">
                      <li><NavLink to="/Userdetails" className="dropdown-item" >My Profile</NavLink></li>
                      <li> <NavLink to="/Eventbilling" className="dropdown-item" >My Bookings</NavLink></li>
                      <li><span onClick={logout} className="dropdown-item" >Logout</span></li>
                    </ul>
                  </li>

                </>) : (
                <>

                  <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </span>
                    <ul className="dropdown-menu">

                      <li><span className="dropdown-item" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                        Login</span></li>
                    </ul>
                  </li>

                </>
              )
              }


              <li className="nav-item" style={{ paddingRight: "10px" }}>
                <NavLink to="/Admin" target="_blank">
                  <span className='ebbtn'>Admin</span></NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Login setLoggedIn={setLoggedIn} />
      {/* ------------------------------------------------------ */}
    </div>

  );
};

export default Navbar;

