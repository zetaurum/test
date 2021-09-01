import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Flex,
  IconButton,
  Text,
  Tooltip
} from '@chakra-ui/react'
import Image from 'next/image'
import moment from 'moment'

import useTasks from 'hooks/useTasks'
import { useRouter } from 'next/dist/client/router'
import TrashIcon from 'assets/trash.svg'
import EditIcon from 'assets/edit.svg'
import CheckMarkIcon from 'assets/check-mark.svg'
import CalendarTimeIcon from 'assets/calendar-time.svg'

const DATE_TIME_FORMAT = 'DD MMM YYYY HH:mm a'

/**
 * @param {{
 *  task {
 *   id: string,
 *   taskName: string,
 *   description: string,
 *   startsAt: string,
 *   completedAt?: string,
 *   createdAt: string,
 *   deadLine: string
 *  }
 * }}
 */
const Task = ({ task }) => {
  const router = useRouter()
  const { id, taskName, description, createdAt, completedAt, deadLine } = task

  const { toggleTaskComplete, removeTask } = useTasks()

  const isCompleted = !!completedAt

  const handleChange = e => {
    toggleTaskComplete(id, e.target.checked)
  }

  return (
    <AccordionItem opacity={isCompleted ? 0.6 : 1}>
      <AccordionButton>
        <Flex justifyContent='space-between' width='100%'>
          <Checkbox size='lg' onChange={handleChange} colorScheme='teal'>
            <Text as={isCompleted ? 's' : undefined}>{taskName}</Text>
          </Checkbox>
          <Flex alignItems='center'>
            <Tooltip label='Edit' placement='top'>
              <IconButton
                onClick={() => router.push(`/tasks/${id}`)}
                aria-label='Edit task'
                icon={<Image width={16} alt='edit task' src={EditIcon} />}
              />
            </Tooltip>
            <Tooltip label='Remove' placement='top'>
              <IconButton
                onClick={() => removeTask(id)}
                aria-label='Remove task'
                icon={<Image width={16} alt='remove task' src={TrashIcon} />}
                ml={4}
                mr={4}
              />
            </Tooltip>
            <AccordionIcon />
          </Flex>
        </Flex>
      </AccordionButton>
      <AccordionPanel>
        <Text fontSize='sm' color='gray' textAlign='right' mb={2}>
          Added: {moment(createdAt).format(DATE_TIME_FORMAT)}
        </Text>
        <Text color='gray.700' mb={2}>
          {description}
        </Text>
        {deadLine && (
          <Flex alignItems='center' mb={2}>
            <Image
              width={16}
              height={16}
              src={CalendarTimeIcon}
              alt='deadline'
            />
            <Text ml={2} fontSize='sm' color='red'>
              {moment(deadLine).format(DATE_TIME_FORMAT)}
            </Text>
          </Flex>
        )}
        {isCompleted && (
          <Flex alignItems='center'>
            <Image width={16} height={16} src={CheckMarkIcon} alt='completed' />
            <Text ml={2} fontSize='sm' color='#09cb57'>
              {moment(completedAt).format(DATE_TIME_FORMAT)}
            </Text>
          </Flex>
        )}
      </AccordionPanel>
    </AccordionItem>
  )
}

export default Task
