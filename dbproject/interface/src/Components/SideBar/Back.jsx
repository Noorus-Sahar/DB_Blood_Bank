import React from 'react';
import './SideBar.css';
import { useNavigate } from "react-router-dom";
export default function Back() {
    const navigate = useNavigate();
    return (
        
        <div>
               <button className="button-24"
        onClick={() => {
          navigate("/LeftBar");
        }}
      >
      Back
      </button>
        </div>
    )
}
