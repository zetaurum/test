import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

import useAuthentication from 'hooks/useAuthentication'
import { useRouter } from 'next/dist/client/router'

const Navbar = () => {
  const router = useRouter()
  const { isAuthenticated, logout } = useAuthentication()

  return (
    <Box
      bg='gray.100'
      height={16}
    >
      <Flex
        height='100%'
        alignItems='center'
        justifyContent='space-between'
        px={4}
        maxWidth='1000px'
        mx='auto'
      >
        <Text
          color='teal'
          fontWeight='bold'
          cursor='pointer'
          onClick={() => router.push('/')}
        >
          TODO APP
        </Text>
        {isAuthenticated ? (
          <Text color='teal' cursor='pointer' onClick={logout}>
            Logout
          </Text>
        ) : (
          <div />
        )}
      </Flex>
    </Box>
  )
}

export default Navbar
