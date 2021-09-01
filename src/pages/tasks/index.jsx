import { Button, Container, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import TasksList from 'components/TasksList'

const Tasks = () => {
  const router = useRouter()

  return (
    <Container>
      <Flex justifyContent='flex-end' width='100%'>
        <Button colorScheme='teal' onClick={() => router.push('/tasks/create')}>
          Add Task
        </Button>
      </Flex>
      <TasksList />
    </Container>
  )
}

export default Tasks
