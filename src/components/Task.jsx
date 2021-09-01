import { Checkbox, Flex, Text } from '@chakra-ui/react'

import useTasks from 'hooks/useTasks'

/**
 * @param {{
 *  id: string,
 *  taskName: string,
 *  description: string,
 *  startsAt: string,
 *  completedAt?: string,
 *  createdAt: string,
 *  deadLine: string
 * }}
 */
const Task = ({
  id,
  taskName,
  description,
  startsAt,
  createdAt,
  completedAt,
  deadLine
}) => {
  const { toggleTaskComplete } = useTasks()

  const handleChange = e => {
    toggleTaskComplete(id, e.target.checked)
  }

  return (
    <Flex>
      <Checkbox size='md' onChange={handleChange} colorScheme='teal'>
        <Text as={!!completedAt ? 's' : undefined}>{taskName}</Text>
      </Checkbox>
    </Flex>
  )
}

export default Task
