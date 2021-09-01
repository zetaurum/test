import { createState, useState } from '@hookstate/core'
import { v4 as uuid } from 'uuid'

const TASKS_STATE = createState([])

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

  const getTask = taskId => {
    const tasks = tasksState.get()
    return tasks.find(({id}) => id === taskId)
  }

  const tasks = [...tasksState.get()]

  return {
    addTask,
    updateTask,
    removeTask,
    toggleTaskComplete,
    getTask,
    tasks
  }
}