import React from 'react'
import { chakra, Text, HStack, VStack, Flex, Button, ChakraProvider, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerCloseButton, DrawerOverlay, DrawerContent, IconButton } from '@chakra-ui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const MobileDrawer = ({ p = 15,
  placement = "right",
  width,
  isOpen,
  children,
  onClose,
  btnRef,
  title = "Menu",
  footer, }) => {
  return (<Container>
    <Flex w={width}>
      <Button>
        <IconButton icon={HiOutlineMenuAlt4} />
      </Button>
      <Drawer isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <VStack alignItems={'left'}>
          <Button variant='text'>2D</Button>
          <Button variant='text'>3D</Button>
          <Button variant='text'>Softwares</Button>
        </VStack>
      </Drawer>
    </Flex>
  </Container>
  )
}



const Navigator = () => {
  return (<ChakraProvider>
    <chakra.header id='header' >
      <Container>
      <Flex w={'100%'} px={6} py={5} align={'center'} justify={'space-between'}>
        <Text ml={5} as="b">MStudio</Text>
        <HStack as="nav" spacing={5}>
          <Button as={Link} to="2d" variant="nav">2D</Button>
          <Button as={Link} to="3d" variant="nav">3D</Button>
          <Button as={Link} to="softwares" variant="nav">Software</Button>
        </HStack>
        <HStack>
          <Button>Contact Us</Button>
        </HStack>
      </Flex>
      </Container>
    </chakra.header>
  </ChakraProvider>)
}

export default Navigator;