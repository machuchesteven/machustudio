import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'


const DesignPage = () => {
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

export default DesignPage;
