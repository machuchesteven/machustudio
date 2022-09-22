import React from 'react'
import { BreadcrumbLink, Breadcrumb, BreadcrumbItem, Box, ChakraProvider } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'

const ThreeDPage = () => {
    return <Container>
            <Box>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">3D</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </Container>
}


export default ThreeDPage;