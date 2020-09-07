import React, { useContext } from 'react';
import { UserContext } from './UserContext';
export const HomePage = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="container">
      <h1>Home Page</h1>
      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>
    </div>
  )
}
