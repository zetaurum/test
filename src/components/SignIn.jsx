import React from 'react'
import { 
  Button, 
  Container, 
  Flex, 
  FormControl, 
  FormLabel, 
  Input, 
  Stack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import FormField from 'atoms/FormField'

const SignIn = () => {
  const { 
    register, 
    handleSubmit, 
    formState : {
      isValid,
      errors
    }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = () => {}
  console.log('f', isValid, errors)
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormField
            id='email'
            label='Email'
            isRequired
            inputProps={{
              ...register('email', { required: 'This field is required.' }),
              type: 'email'
            }}
            errors={errors?.email}
          />
          <FormField
            id='password'
            label='Password'
            isRequired
            inputProps={{
              ...register('password', { required: 'This field is required.' }),
              type: 'password'
            }}
            errors={errors?.password}
          />
          <Flex justifyContent='flex-end'>
            <Button type='submit'>Sign in</Button>
          </Flex>
        </Stack>
      </form>
    </Container>
  )
}

export default SignIn
