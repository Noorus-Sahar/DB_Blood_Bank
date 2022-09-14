import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Top";
import Contact from "./Components/home/Contact";
import Home from "./Components/home/home";
import About from "./Components/home/about";
import Register from "./Components/Registration/Registration";
import { Routes } from "react-router"; //for changing path
import { BrowserRouter as Router, Route } from "react-router-dom";
import DonorShow from "./Components/InformationPages/DonorShow";
import LeftBar from "./Components/InformationPages/LeftBar";
import DonationShow from "./Components/InformationPages/DonationShow";
import DonateShow from "./Components/Donate/DonateShow";
import ShowFind from "./Components/Find/ShowFind";
import Acceptor from "./Components/Find/Acceptor";
import BloodShow from "./Components/Donate/BloodShow";
import WhoAre from "./Components/home/Whoare";
import Abouts from "./Components/home/Abouts";
import Password from "./Components/Login/Password";
import BloodDonated from "./Components/Find/BloodDonated";
function App() {
  return (
    <Router>
      {/*  <Navbar />*/}
      <Routes>
        <Route exact path="/UserLogin" element={<Login></Login>}></Route>
        <Route exact path="/Navbar" element={<Navbar></Navbar>}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/Contact" element={<Contact></Contact>}></Route>
        <Route exact path="/LeftBar/:Email" element={<LeftBar></LeftBar>}></Route>
        <Route exact path="/DonationShow/:Email" element={<DonationShow />}></Route>
        <Route exact path="/DonorShow/:Email" element={<DonorShow />}></Route>
        <Route exact path="/DonateShow/:Email" element={<DonateShow/>}></Route>
        <Route exact path="/Showfind" element={<ShowFind></ShowFind>}></Route>
        <Route exact path="/Acceptor/:ContactNo" element={<Acceptor></Acceptor>}></Route>
        <Route exact path="/Bloodshow/:Email" element={<BloodShow></BloodShow>}></Route>
        <Route exact path="/WhoAre" element={<WhoAre></WhoAre>}></Route>
        <Route exact path="/Abouts" element={<Abouts></Abouts>}></Route>
        <Route exact path="/Password" element={<Password></Password>}></Route>
        <Route exact path="/BloodDonated" element={<BloodDonated></BloodDonated>}></Route>
      </Routes>
    </Router>
  );
}

export default App;