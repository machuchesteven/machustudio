import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Heading, Text, keyframes, Box, Center, Button, Stack } from '@chakra-ui/react'


import { animations } from 'framer-motion';
import '../styles/Fold.css'


const Fold = () => {
    return (
        <Container fluid style={{ justifyContent: 'center' }} className="mt-md-5">
            <Container>
                <Heading className='text-center' size={['lg', null, '2xl']}>MachuStudio: The epicenter of <Text as={'span'} className='line-1 typewriter_text' bgGradient='linear(to-l, #79a8CA, #ff5580)' bgClip='text'>Creativity</Text></Heading>
                <Center px={[null, null, 5]}>
                    <Box w={['100%', '80%', '70%']}>
                        <Text fontSize={['sm', null, 'lg']} className='text-center m-2' px={[null, null, 5]}> We Design and
                            We are a Tech Studio focused on Integrating graphics design and software development using the laws of Engineering and mindful creativity
                        </Text>
                    </Box>
                </Center>
                <Container className="px-5">
                    <Stack direction={'row'} justify={'space-between'}>
                        <Button variant="outline" colorScheme="blue">
                            More Designs
                        </Button>
                        <Button variant="solid" colorScheme="grey.800">Hire Us</Button>
                    </Stack>
                </Container>
            </Container>
        </Container>
    )
}

export default Fold;