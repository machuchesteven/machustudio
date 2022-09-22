import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'


const BrandingPage = () => {
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
                    <BreadcrumbLink href="#">Branding</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    </Container>
}

export default BrandingPage;
