import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({todos, dispatch}) => {

  return (
    <ul className="list-group list-group-flush">
      { todos.map((todo, i) => (
        <TodoItem 
          key={todo.id} 
          i={i}
          todo={todo}
          dispatch={dispatch} />
      ))}
    </ul>
  )
}
