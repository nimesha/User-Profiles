export const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, {
                firstName: action.user.firstName,
                lastName: action.user.lastName
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