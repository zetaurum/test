import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Center height={32} bg='gray.200'>
      <Text fontWeight='bold'>TODO APP &copy; 
      <Text as='span' fontWeight='normal' ml={1}>{new Date().getFullYear()}</Text>
    </Text>
    </Center>
  )
}

export default Footer
