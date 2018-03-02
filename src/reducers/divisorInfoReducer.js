import { SET_DIVISOR_INFO } from '../constants/actionTypes'
import initialState from './initialState'

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
export default function rangeInfo(state = initialState.divisorInfo, action) {
  switch (action.type) {
    case SET_DIVISOR_INFO:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return { ...action.data }
    default:
      return state
  }
}
