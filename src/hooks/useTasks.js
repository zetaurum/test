import { createState, useState } from '@hookstate/core'
import { v4 as uuid } from 'uuid'

const TASKS_STATE = createState([
  {
      "id": "96fb61a8-e862-4ca3-8305-406a374f0457",
      "taskName": "task 1",
      "createdAt": "2021-09-01T16:13:00.068Z",
      "startsAt": "2021-09-07T23:44",
      "deadLine": "2021-09-23T00:45",
      "completedAt": null,
      "description": "as;ldkjfa;sldkjf ;alskdj f;laskdj flkjs ldkjfl skdjfl ksjdlfk jsldkfj slkdjf lsdkjf lsdkjfl skdjfl sjkdlfk jsdlfk jsldkfj sdlkfj "
  },
  {
      "id": "ae861190-9254-4b9e-a110-b6452804fbcf",
      "taskName": "task 2`",
      "createdAt": "2021-09-01T17:13:11.129Z",
      "startsAt": null,
      "deadLine": null,
      "completedAt": null,
      "description": "as;ldkjfa;sldkjf ;alskdj f;laskdj flkjs ldkjfl skdjfl ksjdlfk jsldkfj slkdjf lsdkjf lsdkjfl skdjfl sjkdlfk jsdlfk jsldkfj sdlkfj "
  }
])

export default function useTasks () {
  const tasksState = useState(TASKS_STATE)

  const addTask = values => {
    const task = {
      id: uuid(),
      taskName: values.taskName,
      createdAt: new Date().toISOString(),
      startsAt: values.startsAt || null,
      deadLine: values.deadLine || null,
      completedAt: null,
      description: values.description || ''
    }
    
    tasksState.set(tasks => [...tasks, task ])
  }

  const updateTask = (taskId, updatedValues) => {
    tasksState.set(tasks => {
      const task = tasks.find(({id}) => id === taskId)

      return [
        ...tasks.filter(({id}) => id !== taskId),
        {...task,  ...updatedValues}
      ]
    })
  }

  const removeTask = taskId => {
    tasksState.set(tasks => 
      tasks.filter(({id}) => id !== taskId)
    )
  }

  const toggleTaskComplete = (taskId, isCompleted) => { 
    tasksState.set(tasks => {
      const task = tasks.find(({id}) => id === taskId)

      return [
        ...tasks.filter(({id}) => id !== taskId),
        {
          ...task,
          completedAt: isCompleted ? new Date().toISOString() : null
        }
      ]
    })
  }

  const tasks = [...tasksState.get()]

  return {
    addTask,
    updateTask,
    removeTask,
    toggleTaskComplete,
    tasks
  }
}