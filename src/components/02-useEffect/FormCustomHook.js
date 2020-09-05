import React, { Fragment, useEffect } from 'react';
import '../../hooks-app.css';
import { useForm } from '../../hooks/useForm';

export const FormCustomHook = () => {
  
  const [formState, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formState;

  useEffect(() => {
    console.log('Email cambió');
  }, [formState.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Fragment>
      <h1>Use Effect</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            className="form-control"
            placeholder="Nombre" 
            autoComplete="off" 
            value={name} 
            onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <input 
            type="text" 
            name="email" 
            className="form-control"
            placeholder="Email" 
            autoComplete="off" 
            value={email} 
            onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <input 
            type="password" 
            name="password" 
            className="form-control"
            placeholder="Contraseña" 
            autoComplete="off" 
            value={password} 
            onChange={handleInputChange}/>
        </div>
        <button 
          type="submit"
          className="btn btn-primary">
          Guardar
        </button>
      </form>
    </Fragment>
  )
}
