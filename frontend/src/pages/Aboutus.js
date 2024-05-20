/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/aboutus.css";

const Aboutus = () => {
  useEffect(() => {
    document.title = "Manam | Aboutus";
  }, [])


  return (
    <div className='aboutus-root'>
      <div className='aboutus'>
        <span style={{paddingLeft:'40px'}}>About Us</span>
      </div>
      <div className='aboutushome'>
        <span style={{color:'#8acaf1'}}><i className="bi bi-house-door"></i> Home </span> <i className="bi bi-chevron-double-right"></i> <span style={{color:'gray'}}>About Us</span>
      </div>
      
      <div className='container-md' style={{marginTop:'40px'}}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-sm-12" style={{textAlign:'center'}}>
          <img src={require("../images/aboutus.jpg")} style={{width:'85%'}} className="img-fluid" alt="slider2" />
                      
          </div>
          <div className="col-md-6 col-sm-12"  style={{color:'gray',textAlign:'justify'}}>
            <h2 style={{color:'#091a24',fontWeight:'bold'}}>About Manam</h2>
            <span className="aboutus-line"></span>
                    <br/><br/>
            <p style={{fontSize:'14px',color:'#091a24'}}>
            Manam Photography, established in 2021, is a premier photography service specializing in capturing the most precious 
moments of life. With a dedicated team of 12 to 15 skilled professionals divided into two teams, we excel in various
 photography genres including weddings, pre-weddings, post-weddings, baby showers, maternity, engagements, housewarmings, 
 and product photography. 
<br/><br/>
Committed to providing exceptional service, we are proud to introduce an online booking concept 
 through our website, making it easier for clients to secure our services 
and immortalize their special occasions with timeless photographs.
            </p>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default Aboutus;