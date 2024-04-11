import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask } from './redux/todosSlice'

const App = () => {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const [taskName, setTaskName] = useState('')

  const handleAddTask = () => {
    dispatch(addTask(taskName))
    setTaskName('')
  }

  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId))
  }

  return (
    <>
      <div>
        <h1>Lista de tareas</h1>
        <input
          type="text"
          id='taskImput'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Añadir tarea</button>
        <ul>
          {tasks.map(task => (
            <li className='task-component' key={task.id}>
              <p>{task.name}</p>
              <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App