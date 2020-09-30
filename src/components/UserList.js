import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Button } from 'react-bootstrap'
import CreateUserModal from './CreateUserModal';
import UserDetails from './UserDetails';

const UserList = () => {
    const { users } = useContext(UserContext);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>

            <div className="p-5">
                <div className="row py-3   top-background">
                    <div className="col-12 px-0 ">
                        <h3 className="text-center text-white pt-2">Listed User Profiles</h3>

                        <Button className="btn btn-primary btn-border-dark float-right mr-4" onClick={() => setModalShow(true)}>
                            Add New User
                        </Button>
                        <CreateUserModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>

                <div className="row">
                    {
                        users.length ? (
                            <table className="table col-12">
                                <thead className="text-white">
                                    <tr>
                                        <th scope="col">Avatar</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Date Of Birth</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Address</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => {

                                        return (<UserDetails user={user} key={user.id}  />);

                                    })}
                                </tbody>
                            </table>
                        ) : (
                                <div classNameName="empty">There are no users to list.</div>
                            )}
                </div>
            </div>










            {
                users.length ? (
                    <div classNameName="user-list">
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
                        <div classNameName="empty">There are no users to list.</div>
                    )
            }
        </>
    )
}


export default UserList;