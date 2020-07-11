/*
* combineReducer is to combined the reducer in the root reducer
*/
/////////////////////////////////////////*/-
import userReducer from './user/user.reducer';
import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})