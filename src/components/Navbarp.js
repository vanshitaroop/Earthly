import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg"; 
import ProgressBar from "react-scroll-progress-bar";
import "animate.css"
import TrackVisibility from "react-on-screen"
export const Navbarp = () => {
  // const [sccrolled, setsccrolled] = useState("false")
  const [activeLink, setactiveLink] = useState("home");
  // useEffect(() => {
  //  const onScroll=()=>{
  //   if(window.scrollY>50){
  //     setsccrolled(true);
  //   }
  //   else{
  //     setsccrolled(false);
  //   }
  //  }
  //  window.addEventListener("scroll",onScroll);
  //  return ()=>{window.removeEventListener("scroll",onScroll)}
  // }, []);
  const onUpdateActiveLink =(value)=>{
    setactiveLink(value)
  }
  
    return (
        <>
         <ProgressBar height="6" bgcolor="#000" duration="0.2" />
        <Navbar expand="md" className="navbar-dark bg-dark fixed-top ">
      <Container>
        <Navbar.Brand href="/">
        <TrackVisibility>
              {({ isVisible }) =>
          <img src={logo}  style={{width:"100px"}} alt="Logo" className={isVisible?"animate__animated animate__jello":""}/>
          //  <b><h2 style={{color:"white"}}  className={isVisible?"animate__animated animate__backInUp brandd":"brandd"}>Earthly</h2></b> 
        }
          </TrackVisibility>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <hr style={{color:"white"}}/>
            <Nav.Link href="/Product.js" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Kit</Nav.Link>
            <hr style={{color:"white"}}/>
            {/* <Nav.Link href="#contact" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About</Nav.Link>
            <hr style={{color:"white"}}/> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
      
    )
}
