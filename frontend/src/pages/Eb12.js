/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/aboutus.css";

const Eventbilling = ({ isLoggedIn }) => {


  const [eventdetails, setEventdetails] = useState([]);
  const eventDetails = async () => {
    var uid = localStorage.getItem("userId");
    try {
      const result = await axios.post("http://localhost:8081/eventbilling12", { uid });
      setEventdetails(result.data);
    } catch (err) {
      console.log(err);
    }
  }

  const [eventdetails1, setEventdetails1] = useState([]);
  const eventDetails1 = async () => {
    var uid = localStorage.getItem("userId");
    try {
      const result = await axios.post("http://localhost:8081/eventbilling1212", { uid });
      setEventdetails1(result.data);
    } catch (err) {
      console.log(err);
    }
  }





  useEffect(() => {
    document.title = "Manam | Events Billings";
    if (isLoggedIn) {
      eventDetails();
      eventDetails1();
    }
  }, [isLoggedIn]);


  return (
    <div className='aboutus-root'>
      <div className='aboutus'>
        <span style={{ paddingLeft: '40px' }}>Billing Info</span>
      </div>
      <div className='container-md' style={{ marginTop: '40px' }}>

        {
          isLoggedIn ?
            <>
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
                                <td>{result.status === 0 ? <span style={{ color: 'brown' }}>Not Completed</span> :
                                  <span style={{ color: 'green' }}>Completed</span>}</td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </>
                  :
                  <h5 style={{ textAlign: "center", color: 'blue' }}>No Event's Booked</h5>
              }
              <br/>
              <hr/>
              <br/>
              {
                eventdetails1.length > 0 ?
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
                          eventdetails1.map((result, index) => {
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
                                <td>{result.status === 0 ? <span style={{ color: 'brown' }}>Not Completed</span> :
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
            </>
            :
            <h4 style={{ textAlign: "center", color: 'blue' }}>Login to access this page</h4>
        }
      </div>
    </div>
  );
}
export default Eventbilling;