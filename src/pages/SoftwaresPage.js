import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,

} from '@chakra-ui/react'
import { Container } from "react-bootstrap";


const SoftwarePage = () => {
    return <Container>
        <Box>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Projects</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Softwares</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
        {/* Here goes the real software projects now */}
    </Container>
}

export default SoftwarePage;