/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/aboutus.css";

const Userdetails = ({ isLoggedIn }) => {



  const [udetails, setUdetails] = useState([]);
  const userDetails = async () => {
    var uid = localStorage.getItem("userId");

    try {
      const result = await axios.post("http://localhost:8081/userdetails1",{uid});
      setUdetails(result.data);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    document.title = "Manam | My Profile";
    if (isLoggedIn) {
        userDetails();
    }
  }, [isLoggedIn]);


  return (
    <div className='aboutus-root'>
      <div className='aboutus'>
        <span style={{ paddingLeft: '40px' }}>My Profile</span>
      </div>
      <div className='container-md' style={{ marginTop: '40px' }}>

        {
          isLoggedIn ?
            <>
                    <h5 style={{ color: 'red', textAlign: 'center' }}>Event Billing Details</h5>
                    <table className="table table-bordered border-info tabel-sm align-middle">
                      <thead>
                        <tr>
                        <th>User Id </th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          udetails.map((result, index) => {
                            return (
                              <tr key={index}>
                                 <th scope="row">{result.user_id}</th>
                                <th scope="row">{result.name}</th>
                                <th scope="row">{result.phone}</th>
                                <th scope="row">{result.email}</th>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
              <br/>
              <hr/>
              <br/>
            </>
            :
            <h4 style={{ textAlign: "center", color: 'blue' }}>Login to access this page</h4>
        }
      </div>
    </div>
  );
}
export default Userdetails;