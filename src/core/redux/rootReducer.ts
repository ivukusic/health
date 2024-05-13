import { combineReducers } from 'redux';

import { counterReducer } from './slices/counterSlice';
import { authReducer } from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export default rootReducer;
