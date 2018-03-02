import { NOT_FOUND } from 'redux-first-router'
import { fetchData } from './utils'
import { SET_RANGE_INFO, SET_DIVISOR_INFO } from './constants/actionTypes'

export default {
  HOME: {
    path: '/',
    thunk: async (dispatch) => { // eslint-disable-line
      const rangeInfo = await fetchData('/api/rangeInfo')
      const divisorInfo = await fetchData('/api/divisorInfo')

      if (rangeInfo === null) {
        return dispatch({ type: NOT_FOUND })
      }

      dispatch({ type: SET_RANGE_INFO, data: rangeInfo })
      dispatch({ type: SET_DIVISOR_INFO, data: divisorInfo })
    }
  }
}
