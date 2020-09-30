import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import UserAdd from './UserAdd';
import UserUpdate from './UserUpdate';

const UserModal = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.type === 'create' && 'Add New User'}
                    {props.type === 'update' && 'Update User Details'}
                    
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5">
                {props.type === 'create' && <UserAdd />}
                {props.type === 'update' && <UserUpdate user={props.user} />}
                { JSON.stringify(props, null, 2) }
            </Modal.Body>
        </Modal>
    );
}

export default UserModal;

