import React from 'react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { Flex } from '@chakra-ui/react'

const Layout = ({ component: Component, pageProps }) => {
  return (
    <Flex flexDirection='column' height='100vh'>
      <Navbar/>
      <Flex flexGrow={1}>
        <Component {...pageProps} />
      </Flex>
      <Footer/>
    </Flex>
  )
}

export default Layout
