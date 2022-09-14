import React from 'react';
import About from './about.jsx';
import Who from './who';
import Navbar from '../Navbar/Top';
import Footer from '../Footer/Footer';
import Feedback from "./Feedback";
import Work from './Work.jsx';
function home()
{   return(
    <div> 
       < Navbar/>    
       <h1 style={{color:'#b60505', margin:"20px 230px"}}><strong>WELCOME TO BLOOD DONATION WEBSITE</strong></h1>     
       <Work/> 
        <About />
        <br/>
        <Feedback/>
        <Who />
        <br />
        <Footer></Footer>

    </div>
    );
}
export default home;
