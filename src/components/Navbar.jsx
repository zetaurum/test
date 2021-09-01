import React from 'react'
import { 
  Flex, 
  Text 
} from '@chakra-ui/react'

import useAuthentication from 'hooks/useAuthentication'
import { useRouter } from 'next/dist/client/router'

const Navbar = () => {
  const router = useRouter()
  const { isAuthenticated, logout } = useAuthentication()

  return (
    <Flex 
      height={16} 
      bg='teal.100'
      alignItems='center'
      justifyContent='space-between'
      px={4}
    >
      <Text 
        color='blue.500' 
        fontWeight='bold'
        cursor='pointer'
        onClick={() => router.push('/')}
      >
        TODO APP
      </Text>
      {isAuthenticated ? (
        <Text 
          color='blue.500'
          cursor='pointer'
          onClick={logout}
        >
          Logout
        </Text>
      ) : <div/>}
    </Flex>
  )
}

export default Navbar
