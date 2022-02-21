import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {

  const ctx = useContext(AuthContext);
  const { logout } = ctx;

  return (
    <Navbar fixed="top" bg="light" expand="lg" collapseOnSelect>
      <Container >
        <Navbar.Brand href="/">Auth system</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end"  id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
