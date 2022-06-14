import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({ rockets: rocketsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
