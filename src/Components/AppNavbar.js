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
import ServicePage from "../Pages/ServicePage"

const style ={
  backgroundColor: "white",
  color: "black",
  // border: "2px solid green",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration : "none",
  display: "inline-block"

}

function AppNavbar() {
  return (
    <div>
     
      <Navbar bg="light"  className=""  fixed="top">
        <Container>
          <Navbar.Brand><Link to="/" style={style}>XYZ Textiles</Link></Navbar.Brand>
          <Nav >

          <Nav.Link   > <Link to="/" style={style}>Home</Link></Nav.Link>
            <Nav.Link > <Link to="/service" style={style}>Our services</Link></Nav.Link>{" "}
            <Nav.Link ><Link to="/aboutus" style={style}>About us</Link></Nav.Link>
            <Nav.Link > <Link to="/ouroffices" style={style}>Our offices</Link></Nav.Link>
            
          </Nav>

        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
