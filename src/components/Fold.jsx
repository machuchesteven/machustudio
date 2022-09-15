import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Heading, Text, ChakraProvider, keyframes } from '@chakra-ui/react'


import { animations } from 'framer-motion';
import '../styles/Fold.css'


const Fold = () => {
    return (
        <Container fluid style={{ justifyContent: 'center' }} className="mt-md-5">
            <Container>
                <ChakraProvider>
                    <Heading className='text-center'>MachuStudio: The epicenter of <Text as={'span'} className='line-1 typewriter_text' bgGradient='linear(to-l, #79a8CA, #ff5580)' bgClip='text'>Creativity</Text></Heading>
                    <Text fontSize='lg' className='text-center m-md-5'> We Design and <Text as={'span'}
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        fontSize='lg'
                        fontWeight='medium'
                    >
                        We Design and Engineer Digital Arts from imagination
                    </Text>
                    </Text>
                    <Container className="justufy-content-evenly px-5">
                    <Button variant="outline-dark" className='mx-5 px-5 my-2 py-2'>
                        See More Designs
                    </Button>
                    <Button variant="dark" className='mx-5 px-5 my-2 py-2'>Hire Us</Button>
                    </Container>
                </ChakraProvider>
            </Container>
        </Container>
    )
}

export default Fold;