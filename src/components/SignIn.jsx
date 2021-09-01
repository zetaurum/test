import React from 'react'
import { 
  Button, 
  Container, 
  Flex, 
  Stack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { EMAIL } from 'constants/regularExpressions'
import FormField from 'atoms/FormField'
import useAuthentication from 'hooks/useAuthentication'

const SignIn = () => {
  const { 
    register, 
    handleSubmit, 
    formState : {
      errors
    }
  } = useForm({
    mode: 'onBlur'
  })
  const {login} = useAuthentication()

  const onSubmit = (values) => {
    login(values)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormField
            id='email'
            label='Email'
            isRequired
            inputProps={{
              ...register('email', { 
                required: 'Email is required.',
                pattern: {
                  value: EMAIL,
                  message: 'Must be a valid email.'
                }
              }),
              type: 'email'
            }}
            errors={errors?.email}
          />
          <FormField
            id='password'
            label='Password'
            isRequired
            inputProps={{
              ...register('password', { required: 'Password is required.' }),
              type: 'password'
            }}
            errors={errors?.password}
          />
          <Flex justifyContent='flex-end'>
            <Button colorScheme='teal' type='submit'>Sign in</Button>
          </Flex>
        </Stack>
      </form>
    </Container>
  )
}

export default SignIn
