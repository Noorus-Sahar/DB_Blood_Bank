import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../Registration/Registration.css";
import "./DonateF.css";
import {useParams} from 'react-router-dom';

export default function Blood() {
  
  const Email=useParams();
const [Density,setDensity]=useState("");
const [Hemoglobin,setHemoglobin]=useState("");
const [Iron,setIron]=useState("");
const [PH_Value,setPH_Value]=useState("")
const [WBC,setWBC] = useState("");
const [RBC,setRBC] = useState("");
const insertblood = async(e)=>{
  e.preventDefault();
  const data = await Axios.post("http://localhost:5000/blood",{
    Email,
    dens:Density,
    hem:Hemoglobin,
    iron:Iron,
    ph:PH_Value,
    wbc:WBC,
    rbc:RBC,
  });
}
  return (
    <div>
      <div className="containee">
        <div className="max-width">
          <div className="donorform">
            <div className="card">
              <div className="box">
                <h1>Blood Details </h1>
                <form>
                  <div className="form">
                    <label
                      for="Density"
                      className="col-sm-5 col-form-label text"
                    >
                      Density
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Density"
                        name="Density"
                        required onChange={(e)=>{setDensity(e.target.value)}}
                      />
                    </div>
                    <label for="hemo" className="col-sm-5 col-form-label text">
                      Hemoglobin
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="hemoglobin"
                        name="hemo"
                        required onChange={(e)=>{setHemoglobin(e.target.value)}}
                      />
                    </div>
                    <label for="Iron" className="col-sm-5 col-form-label text">
                      Iron
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Iron"
                        name="Iron"
                        required onChange={(e)=>{setIron(e.target.value)}}
                      />
                    </div>
                    <label
                      for="Phvalue"
                      className="col-sm-5 col-form-label text"
                    >
                      Phvalue
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Phvalue"
                        name="Phvalue"
                        required onChange={(e)=>{setPH_Value(e.target.value)}}
                      />
                    </div>
                    <label for="rbc" className="col-sm-5 col-form-label text">
                      RBCs
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Rbcs"
                        name="rbc"
                        required onChange={(e)=>{setRBC(e.target.value)}}
                      />
                    </div>
                    <label for="wbc" className="col-sm-5 col-form-label text">
                      WBCs
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Wbcs"
                        name="wbc"
                        required onChange={(e)=>{setWBC(e.target.value)}}
                      />
                    </div>
                    <input
                      className="button-25"
                      type="submit"
                      value="Submit" onClick={insertblood}
                     
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
