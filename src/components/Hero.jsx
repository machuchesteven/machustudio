import { Box, Center, VStack, Heading, Stack, Button, Text, SimpleGrid, Image } from '@chakra-ui/react';
import Logo from '../logo.svg'

const Hero = () => {
    return (
        <>
            <Box id="hero" minH={'90vh'} maxH={'fit-content'}>
                <Center minH={'70vh'}>
                    <VStack>
                        <Heading textAlign={'center'}>MachuStudio: Your<br className="d-sm-block d-md-none" /> <Text as="span" bgGradient='linear(to-l, #2008c4, #1e04a0)' bgClip='text'>Design Studio</Text> for <br />Creating <Text as="span" bgGradient='linear(to-l, #e3b305,#b78c04, #b27e18)' bgClip='text'>Amazing<br className="d-sm-block d-md-none" /> Experiences!</Text></Heading>
                        <Text my={5} textAlign={'center'}>We Design and Engineer<br className="d-sm-block d-md-none" /> experiences that <br className="d-sm-block d-md-none" />engage, inspire, and delight</Text>
                        <Stack spacing={6} direction={'row'}>
                            <Button
                                rounded={'md'}
                                px={6}
                                colorScheme={'darkblue'}
                                bgGradient='linear(to-r, #2008c4, #1e04a0)'
                                _hover={{
                                    bgGradient: 'linear(to-r,#1e04a0, #1a038c)',
                                }}>
                                Hire Us
                            </Button>
                            <Button colorScheme="gold" borderWidth={1} borderColor={'#b78c04'} rounded={'md'} px={6} bgGradient='linear(to-l, #e3b305,#b78c04, #b27e18)' bgClip='text' _hover={{
                                bgGradient: 'linear(to-r, #e3b305,#b78c04, #b27e18)', bgClip: 'text', borderColor: '#b27e18', colorScheme: 'rgba()'
                            }}>
                                Browse Our Works
                            </Button>
                        </Stack>
                    </VStack>
                </Center>
                <Center maxW={'9xl'} justifyContent={'center'}>
                    <SimpleGrid columns={3} spacingX={2}>
                        <Box rounded={'sm'} shadow={'sm'} py={2}>
                            <Image src={Logo} w={'100%s'} />
                            <Heading>Card One</Heading>
                        </Box>
                        <Box rounded={'sm'} shadow={'sm'} py={2}>
                            <Image src={Logo} w={'100%'} />
                            <Heading>Card Two</Heading>
                        </Box>
                        <Box rounded={'sm'} shadow={'sm'} py={2}>
                            <Image src={Logo} w={'100%'} />
                            <Heading>Card Three</Heading>
                        </Box>
                    </SimpleGrid>
                </Center>
            </Box>
        </>
    )
}

export default Hero;