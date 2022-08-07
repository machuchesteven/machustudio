import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';


const Navigator = () => {
    return (
        <Navbar expand="lg" bg="white" variant="white">
            <Container>
                <Navbar.Brand>MachuStudio</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="jsutify-content-space-btn">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Designs</Nav.Link>
                        <Nav.Link href="#link">Newsletter</Nav.Link>
                        <Nav.Link href="#link">Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className='justify-content-end'>
                    <Button variant="dark" size="md" className="m-auto text-white">Hire Us</Button>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>

        </Navbar>
    )
}


export default Navigator;
