import React from "react";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation =()=>{
    return(
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">DEA-COURSE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/albums">ALBUMS</Nav.Link>
                <Nav.Link href="/posts">POSTS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation;