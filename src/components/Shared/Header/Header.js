import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext";
import LeftNav from "../LeftNav/LeftNav";
import "./Header.css";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Navbar
      className="mb-4 header"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>News Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">All News</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/news">Dank Memes</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {user && user.email ? (
              <NavDropdown title={user.email} id="navbarScrollingDropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleSignOut}>
                  Logout
                </NavDropdown.Item>
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
