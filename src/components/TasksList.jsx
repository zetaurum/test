import { Stack } from '@chakra-ui/react'

import useTasks from 'hooks/useTasks'
import Task from './Task'

const TasksList = () => {
  const { tasks } = useTasks()

  return (
    <Stack>
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </Stack>
  )
}

export default TasksList
