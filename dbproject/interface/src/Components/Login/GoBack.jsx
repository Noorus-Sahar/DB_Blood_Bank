import React from 'react';
import '../SideBar/SideBar.css';
import { useNavigate } from "react-router-dom";
export default function GoBack() {
    const navigate = useNavigate();
    return (
        
        <div>
               <button className="button-24"
        onClick={() => {
          navigate("/home");
        }}
      >
      Back
      </button>
        </div>
    )
}
