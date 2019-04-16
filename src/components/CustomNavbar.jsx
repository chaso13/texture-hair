import React, { Component } from 'react';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import "./CustomNavbar.css";
class CustomNavbar extends Component {
    render () {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12}>
                    <Navbar collapseOnSelect expand="lg" className="customNavBar"  variant="dark" fixed="top" fluid>
                        <Navbar.Brand><Link to="/home"><img className="Logo" src="assets/texture_hair_logo1.PNG" alt=""/></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link ><NavLink to="/home" className="customNavLink"activeStyle={{ color: '#D9768C' }}>Home</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/features" className="customNavLink"activeStyle={{ color: '#D9768C' }}>Features</NavLink></Nav.Link>
                                <Nav.Link ><NavLink to="/pricing" className="customNavLink"activeStyle={{ color: '#D9768C' }}>Pricing</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    </Col>
                </Row>
            </Container>
          
        )
    }
}

export default CustomNavbar