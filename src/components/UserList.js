import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserList = () => {
    const { users } = useContext(UserContext);
    return users.length ? (
        <div className="user-list">
            <ul>
                {users.map(user => {
                    return <div key={user.id}>{user.firstName}, {user.lastName}
                        <div >
                            {user.profilePic ? <img src={`${user.profilePic}`} /> : ''}
                        </div>
                    </div>
                })}
            </ul>
        </div>
    ) : (
            <div className="empty">There are no users to list.</div>
        );
}

export default UserList;