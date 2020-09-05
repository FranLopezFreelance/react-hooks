import React from 'react';
import '../../hooks-app.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

  const {counter, increment } = useCounter(1);

  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {loading, data} = state;
  const {author, quote} = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      {/* <h3>Multiple Custom Hooks</h3> */}
      <hr />
      { 
        loading 
            ? 
            <div className="spinner spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>  
            : 
            <blockquote className="blockquote">
              <p className="mb-0">"{quote}"</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
      }   
      <hr />
      <button 
        onClick={increment}
        disabled={loading}
        className="btn btn-primary">
        Next Quote
      </button>   
    </div>
  )
}
