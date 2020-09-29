import React, { createContext, useReducer } from 'react';
import { userReducer } from '../reducers/userReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [users, dispatch] = useReducer(userReducer, [
        {id: 1, firstName: 'Nimesha', lastName: "Gunawardana"},
        {id: 2, firstName: 'Jhon', lastName: "don"}
    ]);
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;