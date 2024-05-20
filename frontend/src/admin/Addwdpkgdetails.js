/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "../styles/addcategory.css";


const Addwdpkgdetails = () => {

  useEffect(() => {
    viewWdpkgdetails();
  }, []);


  //--------------------add wdpkgdetails---------------------------------------------


  const [pname, setPname] = useState([]);
  const [pid, setPid] = useState([]);
  const [recwed, setRecwed] = useState([]);
  const [dele, setDele] = useState([]);
  const [price, setPrice] = useState([]);
  const [dprice, setDprice] = useState([]);



  const addWdpkgdetails = async (event) => {
    event.preventDefault();


    if (document.getElementById("smpn1").value !== "0") {
    try {
      const result = await axios.post("http://localhost:8081/AddWdpkgdetails",{pid,pname,recwed,dele,price,dprice});
      if (result.data === "Alreadyexist") {
        alert("Already Exist")
      }
      else {
        document.getElementById("addwdpkgdetails").reset();
        alert("Success")
        viewWdpkgdetails();
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  else{
    alert("please choose wedding package type");
  }
  }

  // ------------------------get wdpkgdetails-------------------------------------------
  const [viewwdpkgdetails, setViewwdpkgdetails] = useState([]);
  const viewWdpkgdetails = async () => {
    try {
      const result = await axios("http://localhost:8081/ViewWdpkgdetails");
      setViewwdpkgdetails(result.data)
    }
    catch (err) {
      console.log(err)
    }
  }


  // ------------------------viewwdpkg menu-------------------------------------------
  const [viewmenu, setViewmenu] = useState([]);
  const viewMenu = async () => {
    try {
      const result = await axios("http://localhost:8081/ViewMenu");
      setViewmenu(result.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  // -----------------get wdpkg name from mid----------------------------

  function getWdpkgmenuname(pid) {
    for (var i = 0; i < viewmenu.length; i++) {
      if (viewmenu[i].pid === Number.parseInt(pid)) {
        setPname(viewmenu[i].pname);
      }
    }
  }



  const [pid12, setPid12] = useState([]);
  const [recwed1, setRecwed1] = useState([]);
  const [dele1, setDele1] = useState([]);
  const [price1, setPrice1] = useState([]);
  const [dprice1, setDprice1] = useState([]);

  function updatepkgdetails(pid12,recwed,dele,price,dprice)
  {
    document.getElementById("recwed").value = recwed;
    document.getElementById("dele").value = dele;
    document.getElementById("price1212").value = price;
    document.getElementById("dprice").value = dprice;
    document.getElementById("btnclk1").click();

    setPid12(pid12);
    setRecwed1(recwed);
    setDele1(dele);
    setPrice1(price);
    setDprice1(dprice);
  }


  const addWdpkgdetails12 = async (event) => {
    event.preventDefault();



    try {
      const result = await axios.post("http://localhost:8081/AddWdpkgdetails12",{pid12,recwed1,dele1,price1,dprice1});
      if (result.data === "Alreadyexist") {
        alert("Already Exist")
      }
      else {
        document.getElementById("addwdpkgdetails12").reset();
        alert("Success")
        viewWdpkgdetails();
      }
    }
    catch (err) {
      console.log(err);
    }

  }



  function fnreset()
{
  document.getElementById("addwdpkgdetails12").reset();
  setPid12("");
  setRecwed1("");
  setDele1("");
  setPrice1("");
  setDprice1("");
}

  return (

    <div style={{ padding: '40px' }}>

      <form id='addwdpkgdetails' onSubmit={addWdpkgdetails}>

  <select className="input1" id="smpn1"
          onChange={e => {
            setPid(e.target.value);
            getWdpkgmenuname(e.target.value);
          }}
          onClick={viewMenu}
          >
          <option style={{ color: "green" }} value="0"> -- choose package type -- </option>
          {viewmenu.map((result, index) => <option key={index} value={result.pid}>{result.pname}</option>)}
        </select>
 <br/>

     
<br/>
      
        <textarea className="input1" required style={{height:'150px'}}
          onChange={e => setRecwed(e.target.value)} placeholder="Reception + Weddings">
            </textarea>
            <br/>
            <textarea className="input1" required style={{height:'150px'}}
          onChange={e => setDele(e.target.value)} placeholder="Deliverables">
            </textarea>
            <br/>



  <input className="input1" type="number"
          onChange={e => setPrice(e.target.value)} placeholder="Price" />

<input className="input1" type="number"
          onChange={e => setDprice(e.target.value)} placeholder="Discount Price" />

       

<br/>
        <button className='lgbtn'>
          ADD DETAILS
        </button>

      </form>
      <br />

      <table className="table table-bordered border-info tabel-sm align-middle">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Package Name</th>
            <th>Reception + Wedding</th>
            <th>Deliverables</th>
            <th>Price</th>
            <th>Discount Price</th>
            {/* <th scope="col">Edit</th> */}
          </tr>
        </thead>
        <tbody>
          {
            viewwdpkgdetails.map((result, index) => {
                return (
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <th scope="row">{result.pname}</th>
                      <th style={{whiteSpace: 'pre-wrap'}} scope="row">{result.recwed}</th>
                      <th style={{whiteSpace: 'pre-wrap'}} scope="row">{result.dele}</th>
                      <th scope="row">₹{result.price}.00</th>
                      <th scope="row">₹{result.dprice}.00</th>                      
                      {/* <td><i class="bi bi-pencil-fill"></i></td> */}
                      <td onClick={()=>{updatepkgdetails(result.pid12,result.recwed,result.dele,result.price,result.dprice)}}><i class="bi bi-pencil-fill"></i></td>

                    </tr>
                  )
                })}
        </tbody>
      </table>


 {/* -------------modal-------------------- */}

 <button id="btnclk1" style={{visibility:"hidden"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal12up">
 
 </button>
 
 
 <div class="modal fade" id="exampleModal12up" tabindex="-1" aria-labelledby="exampleModalLabel12up" aria-hidden="true">
   <div class="modal-dialog modal-xl">
     <div class="modal-content">
       <div class="modal-header">
         <h1 class="modal-title fs-5" id="exampleModalLabel">Update Event Details</h1>
         <button type="button" onClick={fnreset} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
       <form id='addwdpkgdetails12' onSubmit={addWdpkgdetails12}>


   
<br/>
      <textarea className="input1" required style={{height:'150px'}} id="recwed"
        onChange={e => setRecwed1(e.target.value)} placeholder="Reception + Weddings">
          </textarea>
          <br/>
          <textarea className="input1" required style={{height:'150px'}} id="dele"
        onChange={e => setDele1(e.target.value)} placeholder="Deliverables">
          </textarea>
          <br/>



<input className="input1" type="number" id="price1212"
        onChange={e => setPrice1(e.target.value)} placeholder="Price" />

<input className="input1" type="number" id="dprice"
        onChange={e => setDprice1(e.target.value)} placeholder="Discount Price" />

     

<br/>
      <button className='lgbtn'>
        ADD DETAILS
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
export default Addwdpkgdetails;