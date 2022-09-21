import React from 'react'
import { Box, Heading, Text, SimpleGrid, UnorderedList, ListItem, Center } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md'



const Services = () => {
    return (<>
        <Container className="mt-md-5 mt-2">
            <Box>
                <Heading className="text-center" size={['lg', null, '2xl']}>Our Services and Products</Heading>
            </Box>
            <SimpleGrid columns={{ sm: 2, md: 3 }} spacingX={1} mt={5}>
                <Box mb={[2, null, null]}>
                    <Heading size='md' ml={[5, null, null]} className="text-md-center">Branding</Heading>
                    <Box mt={[2, null, 5]} pl={2} justify={'center'}>
                        <UnorderedList listStyleType={'none'} justifyContent='center' alignItems='center' jsutifyItems='center'>
                            <ListItem m={1} className="text-md-center">Logo Design</ListItem>
                            <ListItem m={1} className="text-md-center">Cards Design</ListItem>
                            <ListItem m={1} className="text-md-center">Posters</ListItem>
                            <ListItem m={1} className="text-md-center">Printables</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
                <Box mb={[2, null, null]} >
                    <Heading size='md' ml={[5, null, null]} className="text-md-center" pl={2}>3D</Heading>
                    <Box mt={[2, null, 5]} pl={2} >
                        <UnorderedList listStyleType={'none'} className='justify-content-center'>
                            <ListItem className="text-md-center" m={1}>Products Design</ListItem>
                            <ListItem className="text-md-center" m={1}>Interior Designs</ListItem>
                            <ListItem className="text-md-center" m={1}>3D ads Designs</ListItem>
                            <ListItem className="text-md-center" m={1}>Animations</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
                <Box mb={[2, null, null]}>
                    <Heading size='md' ml={[5, null, null]} className="text-md-center">Softwares</Heading>
                    <Box mt={[2, null, 5]} pl={2} pb={[2, null, 5]} centerContent>
                        <UnorderedList listStyleType={'none'} >
                            <ListItem className="text-md-center" m={1}>UI/UX</ListItem>
                            <ListItem className="text-md-center" m={1}>Mobile Apps</ListItem>
                            <ListItem className="text-md-center" m={1}>Website</ListItem>
                            <ListItem className="text-md-center" m={1}>Automations</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
            </SimpleGrid>
        </Container>
    </>)
}


export default Services;