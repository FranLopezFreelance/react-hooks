import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginPage = () => {

  const {setUser} = useContext(UserContext);

  const login = () => {
    setUser({
      id: 123, 
      name:'Francisco',
      email:'fran@mail.com'
    });
  }
  
  return (
    <div className="container">
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-outline-success"
        onClick={login}>
        Login
      </button>
    </div>
  )
}
