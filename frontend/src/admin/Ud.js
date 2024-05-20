/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "../styles/addcategory.css";


const Ud = () => {

  useEffect(() => {
    userDetails();
  }, []);

  const [udetails, setUdetails] = useState([]);
  const userDetails = async () => {
    try {
      const result = await axios("http://localhost:8081/userdetailsadmin");
      setUdetails(result.data);
    } catch (err) {
      console.log(err);
    }
  }




  return (

    <div style={{ padding: '40px' }}>

{
                udetails.length > 0 ?
                  <>
                    <h5 style={{ color: 'red', textAlign: 'center' }}>User Details</h5>
                    <table className="table table-bordered border-info tabel-sm align-middle">
                      <thead>
                        <tr>
                          <th>S.No</th>
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
                                <th scope="row">{index+1}</th>
                                <th scope="row">{result.user_id}</th>
                                <th scope="row">{result.name}</th>
                                <th scope="row">{result.phone}</th>
                                <th scope="row">{result.email}</th>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </>
                  :
                  <h5 style={{ textAlign: "center", color: 'blue' }}>No Details Found</h5>
              }
    </div>



  );
}
export default Ud;