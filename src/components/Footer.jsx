import React from 'react'
import { Container } from 'react-bootstrap'
import { Heading, Image, Icon, Button, Text, Tag, VStack, Box, HStack, SimpleGrid, Center } from '@chakra-ui/react'
import Logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { GrInstagram, GrTwitter, GrGithub } from 'react-icons/gr'
import { MdOutlineMailOutline } from 'react-icons/md'
const Footer = () => {
    return <>
        <Box mt={5} zIndex={2}>
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
                        <VStack alignItems="left" spacingy={0}>
                            <Link to='/design'>
                                <Button variant="nav" my={1} p={0}>Design</Button>
                            </Link>
                            <Link to='/software'>
                                <Button variant="nav" p={0} my={0}>Software</Button>
                            </Link>
                            <Link to='/experiences/games'>
                                <Button variant="nav" p={0} my={0}>Games</Button>
                            </Link>
                            <Link to='/experiences/mobile-apps'>
                                <Button variant="nav" p={0} my={0}>Mobile Apps</Button>
                            </Link>
                            <Link to='/experiences/ar-vr'>
                                <Button variant="nav" p={0} my={0}>AR-VR zone</Button>
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
                        <Tag m={1}>Animation</Tag><Tag m={1}>VFX</Tag><Tag m={1}>3D</Tag>
                        <Tag m={1}>Branding</Tag><Tag m={1}>2D</Tag><Tag m={1}>UI/UX</Tag>
                        <Tag m={1}>GameDev</Tag><Tag m={1}>AR-VR</Tag><Tag m={1}>MobileApp</Tag>
                        <Tag m={1}>Web</Tag>
                    </Box>
                </SimpleGrid>
            </Container>
            <Box p={3} bg={"#0D1117"} w={'100hw'}>
                <Text textAlign={'center'}>Copyright &copy; 2023 MachuStudio. All rights reserved</Text>
            </Box>
        </Box>
    </>
}



export default Footer;