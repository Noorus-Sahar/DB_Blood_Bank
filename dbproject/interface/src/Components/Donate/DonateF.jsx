import React, { useState } from "react";
import "./DonateF.css";
import "../SideBar/SideBar.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';
function DonateF() {
  const [Area,setArea]=useState("");
  const [BloodCentre,setBloodCentre]=useState("");
  const [fetchData, setData] = useState("");
  const Email=useParams();

  const fetching = (e) => {
    Axios.post("http://localhost:5000/Dropdown1",{Area})
      .then((res) => {
        // console.log(res);
        setData(res.data);
        console.log(fetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const fetching1 = (e) => {
    Axios.post("http://localhost:5000/Dropdown2",{
      BloodCentre,
      Area
  })
      .then((res) => {
        // console.log(res);
        setData(res.data);
        console.log(fetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  const [Weight, setWeight] = useState("");
  const [Date_of_donation, setdate_of_donation] = useState("");
  const [Disease, setDisease] = useState("");
  const [Blood_pressure, setBlood_Pressure] = useState("");
  const [Anemia, setAnemia] = useState("");
  const [Diabeties, setDiabeties] = useState("");
  const [Chain_Smoker, setChain_Smoker] = useState("");
  const [HIV, setHIV] = useState("");
  const [Allergy, setAllergy] = useState("");
 
    const donation = async (e) => {
      e.preventDefault();
      const data = await Axios.post("http://localhost:5000/Donateblood",
      {
        Email,
        BloodCentre,
        Area,
        wght: Weight,
        date: Date_of_donation,
        disease: Disease,
      });
    }
    const dis = async(e) => {
      const data1 = await Axios.post("http://localhost:5000/Disease", {
        bp: Blood_pressure,
        anemia: Anemia,
        diab: Diabeties,
        smoker: Chain_Smoker,
        hiv: HIV,
        allergy: Allergy,
      });
    }
    const navigate = useNavigate();
  return (

    <div>
      <div className="containee">
        <div className="max-width">
          <div className="donorform">
            <div className="card">
              <div className="box">
                <h1>Donate Blood</h1>
                <form>
                  <div className="form">

                    <DropdownButton title='Area' id="dropdown-basic" id="dropdown-basic-button" onClick={fetching} onSelect={(e)=>{setArea(e)}}>
                        
                        {fetchData
                          ? fetchData.map((obj) => {
                            return <Dropdown.Item eventKey={obj.Area}>{obj.Area}</Dropdown.Item>
                          })
                          : ""}
                      
                    </DropdownButton>
                    <DropdownButton title='Blood Bank/Hospital' id="dropdown-basic" id="dropdown-basic-button" onClick={fetching1} onSelect={(e)=>{setBloodCentre(e)}}>
                        
                        {fetchData
                          ? fetchData.map((obj) => {
                            return <Dropdown.Item eventKey={obj.BloodCentre}>{obj.BloodCentre}</Dropdown.Item>
                          })
                          : ""}
                      
                    </DropdownButton>
                    

                    <label
                      for="weight"
                      className="col-sm-5 col-form-label text"
                    >
                      Weight:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        className="form-control"
                        name="weight"
                        required onChange={(e) => { setWeight(e.target.value) }}
                      />
                    </div>
                    <label for="ddate" className="col-sm-5 col-form-label text">
                      Date of Donation:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="date"
                        className="form-control"
                        name="ddate"
                        required onChange={(e) => { setdate_of_donation(e.target.value) }} 
                      />
                    </div>
                    <label>Do you have any Disease ?</label>
                    <div class="form-check">
                      <input
                        style={{ marginLeft: "29px" }}
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="foryes"
                        value="Yes"
                        required  onChange={(e) => { setDisease('Yes') }} onClick={donation}
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
                        required onChange={(e) => { setDisease('No') }} onClick={donation}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                      
                    </div>
                    <label> If you have disease Please check the following boxes:</label>
                  </div>
                  {/* for disease*/}
                  <div id="disease" style={{ marginLeft: "50px" }}>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault" onChange={(e) => { setBlood_Pressure('Yes') }}
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        BP
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked" onChange={(e) => { setAnemia('Yes') }}
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Anemia
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked" onChange={(e) => { setDiabeties('Yes') }}
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Diabetes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked" onChange={(e) => { setChain_Smoker('Yes') }}
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Chainsmoker
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked" onChange={(e) => { setHIV('Yes') }}
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        HIV
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked" onChange={(e) => { setAllergy('Yes') }}
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Allergies
                      </label>
                    </div>
                  </div>
                  <input className="button-25" type="submit" value="Submit"  onClick={() => {dis()
                        navigate("/Bloodshow/"+Email.Email);
                  }}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateF;