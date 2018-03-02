import * as ActionTypes from '../constants/actionTypes'
import reducer from './rangeInfoReducer'
import initialState from './initialState'


describe('Reducers::rangeInfo', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' }
    const expected = null

    expect(reducer(initialState.rangeInfo, action)).toEqual(expected)
  })

  it('should handle SET_RANGE_INFO', () => {
    const data = { lower: 0, upper: 100 }
    const action = { type: ActionTypes.SET_RANGE_INFO, data }
    const expected = { lower: 0, upper: 100 }

    expect(reducer(null, action)).toEqual(expected)
  })
})
