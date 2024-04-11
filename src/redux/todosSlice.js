let nextTaskId = 0

export const addTask = taskName => ({
  type: 'ADD_TASK',
  payload: {
    id: ++nextTaskId,
    name: taskName,
  },
})

export const deleteTask = taskId => ({
  type: 'DELETE_TASK',
  payload: taskId,
})