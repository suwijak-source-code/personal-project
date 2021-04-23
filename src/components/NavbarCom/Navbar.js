import { Navbar, Form, Button, FormControl, Nav } from "react-bootstrap";
import axios from "../../config/axios";
import Logout from "../Logout";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const NavbarComponant = () => {
  const { loginSuccess } = useContext(AuthContext);
  return (
    <Navbar className="navbar" variant="dark">
      <Navbar.Brand href="home">LOGO</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="exhibitions">Exhibitions</Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>
      </Nav>
      {!loginSuccess && (
        <Form inline>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="register">Register</Nav.Link>
        </Form>
      )}
      {loginSuccess && (
        <div>
          <div>Hello world.</div>
          <div>
            <Logout />
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default NavbarComponant;
