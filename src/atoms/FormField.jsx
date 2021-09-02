import { 
  FormControl, 
  FormLabel, 
  Input, 
  Text, 
  Textarea
} from '@chakra-ui/react'
import React from 'react'

/**
 * @params {{
 *  id: string,
 *  label: string,
 *  isRequired?: boolean,
 *  inputProps: object,
 *  errors?: {
 *    type: string,
 *    message: string
 *  }
 * }}
 */
const FormField = ({
  id,
  label,
  isRequired,
  inputProps,
  errors
}) => {
  const InputComponent = inputProps.type === 'textarea'
  ? Textarea
  : Input

  return (
    <FormControl 
      id={id} 
      isRequired={isRequired}
      isInvalid={errors}
    >
      <FormLabel>{label}</FormLabel>
      <InputComponent {...inputProps} />
      {errors?.message && (
        <Text
          fontSize='sm'
          color='red'
          mt={1}
        >
          {errors.message}
        </Text>
      )}
    </FormControl>
  )
}

export default FormField
