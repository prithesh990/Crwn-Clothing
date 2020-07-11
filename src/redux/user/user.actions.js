/*
* here in this action script before going to reducer
* we need to create a action according to the reducer because it expect the type and payload
*/
import { userActionTypes } from './user.types'

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})