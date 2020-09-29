import React, { createContext, useReducer } from 'react';
import { userReducer } from '../reducers/userReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [users, dispatch] = useReducer(userReducer, [
        {firstName: 'Nimesha', lastName: "Gunawardana"},
        {firstName: 'Jhon', lastName: "don"}
    ]);
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;