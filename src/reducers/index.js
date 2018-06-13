import { combineReducers } from 'redux';
import postReducer from './peopleReducer';

export default combineReducers({
  posts: postReducer
});
