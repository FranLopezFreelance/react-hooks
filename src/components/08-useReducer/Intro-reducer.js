const initialState = [{
  id: 1,
  todo: 'Hacer las compras',
  done: false
}];


//La función reducer es una simple función que recibe un state
//y un action, y devuelve un nuevo state
const todoReducer = (state = initialState, action = null) => {
  switch(action?.type){
    case 'ADD':
      return [...state, action.payload];
    default:
      return state;
  }
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Hacer la tarea',
  done: false
}

const action = {
  type: 'ADD',
  payload: newTodo
}

todos = todoReducer(todos, action)

console.log(todos);