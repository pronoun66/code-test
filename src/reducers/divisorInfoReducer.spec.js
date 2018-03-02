import * as ActionTypes from '../constants/actionTypes'
import reducer from './divisorInfoReducer'
import initialState from './initialState'


describe('Reducers::divisorInfo', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' }
    const expected = null

    expect(reducer(initialState.rangeInfo, action)).toEqual(expected)
  })

  it('should handle SET_DIVISOR_INFO', () => {
    const data = {
      outputDetails: [
        { divisor: 3, output: 'Boss' },
        { divisor: 5, output: 'Hogg' }
      ]
    }
    const action = { type: ActionTypes.SET_DIVISOR_INFO, data }
    const expected = data

    expect(reducer(null, action)).toEqual(expected)
  })
})
