/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
// import QRCode from 'react-qr-code';
import StripeCheckout from "react-stripe-checkout";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/aboutus.css";

const Eventlist = ({ isLoggedIn }) => {
  var { eid, ename } = useParams();

  const today = new Date();
  today.setDate(today.getDate() + 5);
  const todayString = today.toISOString().split("T")[0];

  // ---------------checkDate------------------------------
  const [tp, setTp] = useState(0);
  const [d1, setD1] = useState([]);
  const [d2, setD2] = useState([]);
  const [eid1, setEid] = useState([]);
  const [edit, setEdit] = useState([]);
  const [planname, setPlanname] = useState([]);
  const [price, setPrice] = useState([]);

  const checkDate = async (edit, eid, planname, price) => {
    const fromDate = new Date(d1);
    const toDate = new Date(d2);
    if (d1 === "0000-00-00" || d2 === "0000-00-00") {
      alert("Invalid Date");
    } else if (fromDate > toDate) {
      alert("Invalid date range");
    } else {
      const numDays = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24));
      const tprice = (numDays + 1) * price;

      try {
        const result = await axios.post("http://localhost:8081/ckdt", {
          d1,
          d2,
        });
        if (result.data === "success") {
          setTp(tprice);
          setD1(d1);
          setD2(d2);
          setPlanname(planname);
          setEdit(edit);
          setEid(eid);
          setPrice(price);
          // bookOrder(edit, eid, planname, price);
          document.getElementById("qrcodebtn").click();
        } else {
          alert("Date not Available");
          fnreset();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // -----------------book event-------------------

  const bookOrder = async (token) => {
    var uid = localStorage.getItem("userId");
    var name = localStorage.getItem("userName");
    var email = localStorage.getItem("userEmail");

    try {
      const result = await axios.post("http://localhost:8081/bookOrderel", {
        uid,
        name,
        email,
        eid1,
        edit,
        planname,
        price,
        d1,
        d2,
        tp,
        token,
      });
      if (result.data === "success") {
        document.getElementById("clbtn1212").click();
        alert(
          "event booked successfully, for more details see My Bookings in profile menu"
        );
        fnreset();
      } else {
        alert("something went wrong try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  function fnreset() {
    document.getElementById("d1").value = "";
    document.getElementById("d2").value = "";
    setD1("0000-00-00");
    setD2("0000-00-00");
    setTp("");
    setPlanname("");
    setEdit("");
    setEid("");
    setPrice("");
  }

  const [eventdetails, setEventdetails] = useState([]);

  useEffect(() => {
    document.title = "Manam | Events";
    setD1("0000-00-00");
    setD2("0000-00-00");
    const eventDetails = async () => {
      try {
        const result = await axios.post(
          "http://localhost:8081/eventDetailseventlist",
          { eid }
        );
        setEventdetails(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    eventDetails();
  }, [eid, ename]);

  const [bdt, setBdt] = useState([]);
  const bookeddt = async () => {
    try {
      const result = await axios("http://localhost:8081/eventbookeddate");
      setBdt(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="aboutus-root">
      <div className="aboutus">
        <span style={{ paddingLeft: "40px" }}>{ename}</span>
      </div>

      <div className="container-md" style={{ marginTop: "40px" }}>
        <div className="row justify-content-center align-items-center">
          {eventdetails.map((result, index) => {
            return (
              <>
                <div
                  className="col-md-6 col-sm-12"
                  style={{ textAlign: "center", margin: "auto" }}
                >
                  {/* <img src={require("../images/aboutus.jpg")} style={{width:'85%'}} className="img-fluid" alt="slider2" /> */}
                  <img
                    className="img-fluid"
                    src={"http://localhost:8081/" + result.eimage}
                    style={{ height: "300px", objectFit: "cover" }}
                    alt="image1"
                  />
                </div>
                <div
                  className="col-md-6 col-sm-12"
                  style={{
                    padding: "20px",
                    fontWeight: 600,
                    textAlign: "justify",
                    margin: "auto",
                  }}
                >
                  <h4 style={{ color: "#091a24", fontWeight: "bold" }}>
                    {ename}
                  </h4>
                  <span className="aboutus-line"></span>

                  <div style={{ margin: "10px 0 5px 0", color: "gray" }}>
                    {result.planname}
                  </div>
                  <div style={{ fontWeight: "600", color: "green" }}>
                    Price : ₹{result.price}.00
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      padding: "20px",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    {isLoggedIn ? (
                      <>
                        <label>
                          <i class="bi bi-calendar-check"></i> From Date :
                        </label>
                        <input
                          style={{ width: "100%" }}
                          type="date"
                          required
                          pattern="\d{4}-\d{2}-\d{2}"
                          id="d1"
                          min={todayString}
                          onChange={(e) => setD1(e.target.value)}
                        />
                        <br />
                        <br />
                        <label>
                          <i class="bi bi-calendar-check"></i> TO DATE :
                        </label>
                        <input
                          style={{ width: "100%" }}
                          type="date"
                          pattern="\d{4}-\d{2}-\d{2}"
                          id="d2"
                          min={todayString}
                          onChange={(e) => setD2(e.target.value)}
                        />
                        <br />
                        <br />
                        <span
                          onClick={() => {
                            checkDate(
                              result.edit,
                              result.eid,
                              result.planname,
                              result.price
                            );
                          }}
                          className="lgbtn"
                        >
                          Book Event
                        </span>
                        <span
                          onClick={fnreset}
                          style={{
                            float: "right",
                            backgroundColor: "orangered",
                          }}
                          className="lgbtn"
                        >
                          Reset
                        </span>
                        <span
                          onClick={bookeddt}
                          className="lgbtn"
                          style={{
                            float: "right",
                            backgroundColor: "blue",
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdropdt"
                        >
                          Show Booked Date
                        </span>
                      </>
                    ) : (
                      <span className="btn btn-secondary">
                        Login to Book Event
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-12"
                  style={{ padding: "20px", fontWeight: "600" }}
                >
                  <div
                    style={{
                      color: "#091a24",
                      fontWeight: "bold",
                      fontSize: "22px",
                      margin: "10px 0 0 0",
                    }}
                  >
                    Description
                  </div>
                  <span className="aboutus-line"></span>
                  <br />
                  <br />
                  <span style={{ whiteSpace: "pre-wrap" }}>{result.desc2}</span>
                </div>
                <div
                  className="col-md-6 col-sm-12"
                  style={{ padding: "20px", fontWeight: "600" }}
                >
                  <div
                    style={{
                      color: "#091a24",
                      fontWeight: "bold",
                      fontSize: "22px",
                      margin: "10px 0 0 0",
                    }}
                  >
                    Details
                  </div>
                  <span className="aboutus-line"></span>
                  <br />
                  <br />
                  <span
                    style={{
                      whiteSpace: "pre-wrap",
                      color: "rgb(226, 74, 99)",
                    }}
                  >
                    {result.desc1}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* -----------------modal------------------------ */}

      <span
        id="qrcodebtn"
        style={{ visibility: "hidden" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModalqr"
      ></span>

      <div
        class="modal fade"
        id="exampleModalqr"
        tabindex="-1"
        aria-labelledby="exampleModalLabelqr"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <table class="table shadow" style={{ fontWeight: "600" }}>
              <tbody>
                <tr>
                  <th>User Id</th>
                  <td>{localStorage.getItem("userId")}</td>
                </tr>

                <tr>
                  <th>Event Name</th>
                  <td>{planname}</td>
                </tr>

                <tr>
                  <th>Price</th>
                  <td>Rs : {price}</td>
                </tr>

                <tr>
                  <th>From</th>
                  <td>{d1}</td>
                </tr>

                <tr>
                  <th>To</th>
                  <td>{d2}</td>
                </tr>

                <tr>
                  <th>Total</th>
                  <td>Rs : {tp}</td>
                </tr>
              </tbody>
            </table>

            {/* <div class="modal-body" style={{ textAlign: "center" }}>
              <QRCode
                title="qr code"
value={`User Id : ${localStorage.getItem("userId")}
Event Name : ${planname}
Date : ${d1} - ${d2}
Amount : ${tp}
Paid Successfully
`}
                bgColor="white"
                fgColor="black"
                size="300"
              />
          </div>*/}
            <div className="modal-footer">
              <StripeCheckout
                name={planname}
                amount={tp * 100}
                stripeKey="pk_test_51PBvuKSJXmEF31NGqjW0DIJTOiwhls3mwGWTjJOwgmtoDO7Z07Clzd580YMHoIBTbFHFTTnTzaInyaQfYxmLT0jh00rvkjYq4z"
                currency="INR"
                token={bookOrder}
                panelLabel={`Place Order`}
              />
              {/* <div style={{ textAlign: 'center' }}><button onClick={bookOrder} type="button" class="btn btn-success" data-bs-dismiss="modal">Done</button></div> */}
              <button
                id="clbtn1212"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}

      {/* --------------date--------------------- */}

      <div
        class="modal fade"
        id="staticBackdropdt"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Date not available
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {bdt.map((result, index) => {
                return (
                  <>
                    <b>From Date : </b>{" "}
                    {new Date(result.fromdate).toLocaleDateString("en-GB")} -
                    <b>To Date : </b>
                    {new Date(result.todate).toLocaleDateString("en-GB")}
                    <br />
                  </>
                );
              })}
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> */}
          </div>
        </div>
      </div>
      {/* -------------------------------------------- */}
    </div>
  );
};

export default Eventlist;
