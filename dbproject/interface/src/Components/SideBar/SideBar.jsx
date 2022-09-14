import React from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';


function SideBar() {
const email=useParams();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
      <button
        className="button-24"
        onClick={() => {
          navigate("/DonorShow/"+email.Email);
        }}
      >
        Donor Info
      </button>
      <button
        className="button-24"
        onClick={() => {
          navigate("/DonationShow/"+email.Email);
        }}
      >
        
        Donation Info
      </button>
      <button className="button-24"   onClick={() => {
          navigate("/DonateShow/"+email.Email);
        }} >Donate Blood</button>
      <button
        className="button-24"
        onClick={() => {
          navigate("/home");
        }}
      >
        Logout
      </button>
      
    </div>
    
  );
}
export default SideBar;
