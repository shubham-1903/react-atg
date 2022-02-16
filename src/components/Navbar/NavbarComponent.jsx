import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import './style.css'
const NavbarComponent = () => {
  return (
    <>
      <Navbar className="nav_shadow">
        <Container>
            <Navbar.Brand href="#home">
              <span className="nav_logo_color">A</span>
              <span className="nav_logo_color">T</span>
              <span className="nav_logo_color">G</span>
              <span>.</span>
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>L</span>
              <span>D</span>
            </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComponent;