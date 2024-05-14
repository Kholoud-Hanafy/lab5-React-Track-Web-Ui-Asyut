import { useLanguage } from '../../Contexst/languageContext'
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';

function NavigationBar() {
  const { toggleLanguage } = useLanguage();

  return (
    <Navbar expand="lg" className="bg-body-tertiary bgColor">
      <Container>
        <Navbar.Brand href="#home">MOVISE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-a" to="/">
              Movise
            </NavLink>
            <NavLink className="nav-a" to="/BestMovie">
              Favorites
            </NavLink>
            <NavLink className="nav-a" to="/Login">
              Login
            </NavLink>
            <NavLink className="nav-a" to="/signup">
              Sign up
            </NavLink>
          </Nav>
          <button className="btn2" onClick={toggleLanguage}>
            Choose Language
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
