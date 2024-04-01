import "./Header.css"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "../Grid/Grid";


const Header=()=>
{
  
    return(
        <div>
            <div className="container">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features">Talent Finder</Nav.Link>
              <Nav.Link href="#features">For Recruiters</Nav.Link>
              <Nav.Link href="#pricing">For Employers</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#company">Company</Nav.Link>


             
              <Button   variant="outline-primary" className="logbutton"> 
                Log In
              </Button>
              
              <Button className="getbutton">Get Started</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
      <Grid/>
      
      </div>
        </div>
    )
}
export default Header;