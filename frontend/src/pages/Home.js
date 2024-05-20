/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Manam";
  }, [])


  return (
    <div className='home-root'>
      {/* --------------------Slider----------------------------- */}
      <div className='container-md'>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner"  style={{textAlign:'center'}}>
          <div className="carousel-item active">
            <img src={require("../images/slider/s1.jpg")} style={{ maxHeight: '500px', width: '80%', objectFit: 'fill' }} className="img-fluid" alt="slider2" />
          </div>
          <div className="carousel-item">
            <img src={require("../images/slider/s2.jpg")} style={{ maxHeight: '500px', width: '80%', objectFit: 'fill' }} className="img-fluid" alt="slider2" />
          </div>
          <div className="carousel-item">
            <img src={require("../images/slider/s3.jpg")} style={{ maxHeight: '500px', width: '80%', objectFit: 'fill' }} className="img-fluid" alt="slider2" />
          </div>
          <div className="carousel-item">
            <img src={require("../images/slider/s4.jpg")} style={{ maxHeight: '500px', width: '80%', objectFit: 'fill' }} className="img-fluid" alt="slider2" />
          </div>
          <div className="carousel-item">
            <img src={require("../images/slider/s5.jpg")} style={{ maxHeight: '500px', width: '80%', objectFit: 'fill' }} className="img-fluid" alt="slider2" />
          </div>
        </div>
        <button  style={{backgroundColor:"#0f4264",height:"40px",width:'40px',margin:"auto"}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button style={{backgroundColor:"#0f4264",height:"40px",width:'40px',margin:"auto"}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>


      {/* ------------------------best packages------------------ */}
      <div className='container-md'>
      <div className="title-container" style={{marginBottom:'20px',paddingTop:'40px'}}>
        <div className="line"></div>
        <div className="title">Wedding<br /> <span style={{ display: 'inline-block', color: '#102e40', fontSize: '35px' }}>Packages</span></div>
        <div className="line"></div>
      </div>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-3 col-md-3 col-sm-6 col-6' style={{ textAlign: 'center', padding: '10px'}}>
           
           <div className='bstpackages shadow-sm'>
           <img src={require("../images/bestpckg/p1.jpg")} className="img-fluid bpih" alt="slider2" />
           <br/><br/>
           <div>Silver Package</div>
           <div>
            {/* <span style={{color:'grey',textDecoration:'line-through',fontWeight:'bolder'}}>
              <span style={{fontFamily:"monospace"}}>₹</span>
              899.00
            </span>&nbsp;&nbsp;
            <span style={{fontWeight:'bolder'}}>
              <span style={{fontFamily:"monospace"}}>₹</span>
              499.00
            </span> */}
            </div>
            {/* <div className='bpbtn'>View</div> */}
           

           </div>
           </div>

           <div className='col-lg-3 col-md-3 col-sm-6 col-6' style={{ textAlign: 'center', padding: '10px'}}>

           <div className='bstpackages shadow-sm'>
           <img src={require("../images/bestpckg/p2.jpg")} className="img-fluid bpih" alt="slider2" />
           <br/><br/>
           <div>Gold Package</div>
           <div>
            {/* <span style={{color:'grey',textDecoration:'line-through',fontWeight:'bolder'}}>
              <span style={{fontFamily:"monospace"}}>₹</span>
              899.00
            </span>&nbsp;&nbsp;
            <span style={{fontWeight:'bolder'}}>
              <span style={{fontFamily:"monospace"}}>₹</span>
              499.00
            </span> */}
            </div>
            {/* <div className='bpbtn'>View</div> */}
           

           </div>
           </div>

           <div className='col-lg-3 col-md-3 col-sm-6 col-6' style={{ textAlign: 'center', padding: '10px'}}>

           <div className='bstpackages shadow-sm'>
           <img src={require("../images/bestpckg/p3.jpg")} className="img-fluid bpih" alt="slider2" />
           <br/><br/>
           <div>Platinum Package</div>
           <div>
            {/* <span style={{color:'grey',textDecoration:'line-through',fontWeight:'bolder'}}>
              <span style={{fontFamily:"monospace"}}>₹</span>
              899.00
            </span>&nbsp;&nbsp;
            <span style={{fontWeight:'bolder'}}>
              <span style={{fontFamily:"monospace"}}>₹</span>
              499.00
            </span> */}
            </div>
            {/* <div className='bpbtn'>View</div> */}
           

           </div>
          </div>

          


        </div>
      </div>
      {/* ------------------------------------------------------- */}


      {/* -----------------welcome to Manam------------------ */}
      <div className="title-container">
        <div className="line"></div>
        <div className="title">What<br /> <span style={{ display: 'inline-block', color: '#102e40', fontSize: '35px' }}>We Do</span></div>
        <div className="line"></div>
      </div>
    <br/>
      <div className='container-md'>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3 col-sm-3 col-6" style={{ padding: '10px' }}>
            <div className='why-abi-bridal-content'>
              <img src={require("../images/whymanam/engmnt.jpg")} className='img-fluid' alt="slider2" />
              <div style={{ fontSize: '16px', fontWeight: '600', margin: '20px 0 35px 0' }}>Engagement<br/> Photography</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-6" style={{ padding: '10px' }}>
            <div className='why-abi-bridal-content'>
              <img src={require("../images/whymanam/prewdng.jpg")} className='img-fluid' alt="slider2" />
              <div style={{ fontSize: '16px', fontWeight: '600', margin: '20px 0 35px 0' }}>Post Wedding<br/> Photography</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-6" style={{ padding: '10px' }}>
            <div className='why-abi-bridal-content'>
              <img src={require("../images/whymanam/bday.jpg")} className='img-fluid' alt="slider2" />
              <div style={{ fontSize: '16px', fontWeight: '600', margin: '20px 0 35px 0' }}>Birthday<br/> Photography</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-6" style={{ padding: '10px' }}>
            <div className='why-abi-bridal-content'>
              <img src={require("../images/whymanam/babyshwr.jpg")} className='img-fluid' alt="slider2" />
              <div style={{ fontSize: '16px', fontWeight: '600', margin: '20px 0 35px 0' }}>Baby Shower<br/> Photography</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-6" style={{ padding: '10px' }}>
            <div className='why-abi-bridal-content'>
              <img src={require("../images/whymanam/pd.jpg")} className='img-fluid' alt="slider2" />
              <div style={{ fontSize: '16px', fontWeight: '600', margin: '20px 0 35px 0' }}>Product<br/> Photography</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-6" style={{ padding: '10px' }}>
            <div className='why-abi-bridal-content'>
              <img src={require("../images/whymanam/hswrmng.jpg")} className='img-fluid' alt="slider2" />
              <div style={{ fontSize: '16px', fontWeight: '600', margin: '20px 0 35px 0' }}>House Warming<br/> Photography</div>
            </div>
          </div>



        </div>
      </div>


  {/* ---------------------why manam---------------------- */}
  <div className='container-md'>
  <div className="title-container">
        <div className="line"></div>
        <div className="title">Why<br /> <span style={{ display: 'inline-block', color: '#102e40', fontSize: '35px' }}>Manam?</span></div>
        <div className="line"></div>
      </div>

      <div class="row justify-content-center align-items-center g-2" >
        <div class="col-md-6 col-sm-12" style={{padding:'10px',textAlign:'justify',color:'#214683'}}>
<p>
Manam Photography, established in 2021, is a premier photography service specializing in capturing the most precious 
moments of life. With a dedicated team of 12 to 15 skilled professionals divided into two teams, we excel in various
 photography genres including weddings, pre-weddings, post-weddings, baby showers, maternity, engagements, housewarmings, 
 and product photography. 
</p>
<p>Committed to providing exceptional service, we are proud to introduce an online booking concept 
 through our website, making it easier for clients to secure our services 
and immortalize their special occasions with timeless photographs.</p>
        </div>
        <div class="col-md-6 col-sm-12" style={{padding:'10px',textAlign:'center'}}>
        <img src={require("../images/whymanam.jpg")} style={{maxHeight:'400px'}} className="img-fluid bpih" alt="slider2" />

        </div>
      </div>
      </div>
      {/* --------------------------------------------- */}

      <div style={{ marginTop: '80px' }}></div>



    </div>
  );
}

export default Home;