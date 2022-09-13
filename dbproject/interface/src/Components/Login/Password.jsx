import React from 'react';
import NavBar from "../Navbar/Top";
import "../Find/Find.css";
import { useState } from "react";
import Axios from "axios"
import GoBack from './GoBack';

export default function Password() {
  const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const pass = async(e)=>{
      e.preventDefault();
      const data = await Axios.post("http://localhost:5000/password",{
        email:Email,
       
      })
    }
    return (
        <div>
            <NavBar></NavBar>
              <div className="containee">
        <div className="maxwidth">
          <div className="accform">
            <div className="cardacc">
              <div className="box">
                <h1>Update Password </h1>
                <form>
                  <div className="form">
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
                   
                    <input className="button-25" type="submit" value="Send Email" onClick={pass}/>
                    </div>
                    <GoBack/>
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
                   </div>
                   
        </div>
    )
}
