import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import App from './App'

describe('<App />', () => {
  let mount
  beforeEach(() => {
    mount = createMount()
  })

  it('has GridFrame', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('GridFrame').length).toEqual(1)
  })
})
