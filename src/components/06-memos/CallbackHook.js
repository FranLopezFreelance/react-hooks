import React, { useState, useCallback, useEffect } from 'react';
import { IncrementButton } from './IncrementButton';

import '../../hooks-app.css';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

/*   const increment = () => {
    setCounter(counter+1);
  } */

  const increment = useCallback((num) => {
    setCounter(c => c + num);
  }, [setCounter]);

  useEffect(() => {
    //
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook</h1>
      <h4>Counter: {counter}</h4>
      <hr />
      <IncrementButton increment={increment} />
    </div>
  )
}
