import { Box, Text } from '@chakra-ui/react'

const ErrorMessage = ({ children }) => {
  return (
    <Box bg='red.100' px={4} py={2} borderRadius={4} mb={4}>
      <Text color='red.600'>{children}</Text>
    </Box>
  )
}

export default ErrorMessage
