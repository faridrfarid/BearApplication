import reducer from '../reducers/index';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

export default store = createStore(reducer,
    applyMiddleware(thunkMiddleware))