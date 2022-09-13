const express = require("express");
const app = express();
const db = require("./Connect");
const cors = require("cors");
// const { default: App } = require("../dbproject/interface/src/App");
const { all } = require("express/lib/application");
const nodemailer = require("nodemailer")
app.use(cors());
app.use(express.json());

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection is Fine....");
  }
});
//DropDown of Area
app.post("/Dropdown1", (req, res) => {
  const area = req.body.Area
  //console.log(area);
  db.query(
    "select distinct Area from Location", (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
      else {
        console.log("Shit");
      }
    }
  )
}
);
//DropDown of BloodCentre
app.post("/Dropdown2", (req, res) => {
  const area = req.body.Area
  const bloodcentre = req.body.BloodCentre
  //console.log(bloodcentre);
  db.query(
    "select BloodCentre from Location where Area=?",
    [area],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
      else {
        console.log("Shit");
      }
    }
  )
}
);
//Insertion in Disease Table
app.post("/Disease", (req, res) => {
  const bp = req.body.bp;
  const anemia = req.body.anemia;
  const diab = req.body.diab;
  const smoker = req.body.smoker;
  const hiv = req.body.hiv;
  const allergy = req.body.allergy;

  value = [bp, anemia, diab, smoker, hiv, allergy]
  console.log(bp);
  db.query(
    "Select Donation_id from donation order by Donation_id desc",
    function(err,result){
      if(result.length>1){
        db.query(
          "Insert into disease (Donation_ID,Blood_Pressure,Sugar,Animia,Chain_Smoker,HIV,Allergy) Values (?,?,?,?,?,?,?)",
          [result[0].Donation_id,bp, anemia, diab, smoker, hiv, allergy],
          function (err, result) {
      
            if (err) {
              console.log(err);
              res.send({ msg: "Error" });
            }
            else {
              console.log("Values inserted in Disease");
              res.send(result);
            }
          }
        )
      }
      else if(err){
        console.log(err);
      }
    }
  )
 
}
);
//View Profile
app.post("/profile", (req, res) => {
const Email=req.body.Email;
console.log(Email)
  db.query("select * from donor_registration where Email=?",
  [Email.Email],

    (err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "Profile Not Found" });
      }
    });
});
//Delete Donation
app.post("/delete", (req, res) => {
  const e=req.body.e;
  console.log(e);
  db.query(
    
    "DELETE FROM donation WHERE Donation_id = ?",
    [e],
   function(err, result) {
      if (err) {
        console.log("Error");
        console.log(err);
        res.send({ err: err });
      }
      if (result) {
       // console.log(result);
        res.send(result);
        console.log("Donation Deleted")
      } else {
        console.log("Shit");
      }
    }
  )
})
//Available Donation
app.post("/history", (req, res) => {
  const Email=req.body.Email;
  db.query(
    "Select Donor_id from donor_registration where Email=?",
    [Email.Email],
    (err,result)=>{
      if(err)
      {
        console.log(err);
      }
      else if(result.length==1)
      {
        console.log(result),
        db.query(
          "select location.Area,location.BloodCentre,donation.Date_of_Donation,donation.Weight,donation.Donation_id from donation join location on location.location_ID=donation.Location_ID where Donor_Id=? and availability='yes'",
         [result[0].Donor_id],
          (err, result) => {
            if (err) {
              console.log("Error");
              console.log(err);
              res.send({ err: err });
            }
            if (result) {
              console.log(result);
              res.send(result);
            } else {
              console.log("Shit");
            }
      }
        )
    }
    
    });
});
//Non-Available Donation
app.post("/notavailable", (req, res) => {
  const Email=req.body.Email;
  db.query(
    "Select Donor_id from donor_registration where Email=?",
    [Email.Email],
    (err,result)=>{
      if(err)
      {
        console.log(err);
      }
      else if(result.length==1)
      {
        console.log(result),
        db.query(
          "select location.Area,location.BloodCentre,donation.Date_of_Donation,donation.Weight from donation join location on location.location_ID=donation.Location_ID where Donor_Id=? and availability='no'",
         [result[0].Donor_id],
          (err, result) => {
            if (err) {
              console.log("Error");
              console.log(err);
              res.send({ err: err });
            }
            if (result) {
              console.log(result);
              res.send(result);
            } else {
              console.log("Shit");
            }
      }
        )
    }
    
    });
 
});
//acceptor insertion
app.post("/acceptor",(req,res)=>{
  const Donation_id=req.body.Donation_id;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const contact = req.body.contact;
  const date = req.body.date;
  console.log(Donation_id);
  db.query(
    "INSERT INTO acceptor (First_Name,Last_Name,Contact_No,Email,Donate_id,Date) VALUES (?,?,?,?,?,?)",
    [fname, lname,contact,email, Donation_id.ContactNo,date],
    function (err, result) {      
      if (err) {
        console.log(err);
        res.send(err);
      }
      else {
        console.log("1 Record Inserted");
        //res.send(result);
        db.query(
          "UPDATE donation SET Availability= 'No' WHERE Donation_id = ?",
          [Donation_id.ContactNo],
          function (err,result){
            if(err)
            {
              console.log(err);
            }
            if(result)
            {
              console.log(result);
              console.log("Availability is set to no");
              db.query(
                "commit",
                function (err,result){
                  if(err)
                  {
                    console.log(err);
                  }
                  if(result)
                  {
                    console.log(result);
                }
                }
              )
            }
          }
        )
       
      }
    }
  )
})
//fetch Donors
app.post("/finddonor", (req, res) => {
  const area = req.body.Area
  const blood_group = req.body.Blood_Group
  const blood_sign = req.body.Blood_Sign
  db.query(
    "select donor_registration.First_Name, donor_registration.Last_Name, donor_registration.ContactNo,location.BloodCentre,donation.Donation_id from donor_registration join donation on donor_registration.Donor_id=donation.Donor_Id join location on location.location_ID=donation.Location_ID where location.Area=? and donor_registration.Blood_Group=? and donor_registration.Blood_Sign=? and donation.availability='yes'",
    [area, blood_group, blood_sign],
    (err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "Non-Available Donations" });
      }
    });
});
//Fetch Blood Group
app.post("/bg", (req, res) => {
  const bg = req.body.Blood_Group
  db.query(
    "select distinct Blood_Group from Stock",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
      else {
        console.log("Shit");
      }
    }
  )
});
//Fetch Blood Sign
app.post("/bs", (req, res) => {
  const bg = req.body.Blood_Sign
  db.query(
    "select distinct Blood_Sign from Stock",
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
      else {
        console.log("Shit");
      }
    }
  )
})
//Insertion in donation table
app.post("/Donateblood", (req, res) => {
  const Email=req.body.Email;
  const wght = req.body.wght;
  const date = req.body.date;
  const disease = req.body.disease;
  const area = req.body.Area;
  const bloodcentre = req.body.BloodCentre;
  console.log(req.body);

  db.query(
    "Select Donor_id from donor_registration where Email=?",
    [Email.Email],
    (err,result)=>{
      if(err)
      {
        console.log(err);
      }
      else if(result.length==1)
      {
       let ans=result;
        db.query("Select Location_ID from Location where Area=? and BloodCentre=?",
        [area, bloodcentre], 
         (err, result) => {
          if (err) {
          console.log(err);
          res.send({ msg: "Error in Donation" });
       }
       else if(result.length==1){
        console.log(result);
        db.query(
        "Insert into donation (Donor_Id,Date_of_Donation,Disease,Weight,Location_ID) Values (?,?,?,?,?)",
          [ans[0].Donor_id,date,disease,wght,result[0].Location_ID],
          (error,result)=>{
            if(error){
              console.log("Error")
              console.log(error)
            }
            else if (result){
              console.log("Blood Donated")
            }
          })
      res.send(result);
    }  
  })
      }
    }
  )  
});
//insertion in blood table
app.post("/blood", (req, res) => {
  const Email=req.body.Email;
  const dens = req.body.dens;
  const hem = req.body.hem;
  const iron = req.body.iron;
  const ph = req.body.ph;
  const wbc = req.body.wbc;
  const rbc = req.body.rbc;
  value = [dens, hem, iron, ph, wbc, rbc];

  db.query(
    "Select Donation_id from donation order by Donation_id desc",
    function(err,result){
      if(result.length>1){
        db.query(
          "Insert into Blood (Donation_id,Density,PH_Value,Hemoglobin,Iron,WBC,RBC) values (?,?,?,?,?,?,?)",
          [result[0].Donation_id,dens, ph, hem, iron, wbc, rbc],
          function (err, result) {
      
            if (err) {
              console.log(err);
              res.send({ msg: "Incorrect Format" });
            }
            else  {
              console.log("Blood Record Inserted");
              res.send(result);
            }
          }
        )
      }
      else if(err){
        console.log(err);
      }
    }
  )
 
})
//update password
app.post("/password",  (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "bloodbankfast@gmail.com",
      pass: "F@st1234",
    },
  });


  db.query(
    "select Password from donor_registration where Email = ?",
    [email],
    function (err, result) {

      if (err) {
        console.log(err);
        res.send({ msg: "Incorrect Format" });
      }
      else {
        console.log(result);
        let mailInfo = {
          from: "bloodbankfast@gmail.com",
          to: `${email}`,
          subject: "Forget Password",
          text: `Hi you can use this Password ${result[0].Password} to login`,
        };
        transporter.sendMail(mailInfo, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email Sent:" + info.response());
            
          }
        });
        res.send(result);
      
        
      }
    }
  )
})
//Registration
app.post("/Register", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const gender = req.body.gender;
  const email = req.body.email;
  const pass = req.body.password;
  const contact = req.body.contact;
  const age = req.body.age;
  const bg = req.body.bg;
  const bs = req.body.bs;
  const date = req.body.date;
  value = [fname, lname, gender, email, pass, contact, age, bg, bs];

  db.query(
    "INSERT INTO donor_registration (First_Name,Last_Name,Blood_Group,Blood_Sign,ContactNo,Gender,Age,Date_of_Registration,Email,Password) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [fname, lname, bg, bs, contact, gender, age, date, email, pass],
    function (err, result) {

      if (err) {
        console.log(err);
        res.send({ msg: "Incorrect Format" });
      }
      else {
        console.log("1 Record Inserted,ID;");
        res.send(result);
      }
    }
  )
}
);
//Login
app.post("/Login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  value = [email, password];
  console.log(email, password);
  db.query(
    "select * from donor_registration where Email=? and password=?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result.length == 1) {
        console.log("User id Matched");
        console.log(result.length);
        res.send(result);
      }
      else {
        console.log("Shit");
        res.send({ message: "No user Found" });
      }
    }
  );
});


const port = process.env.port || 5000;
app.listen(port);
console.log("Server Listen ...");