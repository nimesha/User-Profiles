import React, { useContext } from 'react';
import { Button } from 'react-bootstrap'
import CreateUserModal from './CreateUserModal';
import moment from 'moment';
import { UserContext } from '../contexts/UserContext';

const UserDetails = ({ user }) => {

    const { dispatch } = useContext(UserContext);
    return (
        <tr>
            <td className="align-middle">
                {user.profilePic ? <img src={`${user.profilePic}`} className="avatar"  alt={user.firstName}  /> : <img src="profile.png" className="avatar"  alt="avatar" />}
            </td>
            <td className="align-middle">{user.firstName}</td>
            <td className="align-middle">{user.lastName}</td>
            <td className="align-middle">{user.contact}</td>
            <td className="align-middle">{moment(user.dob).format('DD/MM/YYYY')}</td>
            <td className="align-middle">{user.email}</td>
            <td className="align-middle">{user.address}</td>
            <td className="align-middle">
                <button className="btn btn-info">Edit</button>
                <button className="btn btn-danger" onClick={() => dispatch({ type: 'REMOVE_USER', id: user.id })}>Delete</button>
            </td>
        </tr>
    )


}

export default UserDetails;