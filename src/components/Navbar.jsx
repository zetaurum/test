import React from 'react'
import { 
  Flex, 
  Text 
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex 
      height={16} 
      bg='teal.100'
      alignItems='center'
      px={4}
      mb={4}
    >
      <Text color='blue.500' fontWeight='bold'>TODO APP</Text>
    </Flex>
  )
}

export default Navbar
