import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import GridCell from './GridCell'

describe('<GridCell />', () => {
  let shallow
  beforeEach(() => {
    shallow = createShallow()
  })

  it('show dot as displayDot is true', () => {
    const wrapper = shallow(<GridCell displayDot={true} />)
    expect(wrapper.find('[data-test="dot"]').get(0).props.style).toHaveProperty(
      'display',
      'block'
    )
  })

  it('hide dot as displayDot is false', () => {
    const wrapper = shallow(<GridCell displayDot={false} />)
    expect(wrapper.find('[data-test="dot"]').get(0).props.style).toHaveProperty(
      'display',
      'none'
    )
  })
})
