import React from 'react'
import { useForm } from '../../hooks/useForm';

export const AddTodo = ({dispatch}) => {

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(description.trim().length <=1){
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    };
    const action = {
      type: 'add',
      payload: newTodo
    }
    dispatch(action);
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="description" placeholder="Nueva tarea..."
        className="form-control" onChange={handleInputChange} 
        value={description} />
      <button type="submit" className="btn btn-outline-primary add">
        Add
      </button>
    </form>
  )
}
