import React from 'react'
import { Container } from 'react-bootstrap'
import { Heading, Image, Icon, Button, Text, Tag, VStack, Box, HStack, SimpleGrid, Center } from '@chakra-ui/react'
import Logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { GrInstagram, GrTwitter, GrGithub } from 'react-icons/gr'
import { MdOutlineMailOutline } from 'react-icons/md'
const Footer = () => {
    return <>
        <Box mt={5}>
            <Container>
                <Center >
                    <VStack mb={[2, null, 5]}>
                        <Image src={Logo} height={'60px'} />
                        <Heading m={{ base: 2, md: 5 }}>MachuStudio<Text mb={1} as="sup" fontSize={'sm'} pb={1}>&#9415;</Text></Heading>
                    </VStack></Center>
                <SimpleGrid columns={{ base: 2, md: 4 }}>
                    <Box mr={{ sm: 3, md: 5 }}>
                        <Heading fontSize={'lg'} my={2}>
                            Address and Contact
                        </Heading>
                        <Text><Icon as={MdOutlineMailOutline} size={'lg'} fontSize={'lg'} /></Text>
                    </Box>
                    <Box m={1}>
                        <Heading fontSize={'lg'}>
                            Useful Links
                        </Heading>
                        <VStack alignItems="left">
                            <Link to='/design'>
                                <Button variant="nav" colorScheme='white'>Design</Button>
                            </Link>
                            <Link to='/software'>
                                <Button variant="nav" >Software</Button>
                            </Link>
                            <Link to='/experiences'>
                                <Button variant="nav">Experiences</Button>
                            </Link>
                        </VStack>
                    </Box>
                    <Box m={1}>
                        <Heading fontSize={'lg'}>
                            Events
                        </Heading>
                    </Box>
                    <Box m={1}>
                        <Heading fontSize={'xl'} textAlign={'center'} my={2}>
                            Follow Us
                        </Heading>
                        <HStack>
                            <Button color={'#2008c4'} bg={{ md: 'none' }}>
                                <GrInstagram size="100%" color="#2008c4" />
                            </Button>
                            <Button color={'#2008c4'} bg={{ md: 'none' }}>
                                <GrGithub size="100%" color="#2008c4" />
                            </Button>
                            <Button color={'#2008c4'} bg={{ md: 'none' }}>
                                <GrTwitter size="100%" color="#2008c4" />
                            </Button>
                        </HStack>
                        <Text my={2} textAlign={'center'}><i>#machustudio</i></Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    </>
}



export default Footer;