/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "../styles/addcategory.css";


const Addeventdetails = () => {

  useEffect(() => {
    viewEventdetails();
  }, []);


  //--------------------add eventdetails---------------------------------------------


  const [ename, setEname] = useState([]);
  const [eid, setEid] = useState([]);
  const [epn, setEpn] = useState([]);
  const [ed1, setEd1] = useState([]);
  const [ed2, setEd2] = useState([]);
  const [eprice, setEprice] = useState([]);
  const [eimage, setEimage] = useState([]);



  const addEventdetails = async (event) => {
    event.preventDefault();


    const formdata = new FormData();
    formdata.append('ename', ename);
    formdata.append('eid', eid);
    formdata.append('epn', epn);
    formdata.append('ed1', ed1);
    formdata.append('ed2', ed2);
    formdata.append('eprice', eprice);
    formdata.append('eimage', eimage);

    if (document.getElementById("smpn").value !== "0") {
      try {
        const result = await axios.post("http://localhost:8081/AddEventdetails", formdata);
        if (result.data === "Alreadyexist") {
          alert("Already Exist")
        }
        else {
          document.getElementById("addeventdetails").reset();
          //alert("Success")
          viewEventdetails();
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    else {
      alert("please choose event type");
    }
  }

  // ------------------------get eventdetails-------------------------------------------
  const [vieweventdetails, setVieweventdetails] = useState([]);
  const viewEventdetails = async () => {
    try {
      const result = await axios("http://localhost:8081/ViewEventdetails");
      setVieweventdetails(result.data)
    }
    catch (err) {
      console.log(err)
    }
  }


  // ------------------------get event-------------------------------------------
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

  // -----------------get event name from event id----------------------------

  function getEventname(eid) {
    for (var i = 0; i < viewevent.length; i++) {
      if (viewevent[i].eid === Number.parseInt(eid)) {
        setEname(viewevent[i].ename);
      }
    }
  }


  const [editu, setEditu] = useState([]);
  const [plannameu, setPlannameu] = useState([]);
  const [ed1u, setEd1u] = useState([]);
  const [ed2u, setEd2u] = useState([]);
  const [epriceu, setEpriceu] = useState([]);
  const [eimageu, setEimageu] = useState([]);
  function updateeventdetails(edit,planname,desc1,desc2,price)
  {
    document.getElementById("planname").value = planname;
    document.getElementById("desc1").value = desc1;
    document.getElementById("desc2").value = desc2;
    document.getElementById("price").value = price;
    document.getElementById("btnclk").click();

    setEditu(edit);
    setPlannameu(planname);
    setEd1u(desc1);
    setEd2u(desc2);
    setEpriceu(price);
  }


  const addEventdetails12 = async (event) => {
    event.preventDefault();


    const formdata1 = new FormData();
    formdata1.append('editu',editu);
    formdata1.append('plannameu',plannameu);
    formdata1.append('ed1u',ed1u);
    formdata1.append('ed2u',ed2u);
    formdata1.append('epriceu', epriceu);
    formdata1.append('eimageu', eimageu);

      try {
        const result = await axios.post("http://localhost:8081/AddEventdetails12", formdata1);
        if (result.data === "Alreadyexist") {
          alert("Already Exist")
        }
        else {
          document.getElementById("addeventdetails12").reset();
          alert("Updated Successfully")
          viewEventdetails();
          fnreset();
        }
      }
      catch (err) {
        console.log(err);
      }

  }


function fnreset()
{
  document.getElementById("addeventdetails12").reset();
  setEditu('');
  setPlannameu('');
  setEd1u('');
  setEd2u('');
  setEpriceu('');
  setEimageu('');
}


  return (

    <div style={{ padding: '40px' }}>

      <form id='addeventdetails' onSubmit={addEventdetails}>

        <div className="row">
          <div className="col-sm-6">
            <select className="input1" id="smpn"
              onChange={e => {
                setEid(e.target.value);
                getEventname(e.target.value);
              }}
              onClick={viewEvent}
            >
              <option style={{ color: "green" }} value="0"> -- choose event type -- </option>
              {viewevent.map((result, index) => <option key={index} value={result.eid}>{result.ename}</option>)}
            </select>
          </div>
          <div className="col-sm-6">
            <input className="input1" type="text" required
              onChange={e => setEpn(e.target.value)} placeholder="Event Plan Name" />
          </div>
        </div>

        <br />

        <textarea className="input1" required style={{ height: '150px' }}
          onChange={e => setEd1(e.target.value)} placeholder="Event Plan Description 1">
        </textarea>
        <br />
        <textarea className="input1" required style={{ height: '150px' }}
          onChange={e => setEd2(e.target.value)} placeholder="Event Plan Description 2">
        </textarea>
        <br />


        <div className="row">
          <div className="col-sm-6">
            <input className="input1" type="number"
              onChange={e => setEprice(e.target.value)} placeholder="Price" />
          </div>
          <div className="col-sm-6">
            <input type="file" className='input1' required name="eimage" style={{ border: 'none' }}
              onChange={e => setEimage(e.target.files[0])} />
          </div>
        </div>


        <br />
        <button className='lgbtn'>
          ADD DETAILS
        </button>

      </form>
      <br />

      <table className="table table-bordered border-info tabel-sm align-middle" style={{fontSize:'14px'}}>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Event Details</th>
            <th>Description1</th>
            <th>Description2</th>
            <th>Image</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            vieweventdetails.map((result, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">Event Name :<br/>{result.ename}<hr/>
                   Plan Name : <br/>{result.planname}<hr/>
                   price per day :<br/>
                   Rs.₹{result.price}.00</th>
                  <th style={{ whiteSpace: 'pre-wrap' }} scope="row">{result.desc1}</th>
                  <th style={{ whiteSpace: 'pre-wrap' }} scope="row">{result.desc2}</th>
                  <td><img className="img-fluid" src={'http://localhost:8081/' + result.eimage} style={{ height: '150px', width: '150px', objectFit: 'cover' }} alt="image1" /></td>

                  <td onClick={()=>{updateeventdetails(result.edit,result.planname,result.desc1,result.desc2,result.price)}}><i class="bi bi-pencil-fill"></i></td>
                </tr>
              )
            })}
        </tbody>
      </table>

      {/* -------------modal-------------------- */}

<button id="btnclk" style={{visibility:"hidden"}}  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Event Details</h1>
        <button type="button" onClick={fnreset} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id='addeventdetails12' onSubmit={addEventdetails12}>

<div className="row">

  <div className="col-sm-6">
    <input className="input1" type="text" required id="planname"
      onChange={e => setPlannameu(e.target.value)} placeholder="Event Plan Name" />
  </div>
</div>

<br />

<textarea className="input1" required style={{ height: '150px' }} id="desc1"
  onChange={e => setEd1u(e.target.value)} placeholder="Event Plan Description 1">
</textarea>
<br />
<textarea className="input1" required style={{ height: '150px' }} id="desc2"
  onChange={e => setEd2u(e.target.value)} placeholder="Event Plan Description 2">
</textarea>
<br />


<div className="row">
  <div className="col-sm-6">
    <input className="input1" type="number" id="price"
      onChange={e => setEpriceu(e.target.value)} placeholder="Price" />
  </div>
  <div className="col-sm-6">
    <input type="file" className='input1' required name="eimage" style={{ border: 'none' }}
      onChange={e => setEimageu(e.target.files[0])} />
  </div>
</div>


<br />
<button className='lgbtn'>
  UPDATE
</button>

</form>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
    </div>



  );
}
export default Addeventdetails;