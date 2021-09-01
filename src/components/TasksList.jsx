import { Accordion, Center, Stack, Text } from '@chakra-ui/react'

import useTasks from 'hooks/useTasks'
import { sortByDate } from '../utils/sortFunctions'
import Task from './Task'

const TasksList = () => {
  const { tasks } = useTasks()

  if (tasks.length === 0) {
    return (
      <Center mt={4}>
        <Text color='gray.500' as='i'>
          No tasks added yet.
        </Text>
      </Center>
    )
  }

  return (
    <Stack mt={4} spacing={4}>
      <Accordion allowMultiple allowToggle>
        {sortByDate(tasks, 'createdAt').map(task => (
          <Task key={task.id} task={task} />
        ))}
      </Accordion>
    </Stack>
  )
}

export default TasksList
