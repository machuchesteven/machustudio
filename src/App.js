import { Box, Heading, Center, Text, VStack, Image, Button, HStack, Stack, SimpleGrid } from "@chakra-ui/react"
import Navigator from './components/Navigator'
import Footer from './components/Footer'
import { Container, Nav } from "react-bootstrap"
import Newsletter from "./components/Newsletter"
import Logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import SoftwaresPage from './pages/SoftwaresPage'
import DesignPage from './pages/DesignPage'
import ExperiencesPage from './pages/ExperiencesPage'




const Hero = () => {
  return (
    <>
      <Box id="hero" minH={'90vh'} maxH={'fit-content'}>
        <Center minH={'70vh'}>
          <VStack>
            <Heading textAlign={'center'}>MachuStudio: Your<br className="d-sm-block d-md-none" /> <Text as="span" bgGradient='linear(to-l, #2008c4, #1e04a0)' bgClip='text'>Design Studio</Text> for <br />Creating <Text as="span" bgGradient='linear(to-l, #e3b305,#b78c04, #b27e18)' bgClip='text'>Amazing<br className="d-sm-block d-md-none" /> Experiences!</Text></Heading>
            <Text my={5} textAlign={'center'}>We Design and Egineer<br className="d-sm-block d-md-none" /> experiences that <br className="d-sm-block d-md-none" />engage, inspire, and delight</Text>
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

const Services = () => {
  // our design services
  return <>
    <Heading textAlign={'center'}>Our Design Services</Heading>
    <Text mb={2} textAlign={'center'}>We create memorable impressions<br className="d-md-none" /> using our designs services</Text>
    <hr className="w-75 mx-auto" />
    <Container className='mt-2'>
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
    </Container>
  </>
}

const HowWeDo = () => {
  // explains how we do thing including empathizing, drawing and designing.
  return <>
    <Container>
      <Heading>How We Do</Heading>
    </Container>
  </>
}

const Samples = () => {
  return (<>
    <Container>
      <Heading textAlign={'center'}>From the Studio: Some Works! </Heading>
      <Text textAlign={'center'} my={2}>Our Studio is working tirelessly on delivering creative products, here are some of them</Text>
    </Container>
  </>)
}

const LeaderNote = () => {
  return <>
    <Box>
      <Heading>Leader Note </Heading>
    </Box>
  </>
}

function Homepage() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeDo />
      <Samples />
      <LeaderNote />
      <Newsletter />
    </>
  )
}



function App() {
  return (<>
    <Navigator />
    <Routes>
      <Route path="/machustudio" element={<Homepage />} />
      <Route path="/machustudio/coming-soon" element={<ComingSoon />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/software" element={<SoftwaresPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App