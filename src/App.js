import React from 'react';
import './App.css';
import UserAdd from './components/UserAdd';
import UserList from './components/UserList';

import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <UserList />
      </UserContextProvider>
    </div>
  );
}

export default App;
