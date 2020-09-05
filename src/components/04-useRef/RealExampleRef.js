import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-useFetch/MultipleCustomHooks';
import '../../hooks-app.css';

export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>useRef Real Example</h1>
      <hr />
      { show && <MultipleCustomHooks />}
      <button 
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-success">
        Show/Hide
      </button>
    </div>
  )
}
