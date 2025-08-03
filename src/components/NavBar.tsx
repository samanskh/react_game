    import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import { px } from 'framer-motion'
import ColorModeSwitch from '@/ColorModeSwitch'
const NavBar = () => {
  return (
    //horizontal stack
    <HStack justifyContent='space-between' padding = '10px'> 
        <Image src={logo} boxSize='60px'></Image>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
)
}

export default NavBar