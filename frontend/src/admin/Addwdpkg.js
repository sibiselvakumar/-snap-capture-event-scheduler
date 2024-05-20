/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "../styles/addcategory.css";

// menu wedding packages as wdpkg

const Addwdpkg = () => {

  useEffect(() => {
      viewMenu();
  },[]);


  //--------------------addwdpkg menu---------------------------------------------
  const [addmenuname, setAddmenuname] = useState([]);

  const addMenu = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:8081/AddMenu", { addmenuname });
      if (result.data === "Alreadyexist") {
        alert("Already Exist")
      }
      else {
        document.getElementById("addmenu").reset();
        //alert("Success")
        viewMenu();
      }
    }
    catch (err) {
      console.log(err);
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


  return (

   <div style={{padding:'40px'}}>


  <form id='addmenu' onSubmit={addMenu}>
                <input className="input" type="text" placeholder="Package Type" required style={{ textTransform: 'lowercase'}}
                  onChange={e => setAddmenuname(e.target.value)} />
               &nbsp;
                <button className='lgbtn'>
                  ADD PACKAGE
                </button>
            
              </form>

              <br/>

<table className="table table-bordered border-info tabel-sm align-middle">
 <thead>
       
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Package</th>
            {/* <th scope="col">Edit</th> */}
          </tr>
   </thead>
        <tbody>
          {
            viewmenu.map((result, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td style={{textTransform:'capitalize'}}>{result.pname}</td>
                  {/* <td><i class="bi bi-pencil-fill"></i></td> */}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>


  
  );
}
export default Addwdpkg;