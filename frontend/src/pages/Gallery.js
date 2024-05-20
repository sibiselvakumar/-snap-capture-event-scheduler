/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/aboutus.css";

const Gallery = () => {
  // ------------------------view event-------------------------------------------
  const [viewevent, setViewevent] = useState([]);
  const viewEvent = async () => {
    try {
      const result = await axios("http://localhost:8081/ViewEvent");
      setViewevent(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [en, setEn] = useState([]);
  const [ename, setEname] = useState([]);
  const evgl = async (eid, ename) => {
    setEname(ename);
    try {
      const result = await axios.post("http://localhost:8081/eventdtuser", {
        eid,
      });
      setEn(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const evgl1 = async () => {
    setEname("All Events");
    try {
      const result = await axios("http://localhost:8081/eventdtuser1");
      setEn(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "Manam | Gallery";
    viewEvent();
    evgl1();
  }, []);

  return (
    <div className="aboutus-root">
      <div className="aboutus">
        <span style={{ paddingLeft: "40px" }}>Gallery</span>
      </div>
      <div className="container-md" style={{ marginTop: "40px" }}>
        <span onClick={evgl1} className="btn btn-primary">
          All Events
        </span>
        &nbsp;
        {viewevent.map((result, index) => {
          return (
            <>
              <span
                onClick={() => {
                  evgl(result.eid, result.ename);
                }}
                className="btn btn-primary"
              >
                {result.ename}
              </span>{" "}
              &nbsp;
            </>
          );
        })}
        <br />
        <hr />
        <h5 style={{ color: "green", textAlign: "center" }}>{ename}</h5>
        <div class="row justify-content-center align-items-center g-2">
          {en.map((result, index) => {
            return (
              <div
                className="col-md-6 col-sm-6 col-6"
                style={{ padding: "20px" }}
              >
                <div
                  className="shadow"
                  style={{ border: "1px solid gray", borderRadius: "8px" }}
                >
                  <img
                    className="img-fluid zoom"
                    src={"http://localhost:8081/" + result.eimage}
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="image1"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
