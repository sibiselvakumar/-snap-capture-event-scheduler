/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/gl.css";


const Gl = () => {

    useEffect(() => {
        viewEvent();
    }, []);

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


        // ------------------------delete gallery-------------------------------------------
        const deletegl = async (id) => {
            try {
                const result = await axios.post("http://localhost:8081/deletegl",{id});
                if(result.data==="success"){
                    evgl(eid,ename);
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    


    const [en, setEn] = useState([]);
    const [evvl, setEvvl] = useState(false);
    const [ename, setEname] = useState([]);
    const [eid, setEid] = useState([]);
    const evgl = async (eid1,ename) => {
        setEname(ename);
        setEid(eid1);
        setEvvl(true);
        try {

            const result = await axios.post("http://localhost:8081/eventdt", { eid1 });
            setEn(result.data);
        }
        catch (err) {
            console.log(err)
        }
    }



    const [eimagegl, setEimagegl] = useState([]);
    const ens = async (event) => {
        event.preventDefault();


        const formdata1 = new FormData();
        formdata1.append('eid', eid);
        formdata1.append('ename', ename);
        formdata1.append('eimagegl', eimagegl);

        try {
            const result = await axios.post("http://localhost:8081/eventdt1", formdata1);
            if (result.data === "success") {
                document.getElementById("ens").reset();
                alert("Added Successfully")
                evgl(eid,ename);
            }
        }
        catch (err) {
            console.log(err);
        }

    }



    return (

        <div style={{ padding: '40px' }}>
            {
                viewevent.map((result, index) => {
                    return (
                        <>
                            <span onClick={() => { evgl(result.eid,result.ename); }} className="btn btn-primary">{result.ename}</span> &nbsp;
                        </>
                    )
                })}
            <>
            <br/><br/>
            <hr/>
{
            evvl?
            <>
                <h5 style={{ color: 'green', textAlign: 'center' }}>{ename}</h5>
                <div class="row justify-content-center align-items-center g-2" >
                    {
                        en.map((result, index) => {
                            return (
                                <div className="col-md-6 col-sm-6 col-6" style={{ padding: "20px" }}>
                                    <div className="shadow cnlk" style={{ border: '1px solid gray', borderRadius: "8px" }}>
                                    <span className="cnlk1" onClick={()=>{deletegl(result.id)}}><i class="bi bi-trash-fill"></i></span>
                                        <img className="img-fluid" src={'http://localhost:8081/' + result.eimage} style={{ borderRadius:'8px',width: '100%', objectFit: 'cover' }} alt="image1" />
                                    </div>
                                </div>
                            )
                        })}
                    <form id='ens' onSubmit={ens}>
                        <div style={{ marginTop: "20px" }}>
                            <input type="file" required name="eimage" style={{ border: 'none' }}
                                onChange={e => setEimagegl(e.target.files[0])} />
                                <button className='lgbtn'>
                            ADD
                        </button>
                        </div>
                      
                    </form>
                </div>
                </>
                :null}
            </>
        </div>
    );
}
export default Gl;