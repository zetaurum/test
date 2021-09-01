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

import TaskForm from './TaskForm'
import { useRouter } from 'next/dist/client/router'

const TaskFormModal = ({ trigger, task }) => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure(true)

  const header = task ? 'Edit task' : 'Add task'

  const onModalClose = () => {
    onClose()
    if (task) router.push('/tasks')
  }

  const handleTriggerClick = e => {
    onOpen()
    e.stopPropagation()
  }

  return (
    <>
      <Box onClick={handleTriggerClick}>{trigger}</Box>
      <Modal isCentered isOpen={isOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader whiteSpace='nowrap'>{header}</ModalHeader>
          </Center>
          <ModalCloseButton />
          <TaskForm task={task} onClose={onModalClose} />
        </ModalContent>
      </Modal>
    </>
  )
}

export default TaskFormModal
