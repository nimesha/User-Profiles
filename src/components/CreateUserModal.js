import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import UserAdd from './UserAdd';

const CreateUserModal = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New User
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5">
               
                <UserAdd />
            </Modal.Body>
        </Modal>
    );
}

export default CreateUserModal;

