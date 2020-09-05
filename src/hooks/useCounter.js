import { useState } from "react";

export const useCounter = (initialState = 0) => {

  const [counter, setstate] = useState(initialState);

  const increment = () => {
    setstate(counter+1);
  }

  const decrement = () => {
    setstate(counter-1);
  }

  const resset = () => {
    setstate(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    resset
  }
}
