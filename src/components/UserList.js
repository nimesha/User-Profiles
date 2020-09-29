import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserList = () => {
  const { users } = useContext(UserContext);
  return users.length ? (
    <div className="user-list">
      <ul>
        {users.map(user => {
            return <div>{user}</div>
        })}
      </ul>
    </div>
  ) : (
      <div className="empty">There are no users to list.</div>
    );
}

export default UserList;