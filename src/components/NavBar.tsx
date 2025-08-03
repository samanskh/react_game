    import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import { px } from 'framer-motion'
const NavBar = () => {
  return (
    //horizontal stack
    <HStack> 
        <Image src={logo} boxSize='60px'></Image>
        <Text>NavBar</Text>
    </HStack>
)
}

export default NavBar