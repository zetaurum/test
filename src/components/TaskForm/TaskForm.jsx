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
const TaskForm = ({ task, onClose }) => {
  const { addTask, updateTask } = useTasks()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    defaultValues: task
  })

  const onSubmit = values => {
    if (task) {
      updateTask(task.id, values)
    } else {
      addTask(values)
    }
    onClose()
  }

  return (
    <>
      <ModalBody>
        <form>
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
            <FormField
              id='startsAt'
              label='Starts At'
              inputProps={{
                ...register('startsAt'),
                type: 'datetime-local'
              }}
            />
            <FormField
              id='deadLine'
              label='Deadline'
              inputProps={{
                ...register('deadLine'),
                type: 'datetime-local'
              }}
            />
          </Stack>
        </form>
      </ModalBody>
      <ModalFooter>
        <ButtonGroup spacing={4}>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            type='submit'
            colorScheme='teal'
          >
            {task ? 'Update' : 'Add'}
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  )
}

export default TaskForm
