import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(logger, thunk));

export default store;
