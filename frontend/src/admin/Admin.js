import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/login1.css";

const Admin = () => {
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

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Manam | Admin";
    // Check if the user is already logged in, then redirect to home
    if (localStorage.getItem("adminData")) {
      navigate("/Dashboard");
    }
  }, [navigate]);

  //--------------------User Login---------------------------------------------
  const [lemail, setLemail] = useState([]);
  const [lpassword, setLpassword] = useState([]);
  const userLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:8081/Adminlogin", {
        lemail,
        lpassword,
      });
      if (result.data === "success") {
        document.getElementById("loginform").reset();
        alert("you are Logged-in");
        localStorage.setItem("adminData", "0");
        navigate("/Dashboard");
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
            "http://localhost:8081/AdminRegister",
            { ruser, rphone, remail, rpassword }
          );
          if (result.data === "Alreadyexist") {
            alert("Admin already registered");
            document.getElementById("registerform").reset();
          } else {
            document.getElementById("registerform").reset();
            alert("successfully registered");
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
        const result = await axios.post("http://localhost:8081/AdminPassword", {
          upemail,
          uppassword,
        });
        if (result.data === "success") {
          document.getElementById("updatepasswordform").reset();
          alert("Password Changed");
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
    <div className="login1-root">
      <div className="aboutus1">
        <img
          src={require("../images/logo.png")}
          style={{ height: "60px" }}
          className="img-fluid"
          alt="slider2"
        />

        <span style={{ paddingLeft: "40px" }}>ADMIN</span>
      </div>
      <div style={{ height: "75px" }}></div>
      <div className="container-md">
        {/* ------------------login----------------------- */}
        <div class="row justify-content-center align-items-center g-2">
          <div
            className="col-md-6 col-sm-6 shadow"
            style={{ padding: "70px 20px", border: "1px solid gray" }}
          >
            <h1 style={{ color: "#091a24", fontWeight: "bold" }}>Login Form</h1>
            <br />
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

              <div style={{ textAlign: "center" }}>
                <button className="lgbtn">Login</button>
              </div>
            </form>

            {/* <button id="closebtnlogin" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button> */}
          </div>

          {/* ------------------forgot password----------------------- */}

          <div
            className="col-md-6 col-sm-6 shadow"
            style={{ padding: "20px", border: "1px solid gray" }}
          >
            <h1 style={{ color: "#091a24", fontWeight: "bold" }}>
              Change Password
            </h1>
            <br />
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

            {/* <button id="closebtnlogin" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button> */}
          </div>

          {/* ------------------------register--------------------------- */}

          <div
            className="col-md-12 col-sm-6 shadow"
            style={{ padding: "20px", border: "1px solid gray" }}
          >
            <h1 style={{ color: "#091a24", fontWeight: "bold" }}>
              Registration Form
            </h1>
            <br />

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

            {/* <button className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
