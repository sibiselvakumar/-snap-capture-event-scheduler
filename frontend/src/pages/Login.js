import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/login.css";

const Login = ({ setLoggedIn }) => {
  function getdate1() {
    const date1 = new Date();

    let day1 = date1.getDate();
    let month1 = date1.getMonth() + 1;
    let year1 = date1.getFullYear();
    let hours = date1.getHours();
    let minutes = date1.getMinutes();
    let seconds = date1.getSeconds();

    return `${day1}${month1}${year1}${hours}${minutes}${seconds}`;
  }

  const [otp, setOtpt] = useState([]);
  const sendotp = async () => {
    try {
      const otp1 = getdate1();
      const result = await axios.post("http://localhost:8081/sendotp", {
        otp1,
        upemail,
      });
      if (result.data === "success") {
        setOtpt(otp1);
        alert("otp sended");
      } else {
        alert("something went wrong please try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //--------------------User Login---------------------------------------------
  const [lemail, setLemail] = useState([]);
  const [lpassword, setLpassword] = useState([]);
  const userLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:8081/Userlogin", {
        lemail,
        lpassword,
      });
      if (result.data[0] === "success") {
        localStorage.setItem("userName", result.data[1]);
        localStorage.setItem("userId", result.data[2]);
        localStorage.setItem("userEmail", result.data[3]);
        document.getElementById("loginform").reset();
        alert("Welcome, " + result.data[1]);
        localStorage.setItem("userData", "0");
        setLoggedIn(true);
        document.getElementById("closebtnlogin").click();
      } else {
        alert("Invalid Email or Password");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // ---------------------------------------------------------------------------------

  // --------------user register-----------------------
  const [ruser, setRuser] = useState([]);
  const [rphone, setRphone] = useState([]);
  const [remail, setRemail] = useState([]);
  const [rpassword, setRpassword] = useState([]);
  const userRegister = async (event) => {
    event.preventDefault();
    if (rphone.toString().length !== 10 || rphone < 6000000000) {
      alert("The phone number you entered is invalid.");
    } else {
      if (!(rpassword.length >= 8 && rpassword.length <= 20)) {
        alert("Password between 8 and 20 characters in length.");
      } else {
        try {
          const result = await axios.post(
            "http://localhost:8081/UserRegister",
            { ruser, rphone, remail, rpassword }
          );
          if (result.data === "Alreadyexist") {
            alert("phone number ou email-id you provided is already exist.");
          } else {
            document.getElementById("registerform").reset();
            alert("successfully registered.");
            document.getElementById("closebtnlogin1").click();
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  // ---------------------------------------------------------------------------------

  // -------------------------Update Password-----------------------------------------
  const [upemail, setUpemail] = useState([]);
  const [uppassword, setUppassword] = useState([]);
  const [otp2, setOtp2] = useState([]);
  const userUpdatepassword = async (event) => {
    event.preventDefault();
    if (!(uppassword.length >= 8 && uppassword.length <= 16)) {
      alert("Password Length should between 8 to 20 characters");
    } else if (otp !== otp2) {
      alert("invalid otp");
    } else {
      try {
        const result = await axios.post("http://localhost:8081/UserPassword", {
          upemail,
          uppassword,
        });
        if (result.data === "success") {
          document.getElementById("updatepasswordform").reset();
          alert("Password Changed");
          document.getElementById("closebtnlogin2").click();
        } else {
          alert("wrong mail id");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  // ---------------------------------------------------------------------------------

  return (
    <div className="login-root">
      {/* ------------------login----------------------- */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalToggleLabel"
                style={{ color: "#091a24", fontWeight: "bold" }}
              >
                Login Form
              </h1>
              <button
                id="closebtnlogin"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={userLogin} id="loginform">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-envelope-at-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-describedby="basic-addon1"
                    required
                    onChange={(e) => setLemail(e.target.value)}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-describedby="basic-addon2"
                    required
                    onChange={(e) => setLpassword(e.target.value)}
                  />
                </div>

                <div
                  style={{
                    textAlign: "right",
                    color: "#091a24",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  data-bs-target="#exampleModalToggle4"
                  data-bs-toggle="modal"
                >
                  Forgot Password?
                </div>

                <div style={{ textAlign: "center" }}>
                  <button className="lgbtn">Login</button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <span
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  width: "100%",
                  fontSize: "16px",
                }}
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Dont have an account?
                <span style={{ color: "#091a24", fontWeight: "bold" }}>
                  &nbsp; Sign Up!
                </span>
              </span>
              {/* <button id="closebtnlogin" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------register--------------------------- */}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalToggleLabel2"
                style={{ color: "#091a24", fontWeight: "bold" }}
              >
                Registration Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="registerform" onSubmit={userRegister}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-heart"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    aria-describedby="basic-addon3"
                    required
                    onChange={(e) => setRuser(e.target.value)}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="bi bi-telephone-plus-fill"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    aria-describedby="basic-addon2"
                    required
                    onChange={(e) => setRphone(e.target.value)}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon4">
                    <i className="bi bi-envelope-at-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-describedby="basic-addon4"
                    required
                    onChange={(e) => setRemail(e.target.value)}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon5">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-describedby="basic-addon5"
                    required
                    onChange={(e) => setRpassword(e.target.value)}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button className="lgbtn">Register</button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <span
                id="closebtnlogin1"
                style={{ margin: "0 auto", cursor: "pointer" }}
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Already have an account?
                <span style={{ color: "#091a24", fontWeight: "bold" }}>
                  &nbsp; Sign In!
                </span>
              </span>
              {/* <button className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------forgot password----------------------- */}
      <div
        className="modal fade"
        id="exampleModalToggle4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel4"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalToggleLabel4"
                style={{ color: "#091a24", fontWeight: "bold" }}
              >
                Change Password
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="updatepasswordform" onSubmit={userUpdatepassword}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon8">
                    <i className="bi bi-envelope-at-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-describedby="basic-addon8"
                    required
                    onChange={(e) => setUpemail(e.target.value)}
                  />
                </div>

                <span
                  style={{ float: "right" }}
                  className="btn btn-info btn-sm"
                  onClick={sendotp}
                >
                  Send Otp
                </span>
                <br />
                <br />

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon9">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    aria-describedby="basic-addon9"
                    required
                    onChange={(e) => setUppassword(e.target.value)}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon9">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="OTP"
                    aria-describedby="basic-addon9"
                    required
                    onChange={(e) => setOtp2(e.target.value)}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <button className="lgbtn">UPDATE</button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <span
                id="closebtnlogin2"
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  width: "100%",
                  fontSize: "16px",
                }}
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Go bact to
                <span style={{ color: "#091a24", fontWeight: "bold" }}>
                  &nbsp; Sign In!
                </span>
              </span>
              {/* <button id="closebtnlogin" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
