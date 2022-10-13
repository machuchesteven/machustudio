import React from 'react'
import { Alert, Text, Box, Heading, Button, FormControl, FormLabel, InputGroup, InputLeftElement, Input, Stack, Center, ChakraProvider } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'

import { MdOutlineEmail } from 'react-icons/md'

const Newsletter = () => {
    return <Container className="bg-light p-sm-2 p-5 rounded">
        <ChakraProvider>
        
        <Box>
            <Box mt={[2, null, 5]}>
                <Heading as="h1" fontSize="2xl" className="text-center" mb={[2, null, 4]}>
                    Subscribe to our newsletter,
                </Heading>
                <hr />
                <Center mb={[2, null, 5]}>
                    <Text mt={1} textAlign={'center'} fontSize={'sm'} as={'i'}>You will receive updates, tips and information on designing, trends, tech and other topics</Text>
                </Center>
            </Box>
            <Box align={"center"} justify={'center'}>
                <FormControl isRequired  w={{ base: '100%', md: '60%' }}>
                    <FormLabel>Email</FormLabel>
                    <InputGroup >
                        <InputLeftElement children={<MdOutlineEmail size={28} />} />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl w={{ base: '80%', md: '40%' }} m={2}>
                    <Button
                        colorScheme={'blue'}
                        w="100%"
                        type='submit'>
                        Subscribe
                    </Button>
                </FormControl>
            </Box>
        </Box>
        </ChakraProvider>
    </Container>
    
}


export default Newsletter;