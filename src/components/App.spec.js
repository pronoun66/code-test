import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'

describe('<Page />', () => {
  const actions = {
    notFound: jest.fn()
  }

  it('should contain title', () => {
    const wrapper = shallow(<App
      actions={actions}
    />)

    expect(wrapper.find('div').length).toEqual(1)
  })
})
