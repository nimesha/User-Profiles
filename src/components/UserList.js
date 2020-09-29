import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Button } from 'react-bootstrap'
import CreateUserModal from './CreateUserModal';

const UserList = () => {
    const { users } = useContext(UserContext);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Add New User
            </Button>
            <CreateUserModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            {
                users.length ? (
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
                    )
            }
        </>
    )
}


export default UserList;