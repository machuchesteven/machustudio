import React from 'react'
import { Container } from 'react-bootstrap'
import { Center, Heading, VStack, Text } from '@chakra-ui/react'


function ComingSoon() {
    return (
        <Container className="page-content">
            <Center>
                <VStack>
                    <Heading mb={{ base: 2, md: 5 }}>Coming Soon!</Heading>
                    <Text>This Page Is Coming Soon to MachuStudio.<br /> And Its Worthy The Wait</Text>
                </VStack>
            </Center>
        </Container>
    )
}

export default ComingSoon