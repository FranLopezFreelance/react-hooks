import React from 'react';

export const IncrementButton = React.memo(({increment}) => {
  return (
    <button 
      className="btn btn-primary"
      onClick={ () => increment(5) }>
        Incrementar
    </button>
  )
})
