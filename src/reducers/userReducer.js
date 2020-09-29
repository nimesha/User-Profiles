import uuid from 'uuid/v4';

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, {
                id: uuid(),
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                address: action.user.address,
                contact: action.user.contact,
                dob: action.user.dob,
                email: action.user.email,
                profilePic: action.user.profilePic,
            }
            ]
        case 'UPDATE_USER':
            return state;
        case 'REMOVE_USER':
            return state;
        default:
            return state;
    }
} 