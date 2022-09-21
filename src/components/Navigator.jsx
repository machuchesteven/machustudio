import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from '@chakra-ui/react'

const Navigator = () => {
    return <Container fluid >
        <Navbar navBarScroll bg="light" expand="md" variant="dark" className="p-md-2" >
            <Navbar.Brand>MachuStudio</Navbar.Brand>
            <Nav navBarScroll >
                <Nav.Item><Button m={[1, null, 2]}>Branding</Button></Nav.Item>
                <Nav.Item><Button m={[1, null, 2]}>3D</Button></Nav.Item>
                <Nav.Item><Button m={[1, null, 2]}>Softwares</Button></Nav.Item>
            </Nav>
        </Navbar>

    </Container>
}


export default Navigator;