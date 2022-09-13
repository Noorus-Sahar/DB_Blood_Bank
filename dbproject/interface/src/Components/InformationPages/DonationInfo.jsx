import React from "react";
import { useState } from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';

const Chart = () => {
  const [fetchData, setData] = useState("");
  const [Donation_id, setDonation_id] = useState("");
  const Email=useParams();
  const fetching = (e) => {
    Axios.post("http://localhost:5000/history",{Email})
      .then((res) => {
        // console.log(res);
        setData(res.data);
        console.log(fetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [fetchData1, setData1] = useState("");
  const fetching1 = (e) => {
    Axios.post("http://localhost:5000/notavailable",{Email})
      .then((res) => {
        // console.log(res);
        setData1(res.data);
        console.log(fetchData1);
      })
      .catch((err) => {
        console.log(err);
      });
    }; 
 
    const del =async(e)=>{
      
      const data = await Axios.post("http://localhost:5000/delete",{
        Email,
        e,
      })
    }
  return (
    <>
      <button className="button-25" onClick={fetching}>Show Available Donation</button>
     
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Blood Centre/Hospital Name</th>
              <th>Date of Donation</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {fetchData
              ? fetchData.map((obj) => (
                  <tr>
                    <td>{obj.Area}</td>
                    <td>{obj.BloodCentre}</td>
                    <td>{obj.Date_of_Donation}</td>
                    <td>{obj.Weight}</td>
                    
                    <input type="submit" value="Delete" onClick={()=>{del(obj.Donation_id)}}/>
                  </tr>
                ))
              : ""}
            
          </tbody>
        </table>
      </div>
      <button className="button-25" onClick={fetching1}>Show Non Available Donation</button>
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Blood Centre/Hospital Name</th>
              <th>Date of Donation</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {fetchData1
              ? fetchData1.map((obj) => (
                  <tr>
                    <td>{obj.Area}</td>
                    <td>{obj.BloodCentre}</td>
                    <td>{obj.Date_of_Donation}</td>
                    <td>{obj.Weight}</td>
                  </tr>
                ))
              : ""}
            
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Chart;
