import { createStore } from 'redux'

//Estado inicial
const initialState = {
  tasks: [],
}

//Reducer
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    // Nun ye que eliminemoslo, si que filtramoslo y facemos-y un array nuevu
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state
  }
};

//Crear el store (entrugar por qué sal tachao el createStore)
const store = createStore(tasksReducer)

export default store
