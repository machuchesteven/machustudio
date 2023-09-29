import React from 'react'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ChakraProvider } from '@chakra-ui/react'


const ProjectPage = () => {
    return <ChakraProvider>
        <Container>
            <Box>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="#">Project</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="">Project-Name</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </Container>
    </ChakraProvider >
}

export default ProjectPage;