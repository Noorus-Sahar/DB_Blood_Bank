import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faVoicemail} from '@fortawesome/free-solid-svg-icons';
function Footer(){
    return(
      
<footer class="text-center text-white"  style={{background:"#3D0000"}}>

  <div class="contains p-4">

    <section class="mb-4">

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
     <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
     </a>


      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >   <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>

 
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        > <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></a>

    
 
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon></a>
    </section>
   


    <section class="">
      <form action="">
  
        <div class="row d-flex justify-content-center">
       
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
       
          <div class="col-md-5 col-12">
            
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control" />
              <label class="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
        
          <div class="col-auto">
          
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
         
        </div>

      </form>
    </section>
   
    <section class="mb-4">
      <p>
      The majority of individuals are in need of web-based blood donation.Patients need 
                        to get blood.<br/> to inhabit crisis time.At present individuals are had to realize how 
                        to contact blood contributors on <br/>the web.
      </p>
    </section>
   
    <section class="">

      <div class="row">

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Contact Us</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">donationpak@gmail.com</a>
            </li>
            <li>
              <a href="#!" class="text-white"> (+92) 0284839520</a>
            </li>
            <li>
              <a href="#!" class="text-white"> FAST University, 3 A.K. Brohi Road, H-11/4 H 11/4 H-11, Islamabad, Islamabad Capital Territory</a>
            </li>
            
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">FAQ</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Who we are</a>
            </li>
            <li>
              <a href="#!" class="text-white">Objectives</a>
            </li>
            <li>
              <a href="#!" class="text-white">Vision</a>
            </li>
            <li>
              <a href="#!" class="text-white">Mission</a>
            </li>
          </ul>
        </div>
      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Heros</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Support Us</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>
  
      </div>
      
    </section>

  </div>
 
  <div class="text-center p-3" style={{backgroundColor:"black",color:'#F0E9D2'}}>
    © 2021 Copyright - 
    <a style={{textDecoration:'None', color:'#F0E9D2'}}> Blood Donation Website. All Rights Reserved</a>
  </div>

</footer>
        )
}
export default Footer;