import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import useAuthentication from 'hooks/useAuthentication'

const Layout = ({ component: Component, pageProps }) => {
  const { checkIfUserIsAuthenticated } = useAuthentication()

  useEffect(() => {
    checkIfUserIsAuthenticated()
  }, [])

  return (
    <Flex flexDirection='column' height='100vh' maxHeight='100vh'>
      <Navbar />
      <Flex flexDirection='column' flexGrow={1} p={4}>
        <Component {...pageProps} />
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Layout
