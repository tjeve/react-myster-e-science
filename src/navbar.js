import React from 'react';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class MystereNav extends React.Component {
    render() {
      return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Myster E. Science</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="http://classroom.google.com">Google Classroom</Nav.Link>
                <Nav.Link href="http://houstonisd.org/hub">HISD Hub</Nav.Link>
                <NavDropdown title="Study Topics" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Category 1: Matter and Energy</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Category 2: Force and Motion</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Category 3: Earth and Space</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Category 4: Organisms and Environments</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Other Resources</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      )
    }
  }

export default MystereNav; 