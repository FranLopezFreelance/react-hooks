import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { bigProcess } from '../../helpers/bigProcess';

import '../../hooks-app.css';

export const MemoHook = () => {

  const {counter, increment} = useCounter(5000);

  const [show, setShow] = useState(true);

  const memo = useMemo(() => {
    bigProcess(counter);
  }, [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{counter}</small></h3>
      <hr />
      <p>{ memo }</p>
      <button className="btn btn-primary"
        onClick={increment}>
          Incrementar
      </button>

      <button className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}>
        Show / Hide { JSON.stringify(show)}
      </button>
    </div>
  )
}
