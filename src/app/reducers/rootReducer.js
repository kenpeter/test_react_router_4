import {combineReducers} from 'redux';
import booksReducer from './booksReducer';

// Combine with one reducer
const rootReducer = combineReducers({
  booksReducer
});

// Return default root reducer
export default rootReducer;
