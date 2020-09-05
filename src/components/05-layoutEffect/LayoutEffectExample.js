import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../../hooks-app.css';

export const LayoutEffectExample = () => {

  const {counter, increment } = useCounter(1);
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { data} = state;
  const { quote } = !!data && data[0];

  const p = useRef();

  const [ref, setRef] = useState({});

  useLayoutEffect(() => {
    setRef(p.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <h3>LayoutEffect</h3>
      <hr />
        <blockquote className="blockquote layout">
          <p 
            className="mb-0"
            ref={p}>
              {quote}
          </p>
        </blockquote>
      <hr />
      <pre>
          {JSON.stringify(ref, null, 3)}
      </pre>
      <hr />
      <button 
        onClick={increment}
        className="btn btn-primary">
        Next Quote
      </button>   
    </div>
  )
}
