import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react"
import Navigator from './components/Navigator'
import Footer from './components/Footer'
import { Container } from "react-bootstrap"
import Newsletter from "./components/Newsletter"
import { Routes, Route } from 'react-router-dom'

// components for the homepage
import LeaderNote from "./components/LeaderNote"
import Hero from "./components/Hero"


import ComingSoon from './pages/ComingSoon'
import SoftwaresPage from './pages/SoftwaresPage'
import DesignPage from './pages/DesignPage'
import ExperiencesPage from './pages/ExperiencesPage'
import ErrorPage from "./pages/ErrorPage"


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
      <Route path="" element={<Homepage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/software" element={<SoftwaresPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App