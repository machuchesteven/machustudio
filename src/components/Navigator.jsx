import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button, Flex } from '@chakra-ui/react'

const Navigator = () => {
    return <Container fluid >
        <Navbar navBarScroll bg="light" expand="md" variant="dark" className="p-md-2" >
            <Navbar.Brand className='display-sm-none'>MachuStudio</Navbar.Brand>
            <Nav navBarScroll >
                <Flex>
                <Nav.Item><Button m={[1, null, 2]}>Branding</Button></Nav.Item>
                <Nav.Item><Button m={[1, null, 2]}>3D</Button></Nav.Item>
                <Nav.Item><Button m={[1, null, 2]}>Softwares</Button></Nav.Item>
                </Flex>
            </Nav>
        </Navbar>

    </Container>
}


export default Navigator;