import React, { useRef } from 'react';
import '../../hooks-app.css';

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input 
        ref={inputRef}
        className="form-control"
        placeholder="Nombre" />
      <br />
      <button 
        onClick={handleClick}
        className="btn btn-outline-primary">
        Focus
      </button>    
    </div>
  )
}
