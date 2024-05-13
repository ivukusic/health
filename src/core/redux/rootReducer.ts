import { combineReducers } from 'redux';

import { authReducer } from './slices/authSlice';
import { cartReducer } from './slices/cartSlice';
import { counterReducer } from './slices/counterSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  counter: counterReducer,
});

export default rootReducer;
