/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/footer.css";


const Footer = () => {


    return (
        <div className='root-footer' style={{ marginTop: '20px',padding:'20px' }}>
            <div className="container-lg">
                <div className="row">
                <div className="col-md-5 col-sm-12" style={{padding:'5px'}}>
                    <h4 className="heading">About Company</h4>
                    <span className="footer-line"></span>
                    <br/>
                       
                        <p style={{color:'white',marginTop:'20px',fontSize:'14px',fontWeight:'bold',textAlign:"justify",paddingRight:'40px'}}>
                        Manam Photography, established in 2021, is a premier photography service specializing in capturing the most precious 
moments of life. With a dedicated team of 12 to 15 skilled professionals divided into two teams, we excel in various
 photography genres including weddings, pre-weddings, post-weddings, baby showers, maternity, engagements, housewarmings, 
 and product photography. 
                        </p>
            
                    </div>


                    <div className="col-md-3 col-sm-6 col-6">
                    <h4 className="heading">Our Events</h4>
                    <span className="footer-line"></span>
                    <br/><br/>
                        <ul>
                        <li>Engagement Photography</li>
  <li>Post Wedding Photography</li>
  <li>Birthday Photography</li>
  <li>Baby Shower Photography</li>
  <li>Product Photography</li>
  <li>House Warming Photography</li>
                        </ul>
                    </div>
                    

                    <div className="col-md-4 col-sm-6 col-6" style={{padding:'5px'}}>
                    <h4 className="heading">Useful Links</h4>
                    <span className="footer-line"></span>
                    <br/><br/>
                        <ul>
                            <li><NavLink to="/" className="rmnavlnk">Home</NavLink></li>
                            <li><NavLink  to="/Aboutus" className="rmnavlnk">About Us</NavLink></li>
                            <li><NavLink  to="/Contactus" className="rmnavlnk">Contact Us</NavLink></li>
                        </ul>
                        <br/>
                        
                        <p style={{color:'#8acaf1'}}><b><i className="bi bi-envelope-at-fill"></i> manamphotography@gmail.com<br/>
                        <i className="bi bi-telephone-fill"></i> +91 090957 55397<br/>
                        <i className="bi bi-telephone-fill"></i> +91 94865 45985</b></p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Footer;

