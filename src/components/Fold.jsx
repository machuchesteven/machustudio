import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


const Fold = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <h1>
                        <span>MachuStudio:</span> The Epicenter Of Designing
                    </h1>
                    <p className="text-lg">We design and engineer digital arts from imagination</p>
                    <p>Starting with <span>2D Graphics, </span>
                        <span>3D Models,</span> <span>UI / UX Designs</span> and <span>Systems Designing</span>
                    </p>
                    <hr />
                    <Row g={2}>
                        <Col md={6}><Button variant="outline-dark" className="w-100 mt-2 shadow-sm">Hire Us</Button></Col>
                        <Col md={6}><Button variant="dark" className="w-100 mt-2 shadow-sm">See More Works</Button></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={6} sm={5} className="justify-content-center">
                            <span>Rating Stars</span>
                            <hr />
                            <p>On Behance</p>
                        </Col>
                        <Col md={6} sm={7} className="justify-content-center">
                            <span>Counter +</span><hr />
                            <p>Completed Projects</p>
                        </Col>
                    </Row>

                </Col>
                <Col sm={12} md={6}>
                    <h1>The illustration goes here</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Fold;