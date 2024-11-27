import React from 'react';
import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const updateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <h1>JH</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
                <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a>
            </div>
            <button className='' onClick={() => console.log('success')}>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;