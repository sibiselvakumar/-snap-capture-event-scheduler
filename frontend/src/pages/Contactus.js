/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/aboutus.css";

const Aboutus = () => {
  useEffect(() => {
    document.title = "Manam | Contactus";
  }, [])


  return (
    <div className='aboutus-root'>
      <div className='aboutus'>
        <span style={{ paddingLeft: '40px' }}>Contact Us</span>
      </div>
      <div className='aboutushome'>
        <span style={{ color: '#8acaf1' }}><i className="bi bi-house-door"></i> Home </span> <i className="bi bi-chevron-double-right"></i> <span style={{ color: 'gray' }}>Contact Us</span>
      </div>

      <div className='container-md' style={{ marginTop: '40px' }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-sm-12" style={{ textAlign: 'center' }}>
            <img src={require("../images/contactus.jpg")} style={{maxWidth:'85%'}} className="img-fluid" alt="slider2" />

          </div>
          <div className="col-md-6 col-sm-12" style={{ color: 'gray', textAlign: 'justify' }}>
          <h2 style={{color:'#091a24',fontWeight:'bold'}}>Contact Us</h2>
            <span className="aboutus-line"></span>
            <br /><br />

       <div className='row'>
<div className='col-md-12 col-sm-6 cupd'>
<div className='contactus-container shadow'>
  <div className='left-box'><i className="bi bi-telephone-fill"></i></div>
  <div className='right-box'>
    {/* <b style={{color:'black'}}>PHONE</b> */}
    +91 90957 55397
  </div>
</div>

</div>

<div className='col-md-12 col-sm-6 cupd'>
<div className='contactus-container shadow'>
  <div className='left-box'><i className="bi bi-envelope-at-fill"></i></div>
  <div className='right-box'>
    {/* <b style={{color:'black'}}>Email</b> */}
    manamphotography@gmail.com
  </div>
</div>

</div>

<div className='col-md-12 col-sm-12 cupd'>
<div className='shadow' style={{width:'100%',border:'1px solid #8acaf1',textAlign:'center',padding:'20px'}}>
<div className='contactus'><i className="bi bi-pin-fill"></i></div>
{/* <b style={{color:'black'}}><span style={{color:'#8acaf1'}}><i className="bi bi-pin-fill"></i></span> ADDRESS</b> */}
<br/>

 

Manam Studio,<br/>
Erode to Muthur - Main Road,<br/>
Modakurichi,<br/>
Tamil Nadu 638104,<br/>
India.
</div>
</div>
       </div>


   




            <p style={{ fontSize: '14px' }}>

            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Aboutus;