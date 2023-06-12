import { Heading, Text, Center, VStack, Button, Box} from '@chakra-ui/react'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ErrorPage() {
    return (<Container>
        <Box>
        <Center h={'100%'}>
            <VStack my={'auto'}>
                <Heading textAlign={'center'} fontSize={'6xl'}>
                    404
                </Heading>
                <Heading textAlign={'center'}>Page Not Found</Heading>
                <Text textAlign={'center'}>You Can Go Back and Browse Other Projects From Our Wonderful Studio!</Text>
                <Button as={Link} to={'/projects'}>Other Works</Button>
            </VStack>
            </Center>
        </Box>
    </Container>)
}

export default ErrorPage;