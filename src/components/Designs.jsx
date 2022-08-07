import React from 'react'
import { Container, Row, Col, Button, Placeholder } from 'react-bootstrap'


const Designs = () => {
    return (
        <Container fluid bg="light">
            <Row classname="mt-2 justify-content-center align-items-center">
                <h2>Our Designs And Works</h2>
                <p>Starting from web design, Logo & Brand design, Products design, games and algorithm challenges, These are our latest works</p>
            </Row>
            <Row gap={2}>
                <Col sm={12} md={6}>
                    <Row>
                        <Col sm={6}>
                            <Placeholder style={{ height: '200px' }} />
                            <Placeholder size='md' className="mt-5" />
                            <Placeholder size='md' className="mt-5" />
                            <Placeholder size='md' className="mt-5" />

                        </Col>
                        <Col sm={6}>
                            <Placeholder style={{ height: '200px' }} />
                            <Placeholder size='md' className="mt-5" style />
                            <Placeholder size='md' className="mt-5" />
                            <Placeholder size='md' className="mt-5" />
                            <Placeholder.Button variant="dark" />
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                    <h2>Here Goes The Image for the large work to be displayed</h2>
                </Col>
                <Row>
                    <Button className="m-auto" variant="dark">See More Design Works</Button>
                </Row>
            </Row>
        </Container>
    )
}

export default Designs;