import {
  Button,
  ButtonGroup,
  ModalBody,
  ModalFooter,
  Stack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import FormField from 'atoms/FormField'
import useTasks from 'hooks/useTasks'

/**
 *
 * @param {{
 *  taskId: string,
 *  onClose: () => void
 * }}
 */
const TaskForm = ({ taskId, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const { addTask } = useTasks()

  const onSubmit = (values) => {
    addTask(values)
    onClose()
  }

  return (
    <>
      <ModalBody>
        <form >
          <Stack spacing={4}>
            <FormField
              id='taskName'
              label='Title'
              isRequired
              inputProps={{
                ...register('taskName', {
                  required: 'Title is required'
                })
              }}
              errors={errors?.taskName}
            />
            <FormField
              id='description'
              label='Description'
              inputProps={{
                ...register('description'),
                type: 'textarea'
              }}
            />
          </Stack>
        </form>
      </ModalBody>
      <ModalFooter>
        <ButtonGroup>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)} type='submit' colorScheme='teal'>
            {taskId ? 'Update' : 'Add'}
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  )
}

export default TaskForm
