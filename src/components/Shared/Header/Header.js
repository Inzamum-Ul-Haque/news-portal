import React, { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext";
import LeftNav from "../LeftNav/LeftNav";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar
      className="mb-4 header"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">News Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Dank Memes</Nav.Link>
          </Nav>
          <Nav>
            {user.displayName ? (
              <NavDropdown
                title={user.displayName}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link>
                  <Link to="/login">Sign In</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/register">Register</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
          <div className="d-lg-none">
            <LeftNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
