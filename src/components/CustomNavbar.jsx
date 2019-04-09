import React, { Component } from 'react';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import "./CustomNavbar.css";
class CustomNavbar extends Component {
    render () {
        return (
        
                <Navbar collapseOnSelect expand="lg" className="customNavBar"  variant="dark" fixed="top">
                    <Navbar.Brand><Link to="/"><img className="Logo" src="assets/texture_hair_logo1.PNG"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                            
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/features">Features</Link></Nav.Link>
                            <Nav.Link><Link to="/pricing">Pricing</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
          
        )
    }
}

export default CustomNavbar