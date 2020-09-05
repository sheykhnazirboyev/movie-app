import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../_reducers';

export default createStore(rootReducer, applyMiddleware(thunk));