import React from "react";
import NavBar from "../Navbar/Top";
import SideBar from "../SideBar/SideBar";
import DonarInfo from "./DonorInfo";
import Back from "../SideBar/Back";
export default function Donor() {
  return (
    <div>
      <NavBar></NavBar>
      {/*<SideBar />*/}
      <DonarInfo></DonarInfo>
  
    </div>
  );
}
