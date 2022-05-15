import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

const Header = () => {
    return (

   
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">RAYHAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Skills</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    
    );
};

export default Header;