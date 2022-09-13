import React from 'react';
import NavBar from "../Navbar/Top";
import "./Find.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import Axios from "axios"; 
import {useParams} from 'react-router-dom';
import Navbar from '../Navbar/Top';

function BloodDonated()
{
    return(
        <div>
            < Navbar/> 
            <div className="breadth">
                <div className="about">
                <div className="left">
                   
                    <h1 style={{color:'grey'}}><strong>Thank You For Booking Blood!</strong> </h1>
                    
                    
                </div>
                <div className="right">
                      
        
            
                </div>
            </div>
            </div>
        </div>
    );
}
export default BloodDonated;