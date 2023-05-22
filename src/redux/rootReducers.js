import { combineReducers } from 'redux';
import { movieReducer } from './reducers';

const rootReducers = combineReducers({
  movieReducer,
});

export default rootReducers;
