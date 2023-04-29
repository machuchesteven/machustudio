import { useDisclosure, VStack, Image, Flex, Button, HStack, chakra, Text, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react';
import Logo from '../logo.svg'
import { Link } from 'react-router-dom'
import React, { useRef } from "react";
import { IoMdMenu } from 'react-icons/io';

function SimpleDrawer({ p = 15, placement = "right", width, isOpen, children, onClose, btnRef, title = "Menu", footer, }) {
  return (
    <Flex w={width}>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />
          <DrawerHeader my={p}>
            <Text as="p"> {title} </Text>
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen} borderColor={'#e3b305'} borderWidth={1} color={'#2008c4'}>
        <IoMdMenu size="26px" color="#2008c4" />
      </Button>

      <SimpleDrawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          <Link to='/design'>
            <Button variant="nav">Design</Button>
          </Link>
          <Link to='/software'>
            <Button variant="nav">Software</Button>
          </Link>
          <Link to='/experiences'>
            <Button variant="nav">Experiences</Button>
          </Link>
        </VStack>
      </SimpleDrawer>
    </Flex>
  );
};

export default function Navigator() {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <HStack as={Link} to={'/machustudio'}>
          <Image src={Logo} h="50px" /><Text fontSize="28px" as='b' display={{ base: "none", md: "flex" }}><Text as="span" bg="gradient"> Machu</Text>Studio</Text>
        </HStack>
        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
        <Link to='/design'>
            <Button variant="nav">Design</Button>
          </Link>
          <Link to='/software'>
            <Button variant="nav">Software</Button>
          </Link>
          <Link to='/experiences'>
            <Button variant="nav">Experiences</Button>
          </Link>
        </HStack>
        <HStack>
          <Button borderColor={'#e3b305'} borderWidth={1} color={'#2008c4'}>
            Contact Us
          </Button>
          <MobileDrawer />
        </HStack>

      </Flex>
    </chakra.header>
  );
}