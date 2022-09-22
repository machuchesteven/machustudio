import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'


const HirePage = () => {
    return <Container>
        <Box>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Hire Us</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    </Container>
}

export default HirePage;
