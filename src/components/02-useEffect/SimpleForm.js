import React, { Fragment, useEffect, useState } from 'react';
import { Message } from './Message';
import '../../hooks-app.css';

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const {name, email} = formState;

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]:target.value
    });
  } 

  return (
    <Fragment>
      <h1>Form Custom Hook</h1>
      <form>
        <div className="form-group">
          <input type="text" name="name" className="form-control"
            placeholder="Nombre" autoComplete="off" value={name} 
            onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <input type="text" name="email" className="form-control"
            placeholder="Email" autoComplete="off" value={email} 
            onChange={handleInputChange}/>
        </div>
      </form>
      {( (name === '123') && <Message />)}
    </Fragment>
  )
}
