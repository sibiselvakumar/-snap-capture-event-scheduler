/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "../styles/addcategory.css";


const Eb1 = () => {

  useEffect(() => {
    eventDetailsebb1();
  }, []);

  const [eventdetails12eb, setEventdetails12eb] = useState([]);
  const eventDetailsebb1 = async () => {
    try {
      const result = await axios("http://localhost:8081/eventbilling12adall1");
      setEventdetails12eb(result.data);
    } catch (err) {
      console.log(err);
    }
  }


  const upstatus1 = async (billno) => {
    try {
      const result = await axios.post("http://localhost:8081/eventbilling12adallup1",{billno});
      if(result.data==="success")
      {
        alert("updated");
        eventDetails2ebb1();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const eventDetails1ebb1 = async () => {
    try {
      const result = await axios("http://localhost:8081/eventbilling12adnc1");
      setEventdetails12eb(result.data);
    } catch (err) {
      console.log(err);
    }
  }


  const eventDetails2ebb1 = async () => {
    try {
      const result = await axios("http://localhost:8081/eventbilling12adc1");
      setEventdetails12eb(result.data);
    } catch (err) {
      console.log(err);
    }
  }
  

  const geteventdt1 = async () => {
    try {
      var dt=document.getElementById("dt1").value;
      const result = await axios.post("http://localhost:8081/geteventdt12121",{dt});
      setEventdetails12eb(result.data);
      document.getElementById("dt1").value="";
    } catch (err) {
      console.log(err);
    }
  }



  return (

    <div style={{ padding: '40px' }}>

{
                eventdetails12eb.length > 0 ?
                  <>
                    <h5 style={{ color: 'red', textAlign: 'center' }}>Wedding & Reception Billing Details</h5>
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
                          eventdetails12eb.map((result, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row">{result.billno}</th>
                                <th scope="row">{result.uid}</th>
                                <th scope="row">{result.pname}</th>
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
                                <span style={{ color: 'brown' }}>Not Completed</span>
                                <br/>
                                 <span onClick={()=>{upstatus1(result.billno);}} className="btn btn-secondary">Complete</span>
                                 </> :
                                  <span style={{ color: 'green' }}>Completed</span>}</td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </>
                  :
                  <h5 style={{ textAlign: "center", color: 'blue' }}>No Wedding & Reception Even's Booked</h5>
              }



<span onClick={eventDetailsebb1} className="btn btn-primary">All Events</span>&nbsp;
<span onClick={eventDetails1ebb1} className="btn btn-primary">Not Completed</span>&nbsp;
<span onClick={eventDetails2ebb1} className="btn btn-primary">Completed</span>&nbsp;&nbsp;
<b><i class="bi bi-calendar-check"></i>Date</b>&nbsp;
<input className="input" id="dt1" type="date" required pattern='\d{4}-\d{2}-\d{2}'
/>
<span onClick={geteventdt1} className="btn btn-primary">Get</span>&nbsp;
    </div>



  );
}
export default Eb1;