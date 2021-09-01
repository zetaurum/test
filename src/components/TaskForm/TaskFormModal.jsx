import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Center
} from '@chakra-ui/react'
import { useEffect } from 'react'

import useUrlParams from 'hooks/useUrlParams'
import TaskForm from './TaskForm'

const TaskFormModal = ({ trigger }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(true)

  const { taskId } = useUrlParams(['taskId'])
  
  useEffect(() => {
    if(taskId) onOpen()
  }, [taskId])

  const header = taskId ? 'Edit task' : 'Add task'

  return (
    <>
      <Box onClick={onOpen}>{trigger}</Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader whiteSpace='nowrap'>{header}</ModalHeader>
          </Center>
          <ModalCloseButton />
          <TaskForm taskId={taskId} onClose={onClose}/>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TaskFormModal
