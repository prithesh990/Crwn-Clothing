/*
 * the reducer reciveves and state which can be current or pevious state and the action 
 * it vl pass the type of action that the app or user perfroms and the payload is the the action performed
 * the app when start the userReducer may not have any state so we have to set the initial state
 * the userReducer vl get action= {type,payload} where type is the type of action and payload is the data to be changed


*/
import { userActionTypes } from './user.types'

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER: return {
      ...state,
      currentUser: action.payload
    }

    default:
      return state
  }
}

export default userReducer;