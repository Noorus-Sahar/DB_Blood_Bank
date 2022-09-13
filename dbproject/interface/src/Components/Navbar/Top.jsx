import React from 'react';
import './Navbar.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.jpg';
import Phone from './phone.png';
import Email from './email.jpg';

 function Top() {
    return (
      <div className="App">
        <header className="App-header section-header navbar" style={{background:"#3D0000"}}>
          <div class="max-width">
            <div className="left"><img src={Email}/><span><strong>Email Us </strong>: donationpak@gmail.com</span><img src={Phone}/><span><strong>Call Us </strong>: (+92) 0284839520</span></div>
            <div className="right">
              <ul>
                <li>
              <a href="/register">REGISTER</a>
              <a href="/UserLogin">LOGIN</a>
              </li>
              </ul>
            </div>
            </div>
        </header>
      <Navbar className="Navbar" sticky="top" expand="sm" collapseOnSelect>
      <img src={Logo} />
        <Navbar.Collapse>
        <ul class="navbar-nav ms-auto menu">
          <Nav className="menu">
                <Nav.Link href="/home" className="list"><span>HOME</span></Nav.Link>
                <Nav.Link href="/Abouts" className="list"><span>ABOUT</span></Nav.Link>
                <Nav.Link href="/WhoAre" className="list"><span>WHO WE ARE</span></Nav.Link>
                <Nav.Link href="/Showfind" className="list"><span>FIND DONOR</span></Nav.Link>
               
                <Nav.Link href="/Contact" className="list"><span>CONTACT</span></Nav.Link>
                </Nav>
                </ul>
            </Navbar.Collapse>
      </Navbar>
        </div>
    )
}
export default Top;