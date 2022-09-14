import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import { useState } from "react";
import {Button} from 'react-bootstrap';
import { First , Last } from "react-bootstrap/esm/PageItem";
import { useNavigate } from "react-router";
import Axios from "axios";
import "./Find.css";
import {useParams} from 'react-router-dom';

export default function Find() {
  const ContactNo=useParams();
    const navigate =useNavigate();
    const [Area,setArea]=useState("");
    const [fetchData, setData] = useState("");
    const [Blood_Group,setBlood_Group]=useState("");
    const [Blood_Sign,setBlood_Sign]=useState("");
    const [fetchData1, setData1] = useState("");
    const [fetchData2, setData2] = useState("");
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
    const fetching2 = (e) => {
      Axios.post("http://localhost:5000/bg",{Blood_Group})
        .then((res) => {
          // console.log(res);
          setData2(res.data);
          console.log(fetchData2);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const fetching3 = (e) => {
      Axios.post("http://localhost:5000/bs",{Blood_Sign})
        .then((res) => {
          // console.log(res);
          setData2(res.data);
          console.log(fetchData2);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const fetching1 = (e) => {
      Axios.post("http://localhost:5000/finddonor",{
        Area,
        Blood_Group,
        Blood_Sign
      })
        .then((res) => {
          // console.log(res);
          setData1(res.data);
          console.log(fetchData1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="find">
      <div className="size">
      <DropdownButton title='Area' id="dropdown-basic-button" onClick={fetching} onSelect={(e)=>{setArea(e)}}>
                        
                        {fetchData
                          ? fetchData.map((obj) => {
                            return <Dropdown.Item eventKey={obj.Area}>{obj.Area}</Dropdown.Item>
                          })
                          : ""}
                      
                    </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Select Blood Group" onClick={fetching2} onSelect={(e)=>{setBlood_Group(e)}} >
          {fetchData2
                          ? fetchData2.map((obj) => {
                            return <Dropdown.Item eventKey={obj.Blood_Group}>{obj.Blood_Group}</Dropdown.Item>
                          })
                          : ""}
                      
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Select Blood Sign"  onClick={fetching3} onSelect={(e)=>{setBlood_Sign(e)}} >
        {fetchData2
                          ? fetchData2.map((obj) => {
                            return <Dropdown.Item eventKey={obj.Blood_Sign}>{obj.Blood_Sign}</Dropdown.Item>
                          })
                          : ""}
        </DropdownButton>
        <button className="button-25" onClick={fetching1}>Show </button>
        <div>
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact</th> 
              <th>BloodCentre/Hospital</th>
           
            </tr>
            
            <tbody>
            {fetchData1
              ? fetchData1.map((obj) => (
                  <tr>
                    <td>{obj.First_Name}</td>
                    <td>{obj.Last_Name}</td>
                    <td>{obj.ContactNo}</td>
                    <td>{obj.BloodCentre}</td>
                    
                    <input type="submit" value="Go" onClick={() => {
          navigate("/Acceptor/"+obj.Donation_id);
        }}/>
                  </tr>
                ))
              : ""}
            
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
