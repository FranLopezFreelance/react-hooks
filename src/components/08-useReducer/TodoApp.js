import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo Reducer App ({todos.length})</h1>
      <hr />
      <AddTodo dispatch={dispatch}/>
      <hr />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  )
}
