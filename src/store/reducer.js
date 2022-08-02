import {GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS} from './actionTypes';

const initialState = {
    loading: false,
    users: null,
    error: null,
}

const Person = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            state = {
                ...state,
                loading: true,
            }
            break;

        case GET_USERS_SUCCESS:
            state = {
                ...state,
                loading: false,
                users: action.payload,
                error: null,
            }
            break;

        case GET_USERS_ERROR:
            state = {
                ...state,
                loading: false,
                users: null,
                error: action.payload,
            }  
            break;

        default:
            state = { ...state }
            break;
    }

    return state;
}

export default Person