import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducers from './redux/rootReducers';

const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk],
});

export default store;
