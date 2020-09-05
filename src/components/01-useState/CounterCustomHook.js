import React, { Fragment } from 'react'
import { useCounter } from '../../hooks/useCounter';

import '../../hooks-app.css';

export const CounterCustomHook = () => {

  const {state, increment, decrement, resset} = useCounter();

  return (
    <Fragment>
      <h1>Counter with custom hook: {state}</h1>
      <hr />
      <button className="btn btn-primary" 
        onClick={() => increment(2)}>
          - 1
      </button>
      <button className="btn btn-info"
        onClick={resset}>
          Resset
      </button>
      <button className="btn btn-primary" 
        onClick={() => decrement(2)}>
          + 1
      </button>
      <hr />
    </Fragment>
  )
}
