import React from 'react';
import './home.css';
import aboutus from '../Navbar/about-us.jpg';
function about() {
    return(
        <div>
             
            <div className="breadth">
                <div className="about">
                <div className="left">
                   
                    <h1 style={{color:'grey'}}><strong>Who We Are?</strong> </h1>
                    <p>The majority of individuals are in need of web-based blood donation.Patients need 
                        to get blood.<br/> to inhabit crisis time.At present individuals are had to realize how 
                        to contact blood contributors on <br/>the web.This website gives how to get blood at their
                         genuine chance to be longer life time. Data <br/>about benefactors and patients will be store
                          in database with the goal that it is prepared to give <br/>blood immediately.
                           </p>
                    <p> It Make a type specimen book. It has survived not only five centuries,
                     but also the leap into <br/>electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <p>It is a long established fact that a reader will be distracted by the
                         readable content of a page<br/> when looking at its layout. The point of
                          using Lorem Ipsum is that it has a more-or-less <br/>normal distribution of letters, 
                          as opposed to using 'Content here, content here', making it <br/>look like readable English. 
                        </p>
                        <p>
                        There are many variations of passages of Lorem Ipsum available,
                        The core objective of this web <br/>application is to provide the opportunities to get Blood,
                         Platelets and Plasma as soon <br/>as possible at nearby locations. 
                        </p>
                </div>
                <div className="right">
                        <img src={aboutus}/>
        
            
                </div>
            </div>
            </div>
        </div>
    );
}
export default about;