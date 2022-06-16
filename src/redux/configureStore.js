import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: missionReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
