/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "../styles/addcategory.css";


const Eb = () => {

  useEffect(() => {
    eventDetails();
  }, []);

  const [eventdetails, setEventdetails] = useState([]);
  const eventDetails = async () => {
    try {
      const result = await axios("http://localhost:8081/eventbilling12adall");
      setEventdetails(result.data);
    } catch (err) {
      console.log(err);
    }
  }



  const upstatus = async (billno) => {
    try {
      const result = await axios.post("http://localhost:8081/eventbilling12adallup",{billno});
      if(result.data==="success")
      {
        alert("updated");
        eventDetails2();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const eventDetails1 = async () => {
    try {
      const result = await axios("http://localhost:8081/eventbilling12adnc");
      setEventdetails(result.data);
    } catch (err) {
      console.log(err);
    }
  }


  const eventDetails2 = async () => {
    try {
      const result = await axios("http://localhost:8081/eventbilling12adc");
      setEventdetails(result.data);
    } catch (err) {
      console.log(err);
    }
  }
  

  const geteventdt = async () => {
    try {
      var dt=document.getElementById("dt").value;
      const result = await axios.post("http://localhost:8081/geteventdt1212",{dt});
      setEventdetails(result.data);
      document.getElementById("dt").value="";
    } catch (err) {
      console.log(err);
    }
  }


  return (

    <div style={{ padding: '40px' }}>

{
                eventdetails.length > 0 ?
                  <>
                    <h5 style={{ color: 'red', textAlign: 'center' }}>Event Billing Details</h5>
                    <table className="table table-bordered border-info tabel-sm align-middle">
                      <thead>
                        <tr>
                          <th>Bill.No</th>
                          <th>User Id </th>
                          <th>Plan Name</th>
                          <th>Price</th>
                          <th>Event Date</th>
                          <th>Total Price</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          eventdetails.map((result, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row">{result.billno}</th>
                                <th scope="row">{result.uid}</th>
                                <th scope="row">{result.planname}</th>
                                <th scope="row">₹{result.price}.00</th>
                                <th>From Date : {new Date(result.fromdate).toLocaleDateString('en-GB')}
                                  <br />
                                  To Date : {new Date(result.todate).toLocaleDateString('en-GB')}
                                  <br />
                                  Amount Paid on : {new Date(result.datep).toLocaleDateString('en-GB')}
                                </th>
                                <td>₹{result.tprice}.00</td>
                                <td>{result.status === 0 ?
                                 <>
                                 <span style={{ color: 'brown' }}>Not Completed</span> <br/>
                                 <span onClick={()=>{upstatus(result.billno);}} className="btn btn-secondary">Complete</span>
                                 </>
                                 :
                                  <span style={{ color: 'green' }}>Completed</span>}</td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </>
                  :
                  <h5 style={{ textAlign: "center", color: 'blue' }}>No Details Found</h5>
              }



<span onClick={eventDetails} className="btn btn-primary">All Events</span>&nbsp;
<span onClick={eventDetails1} className="btn btn-primary">Not Completed</span>&nbsp;
<span onClick={eventDetails2} className="btn btn-primary">Completed</span>&nbsp;&nbsp;
<b><i class="bi bi-calendar-check"></i>Date</b>&nbsp;
<input className="input" id="dt" type="date" required pattern='\d{4}-\d{2}-\d{2}'
/>
<span onClick={geteventdt} className="btn btn-primary">Get</span>&nbsp;
    </div>



  );
}
export default Eb;