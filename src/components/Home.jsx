import React, { Component } from 'react'
import {Carousel, Card, Jumbotron, Button, Container, Row, Col} from 'react-bootstrap'
import './Home.css';
class Home extends Component {
    render () {
        return (
            <Container fluid>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="carouselItem"
                        src="assets/shop1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carouselItem"
                        src="assets/shop2.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carouselItem"
                        src="assets/shop3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

                <Jumbotron>
                  <h1>Hello, world!</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
            </Container>
            
        )
    }
}

export default Home