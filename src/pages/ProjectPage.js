import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'


const ProjectPage = () => {
    return <Container>
        <Box>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Project</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="">Project-Name</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>

    </Container>
}

export default ProjectPage;