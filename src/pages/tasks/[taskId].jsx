import { useRouter } from 'next/dist/client/router'

import TaskForm from 'components/TaskForm'
import useTasks from 'hooks/useTasks'
import Header from 'atoms/Header'

const EditTask = () => {
  const { getTask } = useTasks()
  const router = useRouter()
  const { taskId } = router.query

  const task = getTask(taskId)

  if (!task) router.replace('/tasks')

  return (
    <>
      <Header>Edit Task</Header>
      <TaskForm task={task} />
    </>
  )
}

export default EditTask
