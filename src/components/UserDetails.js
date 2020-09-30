import React, { useContext } from 'react';
import { Button } from 'react-bootstrap'
import moment from 'moment';
import { UserContext } from '../contexts/UserContext';
import UserModal from './UserModal';

const UserDetails = ({ user }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const { dispatch } = useContext(UserContext);
    return (
        <tr>
            <td className="align-middle">
                {user.profilePic ? <img src={`${user.profilePic}`} className="avatar" alt={user.firstName} /> : <img src="profile.png" className="avatar" alt="avatar" />}
            </td>
            <td className="align-middle">{user.firstName}</td>
            <td className="align-middle">{user.lastName}</td>
            <td className="align-middle">{user.countryCode}{user.contact}</td>
            <td className="align-middle">{moment(user.dob).format('DD/MM/YYYY')}</td>
            <td className="align-middle">{user.email}</td>
            <td className="align-middle">{user.address}</td>
            <td className="align-middle">
                <button className="btn btn-info mr-1" onClick={() => setModalShow(true)}>Edit</button>
                <UserModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    type={'update'}
                    user={user}
                />
                <button className="btn btn-danger" onClick={() => dispatch({ type: 'REMOVE_USER', id: user.id })}>Delete</button>
            </td>

        </tr>

    )


}

export default UserDetails;