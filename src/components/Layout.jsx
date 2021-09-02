import React from 'react'
import { Center, Flex, Spinner } from '@chakra-ui/react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import useAuthentication from 'hooks/useAuthentication'

const Layout = ({ component: Component, pageProps }) => {
  const { isLoading } = useAuthentication()

  return (
    <Flex flexDirection='column' height='100vh' maxHeight='100vh'>
      <Navbar />
      <Flex flexDirection='column' flexGrow={1} p={4}>
        {isLoading ? (
          <Center height='100%'>
            <Spinner color='teal' size='lg' />
          </Center>
        ) : (
          <Component {...pageProps} />
        )}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Layout
