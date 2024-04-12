import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-0 red-navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-white fw-bold ">
          Animals of Africa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link text-white">
              Inicio
            </Link>
            <Link to="/favoritos" className="nav-link text-white">
              Favoritos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
