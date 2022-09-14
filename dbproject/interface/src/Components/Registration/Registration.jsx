import './Registration.css';
import Navbar from '../Navbar/Top';
import { useState } from "react";
import Axios from "axios";
import GoBack from '../Login/GoBack';
function Registration()
{ 
    const [First_Name,setFirst_Name]=useState("");
    const [Last_Name,setLast_Name]=useState("");
    const [Gender,setGender]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [ContactNo,setContactNo]=useState("");
    const [Age,setAge]=useState("");
    const [Blood_Group,setBlood_Group]=useState("");
    const [Blood_Sign,setBlood_Sign]=useState("");
    const [regstatus,setregstatus]=useState("");
    const [Date_of_Registration,setDate_of_Registration]=useState("");
    const reg = async(e)=>{
    e.preventDefault();
    const data = await Axios.post("http://localhost:5000/Register",{
    fname:First_Name,
    lname:Last_Name,
    gender:Gender,
    email:Email,
    password:Password,
    contact:ContactNo,
    age:Age,
    bg:Blood_Group,
    bs:Blood_Sign,
    date:Date_of_Registration,
    });
    if(data.data.msg)
    {
        setregstatus(data.data.msg);
    }
}

    return(
        <div>
        <Navbar/>
        <div className='container'>
        <div className="ax-width">
            
    <div className="checkoutform">
    <div className="card">
        <div className="box">
    <h1>Donor Registration </h1>
    <form>
    <div className="form">
        <label for="first name" className="col-sm-5 col-form-label text">First Name:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="First name" name="first name" required onChange={(e)=>{setFirst_Name(e.target.value)}}/>
            </div>
        <label for="last" className="col-sm-5 col-form-label text">Last Name:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="last name" name="last" required onChange={(e)=>{setLast_Name(e.target.value)}}/>
        </div>
        <label for="group" className="col-sm-5 col-form-label text">Blood Group:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Blood Group" name="group" required onChange={(e)=>{setBlood_Group(e.target.value)}}/>
        </div>
        <label for="sign" className="col-sm-5 col-form-label text">Blood Sign:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Blood Sign" name="sign" required onChange={(e)=>{setBlood_Sign(e.target.value)}}/>
        </div>
        <label for="contact" className="col-sm-5 col-form-label text">Contact Number:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="+92-XXXXXXXXXXX" name="contact" required onChange={(e)=>{setContactNo(e.target.value)}}/>
        </div>
        <label for="gender" className="col-sm-5 col-form-label text">Gender:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="M-F" name="gender" required onChange={(e)=>{setGender(e.target.value)}}/>
        </div>
        <label for="Age" className="col-sm-5 col-form-label text">Age:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="number" className="form-control" name="Age" required onChange={(e)=>{setAge(e.target.value)}}/>
        </div>
        <label for="startdate" className="col-sm-5 col-form-label text">Date :</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="date" className="form-control" name="startdate" required onChange={(e)=>{setDate_of_Registration(e.target.value)}}/>
        </div>
        <label for="email" className="col-sm-5 col-form-label text"> Email :</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="email" className="form-control" placeholder="abc@xyz.com" name="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <label for="password" className="col-sm-5 col-form-label text"> Password :</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="password" className="form-control" placeholder="****" name="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <input type="submit" value="Register" className="button-25" onClick={reg}/>
    </div>
    <GoBack/>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
);
}

export default Registration;