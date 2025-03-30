import { postData } from "../api/api";

// Constants
const rootAction = 'learn-grow/auth/';
const SET_AUTH = `${rootAction}SET_IS_AUTH`;

// Initial state
const initialState = {
    isAuth: false,
    id: null,
    token: null
}

// Reducer
const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: true,
                id: action.id,
                token: action.token
            }
        default:
            return state;
    }
}

// Action creators
const setAuth = (data) => ({type: SET_AUTH, action: data});

// Thunks
export const login = (values, submitProps, setStatusMessage, statusMessage, cookie, router) => async(dispatch) => {
    const data = {
        username: values.username,
        password: values.password,
    }
    
    const result = await postData('token/', data, setStatusMessage, statusMessage);
    if (result) {
        const token = result.access;
        const userId = result.user;

        if (cookie.cookies.login) {
            cookie.removeCookie('login');
            cookie.removeCookie('id');
        }
        cookie.setCookie('login', token, { path: '/' });
        cookie.setCookie('id', userId, { path: '/' });
        router.push(`/account/${userId}`)

        dispatch(setAuth({token, id: userId}));
    }

    submitProps.setSubmitting(false);
}

export const loadAuth = (data) => (dispatch) => {
    dispatch(setAuth(data));
}

export const loadAuthData = (setData, setLoading, setError) => async(dispatch) => {
    // getAuthData(`students/${id}/`, setData, setLoading, setError, token);
}

export default authReduser;