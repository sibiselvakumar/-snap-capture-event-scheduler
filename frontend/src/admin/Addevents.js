/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "../styles/addcategory.css";


const Addevents = () => {

  useEffect(() => {
      viewEvent();
  },[]);


  //--------------------add event---------------------------------------------
  const [addeventname, setAddeventname] = useState([]);

  const addEvent = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:8081/AddEvent", { addeventname });
      if (result.data === "Alreadyexist") {
        alert("Already Exist")
      }
      else {
        document.getElementById("addevent").reset();
        //alert("Success")
        viewEvent();
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  // ------------------------view event-------------------------------------------
  const [viewevent, setViewevent] = useState([]);
  const viewEvent = async () => {
    try {
      const result = await axios("http://localhost:8081/ViewEvent");
      setViewevent(result.data)
    }
    catch (err) {
      console.log(err)
    }
  }


  return (

    <div style={{padding:'40px'}}>
        
  <form id='addevent' onSubmit={addEvent}>
                <input className="input" type="text" required style={{ textTransform: 'lowercase'}}
                  onChange={e => setAddeventname(e.target.value)} placeholder="Event Name"/>
                
          &nbsp;
                <button className='lgbtn'>
                  ADD Event
                </button>
                
              </form>
<br/>

      <table className="table table-bordered border-info tabel-sm align-middle">
       <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Event Name</th>
            {/* <th scope="col">Edit</th> */}
          </tr>
          </thead>
        <tbody>
          {
            viewevent.map((result, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td style={{textTransform:'capitalize'}}>{result.ename}</td>
                  {/* <td><i class="bi bi-pencil-fill"></i></td> */}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>


  
  );
}
export default Addevents;