import { useState } from "react";

export const useForm = (initialState = {}) => {
  
  const [formState, setFormState] = useState(initialState);
  
  const reset = () => {
    setFormState(initialState);
  }
  
  const handleInputCahnge = ({target}) => {
    setFormState({
      ...formState,
      [target.name]:target.value
    });
  }

  return [formState, handleInputCahnge, reset];
}
