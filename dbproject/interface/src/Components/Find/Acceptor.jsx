import React from 'react';
import NavBar from "../Navbar/Top";
import "./Find.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import Axios from "axios"; 
import {useParams} from 'react-router-dom';

export default function Acceptor() {
  const Donation_id=useParams();
  const [First_Name,setFirst_Name]=useState("");
  const [Last_Name,setLast_Name]=useState("");
  const [Gender,setGender]=useState("");
  const [Email,setEmail]=useState("");
  const [Date,setDate]=useState("");
  const navigate =useNavigate();
  const [ContactNo,setContactNo]=useState("");

  const insert = async(e)=>{
    e.preventDefault();
    const data = await Axios.post("http://localhost:5000/acceptor",{
      Donation_id,
    fname:First_Name,
    lname:Last_Name,
    gender:Gender,
    email:Email,
    contact:ContactNo,
    date:Date,
  });
  navigate("/BloodDonated");

}
    return (
        <div>
                 <NavBar></NavBar>
           <div className="containee">
        <div className="maxwidth">
          <div className="accform">
            <div className="cardacc">
              <div className="box">
                <h1>Acceptor Info</h1>
                <form>
                  <div className="form">
                    <label
                      for="first name"
                      className="col-sm-5 col-form-label text"
                    >
                      First Name:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="first name"
                        required onChange={(e)=>{setFirst_Name(e.target.value)}}
                      />
                    </div>
                    <label for="last" className="col-sm-5 col-form-label text">
                      Last Name:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        name="last"
                        required onChange={(e)=>{setLast_Name(e.target.value)}}
                      />
                    </div>
                    <label
                      for="contact"
                      className="col-sm-5 col-form-label text"
                    >
                      Contact Number:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+92-XXXXXXXXXXX"
                        name="contact"
                        required onChange={(e)=>{setContactNo(e.target.value)}}
                      />
                    </div>
                    <label
                      for="Email"
                      className="col-sm-5 col-form-label text"
                    >
                    Email:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="Email"
                        required onChange={(e)=>{setEmail(e.target.value)}}
                      />
                    </div>
                    <label for="startdate" className="col-sm-5 col-form-label text">Date :</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="date" className="form-control" name="startdate" required onChange={(e)=>{setDate(e.target.value)}}/>
        </div>
                    <label>Do you want to Confirm ?</label>
                    <div class="form-check">
                      <input
                        style={{ marginLeft: "29px" }}
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="foryes"
                        value="Yes"
                        required
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        style={{ marginLeft: "29px" }}
                        type="radio"
                        name="exampleRadios"
                        id="forno"
                        value="No"
                        required
                        onClick={() => {
                          navigate("/Showfind");
                        }
                      }
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                    </div>
                    <input className="button-25" type="submit" value="Submit" onClick={insert} />
                  </div>
                    </form>
                    </div>
                     </div>
                     </div>
                     </div>
                     </div>
                     
        </div>
    )
}
