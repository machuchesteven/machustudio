import React from 'react'


import { Box, Text, Heading, Grid, GridItem, ChakraProvider } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'


const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Designs = () => {
    return <>
        <Container bg={'#00ffffff'} backGroundOpacity={10} maxW={'container.md'} style={{ backGroundOpacity: 0.3 }}>
            <ChakraProvider>
                <Heading m={5} textAlign={'center'} >
                    Some Design Works
                </Heading>
            </ChakraProvider>
            <Container>
                <Text>
                    Designs and etc
                </Text>
            </Container>
            <ChakraProvider>
                <Grid
                    templateColumns='repeat(3, 1fr)' gap={1}
                    templateRows='repeat(2, 1fr)'
                    h='300px'
                >
                    <GridItem rowSpan={2} bg='papayawhip' colSpan={2} />
                    <GridItem rowSpan={() => 1} bg='papayawhip' colSpan={1} />
                    <GridItem rowSpan={() => 2} bg='papayawhip' colspan={1} />
                </Grid>
                <Grid mt={2}
                    templateColumns='repeat(2, 1fr)' gap={1}
                    templateRows='repeat(2, 1fr)'
                    h='300px'
                >
                    <GridItem rowSpan={1} bg='papayawhip' colSpan={1} />
                    <GridItem rowSpan={() => 1} bg='papayawhip' colSpan={1} />
                    <GridItem rowSpan={() => 2} bg='papayawhip' colspan={2} />
                </Grid>
            </ChakraProvider>
        </Container>
    </>
}


export default Designs;