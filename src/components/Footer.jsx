import React, { Component } from 'react';
import {Card, Container, Row, Col, Table} from 'react-bootstrap';
import './Footer.css';
class componentName extends Component {
    render () {
        return (
            <div>
            {/*     <Card className="FooterTop">
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col xs={12}>
                    
                                </Col>
                            </Row>
                        </Container>       
                    </Card.Body>
                </Card> */}
                <Card className="Footer">
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col xs={12} lg={4}>
                                    <hr className="horizontal"></hr>
                                    <Card.Img className="FooterLogo" src="assets/texture_hair_logo1.PNG"/>
                                    <hr className="horizontal"></hr>
                                    <Card.Text>
                                        <p>Texture Hair Studio is a real salon for real people. We offer a wide range of hair 
                                            services for both men and women in a relaxed fun environment. Book your appointment today!
                                        </p>
                                    </Card.Text>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <hr className="horizontal"></hr>
                                    <Card.Text className="FooterMiddle">
                                        <p>1537 Central Avenue Colonie, New York</p>
                                        <p>Call (518) 456-8200</p>
                                        <p>m.me/TextureHair</p>
                                    </Card.Text>
                                    <hr className="horizontal"></hr>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <hr className="horizontal"></hr>
                                    <Card.Text className="HourTable">
                                        <table >
                                            <tbody>
                                            <tr>
                                                <th>Monday:</th>
                                                <th>Closed</th>
                                            </tr>
                                            <tr>
                                                <th>Tuesday:</th>
                                                <th>8:00 AM - 8:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th>Wednesday:</th>
                                                <th>8:00 AM - 8:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th>Thursday:</th>
                                                <th>8:00 AM - 8:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th>Friday:</th>
                                                <th>8:00 AM - 8:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th>Saturday:</th>
                                                <th>9:00 AM - 4:00 PM</th>
                                            </tr>
                                            <tr>
                                                <th>Sunday:</th>
                                                <th>Closed</th>
                                            </tr>
                                            </tbody>
                                        </table>
                                    
                                        
                                    </Card.Text>
                                    <hr className="horizontal"></hr>
                                </Col>
                            </Row>
                        </Container>       
                    </Card.Body>
                </Card>
                <Card className="FooterBottom">
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <p className="FooterBottomP">&copy;Texture Hair Studio</p>
                                </Col>
                            </Row>
                        </Container>       
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default componentName