// Constants
const rootAction = 'learn-grow/app/'
const INITIALIZED_SUCCESS = `${rootAction}INITIALIZED_SUCCESS`;

// Initial state
const initialState = {
    initialized: false,
}

// Reducer
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
    }
}

// Action creators
const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS})