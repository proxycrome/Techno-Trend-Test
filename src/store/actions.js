import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from "./actionTypes";
import axios from 'axios';

const baseURL = 'https://interviewtst.herokuapp.com';


const getUsers = () => {
    return {
        type: GET_USERS
    }
}

const getUsersSuccess = (data) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: data,
    }
}

const getUsersError = (error) => {
    return {
        type: GET_USERS_ERROR,
        payload: error,
    }
}

export const getUsersAsync = () => async (dispatch) => {
    try {
        dispatch(getUsers());
        const response = await axios.get(`${baseURL}/get-all-users`);
        dispatch(getUsersSuccess(response?.data));
    } catch (error) {
        dispatch(getUsersError(error?.response?.data));
    }
}

