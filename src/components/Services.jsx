import { Heading, SimpleGrid, Box, Text } from "@chakra-ui/react"

const Services = () => {
  // our design services
  return <>
    <Heading textAlign={'center'}>Our Design Services</Heading>
    <Text mb={2} textAlign={'center'}>We create memorable impressions<br className="d-md-none" /> using our designs services</Text>
    <hr className="w-75 mx-auto" />
    <Box className='container' mt={2}>
      <SimpleGrid columns={{ base: 2, md: 3 }} gx={1}>
        <Box borderWidth={1} borderColor={"gold"} rounded="sm" m={1}>
          <Heading textAlign={'center'} my={5}>
            Card One
          </Heading>
        </Box>
        <Box borderWidth={1} borderColor={"gold"} rounded="sm" m={1}>
          <Heading textAlign={'center'} my={5}>
            Card Two
          </Heading></Box>
        <Box borderWidth={1} borderColor={"gold"} rounded="sm" m={1}>
          <Heading textAlign={'center'} my={5}>
            Card Three
          </Heading>
        </Box>
        <Box borderWidth={1} borderColor={"gold"} rounded="sm" m={1}>
          <Heading textAlign={'center'} my={5}>
            Card Four
          </Heading>
        </Box>
        <Box borderWidth={1} borderColor={"gold"} rounded="sm" m={1}>
          <Heading textAlign={'center'} my={5}>
            Card Five
          </Heading>
        </Box>
        <Box borderWidth={1} borderColor={"gold"} rounded="sm" m={1}>
          <Heading textAlign={'center'} my={5}>
            Card Six
          </Heading>
        </Box>
      </SimpleGrid >
    </Box>
  </>
}

export default Services;