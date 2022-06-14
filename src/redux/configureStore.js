import { createStore, combineReducers } from 'redux';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({ rockets: rocketsReducer });
const store = createStore(rootReducer);

export default store;
