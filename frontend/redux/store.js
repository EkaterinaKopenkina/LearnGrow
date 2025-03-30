import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import { thunk } from 'redux-thunk';

import authReduser from "./auth-reducer";
import userReducer from './user-reducer';
import classesReducer from './classes-reducer';

const reducers = combineReducers({
    auth: authReduser,
    user: userReducer,
    classes: classesReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;