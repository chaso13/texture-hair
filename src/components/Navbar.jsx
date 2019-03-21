import React, { Component } from 'react';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import "./Navbar.css";
class componentName extends Component {
    render () {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="customNavBar"  variant="dark" fixed="top">
                    <Navbar.Brand href="#home"><img className="Logo" src="assets/texture_hair_logo.PNG"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="customNavLink">
                            <Nav.Link className="customNavLink" href="#home">Home</Nav.Link>
                            <Nav.Link className="customNavLink" href="#features">Features</Nav.Link>
                            <Nav.Link className="customNavLink" href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default componentName