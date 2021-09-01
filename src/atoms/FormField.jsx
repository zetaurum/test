import { 
  FormControl, 
  FormLabel, 
  Input, 
  Text 
} from '@chakra-ui/react'
import React from 'react'

/**
 * @params {{
 *  id: string,
 *  label: string,
 *  isRequired: boolean,
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
  return (
    <FormControl 
      id={id} 
      isRequired={isRequired}
      isInvalid={isRequired && errors?.type === 'required'}
    >
      <FormLabel>{label}</FormLabel>
      <Input {...inputProps} />
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
