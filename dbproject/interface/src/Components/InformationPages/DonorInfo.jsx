import React from "react";
import "./Donor.css";
import { useState } from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';

const Chart = () => {
  const Email=useParams();
  const [fetchData, setData] = useState("");
  const fetching = (e) => {
    Axios.post("http://localhost:5000/profile",{Email})
      .then((res) => {
        // console.log(res);
        setData(res.data);
        console.log(fetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button className="button-25" onClick={fetching}>Show Profile</button>
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Blood Sign</th>
              <th>Date of Registration</th>
            </tr>
          </thead>
          <tbody>
            {fetchData
              ? fetchData.map((obj) => (
                  <tr>
                    <td>{obj.First_Name}</td>
                    <td>{obj.Last_Name}</td>
                    <td>{obj.Gender}</td>
                    <td>{obj.Email}</td>
                    <td>{obj.ContactNo}</td>
                    <td>{obj.Age}</td>
                    <td>{obj.Blood_Group}</td>
                    <td>{obj.Blood_Sign}</td>
                    <td>{obj.Date_of_Registration}</td>
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
