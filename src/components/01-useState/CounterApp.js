import React, { Fragment, useState } from 'react';

import '../../hooks-app.css';

export const CounterApp = () => {

  const [counters,setCounter] = useState({
    counter1: 0,
    counter2: 0
  });

  const {counter1, counter2} = counters;

  const handleClick = () => {
    setCounter({
      ...counters,
      counter1: counter1+1
    });
  }

  return (
    <Fragment>
      <h1>Counter 1: { counter1 } </h1>
      <h1>Counter 2: { counter2 } </h1>
      <hr />
      <button className="btn btn-primary"
        onClick={handleClick}>
        + 1
      </button>
    </Fragment>
  )
}
