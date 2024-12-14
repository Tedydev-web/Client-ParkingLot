import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import placeReducer from './placeReducer'
import navigationReducer from './navigationReducer'
import boxVisibleReducer from './boxVisibleReducer'

const rootReducer = combineReducers ({
  searchReducer,
  placeReducer,
  navigationReducer,
  boxVisibleReducer
});

export default rootReducer;