import React from 'react'


import { Text, Heading, Grid, GridItem, ChakraProvider, Image } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'

import placeholder from '../placeholder.jpg'

const Designs = () => {
    let span = 0;
    function setSpan(value) {
        span = value;
    }
    if (span >= 4) {
        setSpan(0)
    }

    const rowSpan = () => {
        if (span < 2) {
            let n = span;
            n++
            setSpan(n)
            return 1;
        } else if (span => 2 && span < 4) {
            let n = span;
            n++
            setSpan(n)
            return 2;
        }
    }

    const colSpan = () => {
        if (span < 2) {
            return 1;
        } else if (span => 2 && span < 4) {
            return 2;
        }
    }


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
                    h='auto'
                >
                    <GridItem rowSpan={2} colSpan={2}>
                        <Image src={placeholder} w="100%" h="100%" />
                    </GridItem>
                    <GridItem rowSpan={{ rowSpan }} colSpan={{ colSpan }}>
                        <Image src={placeholder} w="100%" h="100%" />
                    </GridItem>
                    <GridItem rowSpan={{ rowSpan }} colSpan={{ colSpan }}>
                        <Image src={placeholder} w="100%" h="100%" />
                    </GridItem>

                    <GridItem rowSpan={() => 1} bg='papayawhip' colSpan={1} />
                    <GridItem rowSpan={() => 2} bg='papayawhip' colspan={1} />
                </Grid>
                <Grid mt={2}
                    templateColumns='repeat(4, 1fr)' gapLeft={1}
                    templateRows='repeat(4, 1fr)'
                    h='inherit'
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