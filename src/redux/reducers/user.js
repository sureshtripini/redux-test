const user = (state = {}, action) => {
    // write Reducers to handle the actions.
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return (
                {
                    userName: action.userName,
                    isLoggedIn: true
                });

        case 'REGISTRATION_SUCCESS':
            return (
                {
                    isRegistered: true
                });
        default:
            return state;

    }
}

export default user