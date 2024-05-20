/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Addwdpkg from "./Addwdpkg";
import Addevents from "./Addevents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/dashboard.css";
import Addeventdetails from './Addeventdetails';
import Addwdpkgdetails from './Addwdpkgdetails';
import Eb from './Eb';
import Eb1 from './Eb1';
import Ud from './Ud';
import Gl from './Gl';

const Dashboard = () => {
    const navigate = useNavigate();


    useEffect(() => {
        document.title = "Manam| Dashboard";
        // Check if the user is already logged in, then redirect to home
        if (!(localStorage.getItem("adminData"))) {
            navigate('/Admin');
        }
    }, [navigate]);


    function logout() {
        localStorage.removeItem("adminData");
        navigate('/Admin');
      }


    return (
        <div className='dashboard-root'>


            <div className='aboutus1 shadow'>
                <img src={require("../images/logo.png")} style={{ height: '60px' }} className="img-fluid" alt="slider2" />

                <span style={{ paddingLeft: '40px' }}>ADMIN- Dashboard</span>
                <span onClick={logout} style={{ paddingRight: '40px', float: "right",cursor:'pointer' }}>Logout</span>
            </div>
            <div style={{ height: "80px" }}></div>



            <div className='container-md'>
                <div class="row shadow" style={{border:'1px solid gray',padding:'20px',borderRadius:"20px"}}>
                    <div class="col-md-12 col-sm-12 content">
   Add Events
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <Addevents />
                    </div>
                </div>

                <br/><br/>

                <div class="row shadow" style={{border:'1px solid gray',padding:'20px',borderRadius:"20px"}}>
                    <div class="col-md-12 col-sm-12 content">
                   Add Event Details     
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <Addeventdetails/>
                    </div>
                </div>
                

<br/><br/>

                <div class="row shadow" style={{border:'1px solid gray',padding:'20px',borderRadius:"20px"}}>
                    <div class="col-md-12 col-sm-12 content">
                   Add Wedding Packages     
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <Addwdpkg />
                    </div>
                </div>

                <br/><br/>

                <div class="row shadow" style={{border:'1px solid gray',padding:'20px',borderRadius:"20px"}}>
                    <div class="col-md-12 col-sm-12 content">
                   Add Wedding Package Details   
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <Addwdpkgdetails/>
                    </div>
                </div>



                <div class="row shadow" style={{border:'1px solid gray',padding:'20px',borderRadius:"20px"}}>
                    <div class="col-md-12 col-sm-12 content">
                   Event Billings   
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <Eb/>
                    </div>
                </div>


                <div class="row shadow" style={{border:'1px solid gray',padding:'20px',borderRadius:"20px"}}>
                    <div class="col-md-12 col-sm-12 content">
                   Wedding & Reception Billings   
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <Eb1/>
                    </div>
                </div>


                <div class="row shadow" style={{border:'1px solid gray',padding:'20px',borderRadius:"20px"}}>
                    <div class="col-md-12 col-sm-12 content">
                   User Details   
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <Ud/>
                    </div>
                </div>

                <div class="row shadow" style={{border:'1px solid gray',padding:'20px',borderRadius:"20px"}}>
                    <div class="col-md-12 col-sm-12 content">
                   Gallery  
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <Gl/>
                    </div>
                </div>

            </div>



            <br />
            {/* <Addmenu/>
             */}
        </div>
    );
}

export default Dashboard;

