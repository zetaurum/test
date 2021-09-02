import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Center minHeight={32} bg='gray.100'>
      <Text fontWeight='bold'>TODO APP &copy; 
      <Text as='span' fontWeight='normal' ml={1}>{new Date().getFullYear()}</Text>
    </Text>
    </Center>
  )
}

export default Footer
