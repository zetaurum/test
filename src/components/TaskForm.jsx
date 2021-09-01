import { Button, ButtonGroup, Container, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'

import FormField from 'atoms/FormField'
import useTasks from 'hooks/useTasks'

/**
 *
 * @param {{
 *  task?: {
 *   id: string,
 *   taskName: string,
 *   description: string,
 *   startsAt: string,
 *   completedAt: string,
 *   createdAt: string,
 *   deadLine: string
 *  }
 * }}
 */
const TaskForm = ({ task }) => {
  const router = useRouter()
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
    router.push('/tasks')
  }

  return (
    <Container>
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
        <ButtonGroup
          spacing={4}
          mt={4}
          display='flex'
          justifyContent='flex-end'
        >
          <Button onClick={() => router.push('/tasks')}>Cancel</Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            type='submit'
            colorScheme='teal'
          >
            {task ? 'Update' : 'Add'}
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  )
}

export default TaskForm
