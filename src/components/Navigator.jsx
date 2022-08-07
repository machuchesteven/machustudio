import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Navigator = () => {
    return (
        <Navbar expand="lg" bg="white" variant="white" fixed="top">
            <Container>
                <Navbar.Brand>MachuStudio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Designs</Nav.Link>
                        <Nav.Link href="#link">Newsletter</Nav.Link>
                        <Nav.Link href="#link">Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className='justify-content-end'>
                    <Button variant="dark" size="md" className="m-auto">Hire Us</Button>
                </Nav>
            </Container>

        </Navbar>
    )

}
