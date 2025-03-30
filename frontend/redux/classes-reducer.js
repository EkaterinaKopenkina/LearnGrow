import { getData } from "../api/api";

// Constants
const rootAction = 'learn-grow/classes/';
const SET_CLASSES = `${rootAction}SET_CLASSES`;

// Initial state
const initialState = null;

// Reducer
const classesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLASSES:
            return action.data
        default:
            return state;
    }
}

// Action creators
const setClasses = (data) => ({type: SET_CLASSES, data});

// Thunks
export const getClasses = (setLoading, setError) => async(dispatch) => {
    const result = await getData('classes/', setLoading, setError);
    if (result) {
        console.log(result);
        dispatch(setClasses());
    }
}

export default classesReducer;


