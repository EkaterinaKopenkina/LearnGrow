// Constants
const rootAction = 'learn-grow/user/';
const ADD_USER = `${rootAction}ADD_USER`;

// Initial state
const initialState = {
    name: null,
    lastname: null,
    class: null,
    email: null,
    login: null,
    password: null,
}

// Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                ...action,
            }
        default:
            return state;
    }
}

// Action creators
// const setAuth = (data) => ({type: SET_AUTH, action: data});

// // Thunks
// export const login = (values, submitProps, setStatusMessage, statusMessage, cookie, router) => async(dispatch) => {
//     const data = {
//         username: values.username,
//         password: values.password,
//     }
    
//     const result = await postData('token/', data, setStatusMessage, statusMessage);
//     if (result) {
//         const token = result.access;
//         const userId = result.user;

//         if (cookie.cookies.login) {
//             cookie.removeCookie('login');
//             cookie.removeCookie('id');
//         }
//         cookie.setCookie('login', token, { path: '/' });
//         cookie.setCookie('id', userId, { path: '/' });
//         router.push(`/account/${userId}`)

//         dispatch(setAuth({token, id: userId}));
//     }

//     submitProps.setSubmitting(false);
// }

export default userReducer;