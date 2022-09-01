import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom



function AppNavbar() {
  return (
    <div>
     
      <Navbar bg="light"  className=""  fixed="top">
        <Container>
          <Navbar.Brand href="#home">XYZ Textiles</Navbar.Brand>
          <Nav >

          <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link >Contact us</Nav.Link>{" "}
            <Nav.Link >Our offices</Nav.Link>
            <Nav.Link >About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
