const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTRATION_SUCCESS='REGISTRATION_SUCCESS';

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    user
})

export const registrationSuccess = user => ({
    type: REGISTRATION_SUCCESS,
    user
})