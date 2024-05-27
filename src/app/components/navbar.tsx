'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavbarComponent() {
  return (
    <>
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand href="home">Valli dell&apos;energia pulita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../home">Home</Nav.Link>
            <Nav.Link href="../percorsi">Percorsi</Nav.Link>
            <NavDropdown title="Altro" id="basic-nav-dropdown">
              <NavDropdown.Item href="../progetto">Il progetto</NavDropdown.Item>
              <NavDropdown.Item href="../tecnologie">Tecnologie proposte</NavDropdown.Item>
              <NavDropdown.Item href="../contatti">Contatti</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>  
  );
}