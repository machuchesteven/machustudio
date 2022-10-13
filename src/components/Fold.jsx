import React from 'react'
import { Container } from 'react-bootstrap'
import { Heading, Text, keyframes, Box, Center, Button, Stack, ChakraProvider, SimpleGrid } from '@chakra-ui/react'


import { animations } from 'framer-motion';
import '../styles/Fold.css'


const Fold = () => {
    return (
        <Container fluid style={{ justifyContent: 'center' }} className="mt-5">
            <Container>
                <ChakraProvider>
                <Heading className='text-center' size={['lg', null, '2xl']}>MachuStudio: The epicenter of <Text as={'span'} className='line-1 typewriter_text' bgGradient='linear(to-l, #79a8CA, #ff5580)' bgClip='text'>Creativity</Text></Heading>
                <Center py={[null, null, 5]}>
                    <Box w={['100%', '80%', '80%']}>
                        <Text fontSize={['sm', null, 'lg']} className='text-center m-2' px={[null, null, 5]}> We Design and
                            We are a Tech Studio focused on Integrating graphics design and software development using the laws of Engineering and mindful creativity
                        </Text>
                    </Box>
                </Center>
                <Center>
                    <SimpleGrid w={{ sm: '100%', md: '60%' }} columns={2} spacing={[5, null, 5]}>
                        <Button w={'100%'}  variant="outline" colorScheme="blue">More Designs</Button>
                        <Button w={'100'}  variant="outline" colorScheme="grey" _hover={{backgroundColor: 'grey.200'}}>Hire Us</Button>
                    </SimpleGrid>
                </Center>
                </ChakraProvider>
            </Container>
        </Container>
    )
}

export default Fold;