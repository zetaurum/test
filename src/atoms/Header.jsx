import { Heading } from '@chakra-ui/react'

const Header = ({ children }) => {
  return (
    <Heading size='lg' mb={6} textAlign='center' color='teal'>
      {children}
    </Heading>
  )
}

export default Header
