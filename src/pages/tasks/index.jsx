import { Button, Container, Flex } from '@chakra-ui/react'
import TaskForm from 'components/TaskForm'
import TasksList from '../../components/TasksList'

const Tasks = () => {
  return (
    <Container>
      <Flex justifyContent='flex-end' width='100%'>
        <TaskForm trigger={<Button colorScheme='teal'>Add Task</Button>} />
      </Flex>
      <TasksList/>
    </Container>
  )
}

export default Tasks
