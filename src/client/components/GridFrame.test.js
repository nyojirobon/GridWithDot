import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import { act } from 'react-dom/test-utils'
import GridFrame from './GridFrame'
import * as GridReducer from '../reducers/GridReducer'

describe('<GridFrame />', () => {
  let mount
  beforeEach(() => {
    mount = createMount()
  })

  it('show 16 cells as row is 4 and column is 4', () => {
    const rowNum = 4
    const columnNum = 4
    const wrapper = mount(<GridFrame rowNum={rowNum} columnNum={columnNum} />)
    expect(wrapper.find('GridCell').length).toEqual(rowNum * columnNum)
  })

  describe('dispatch action as each arrow key pressed', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    const rowNum = 4
    const columnNum = 4

    it('dispatch decColumn as left arrow key pressed', () => {
      GridReducer.default = jest.fn(() => {
        return { row: 0, column: 0 }
      })
      act(() => {
        mount(<GridFrame rowNum={rowNum} columnNum={columnNum} />)
        window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 37 }))
      })
      expect(GridReducer.default).toBeCalledWith(expect.anything(), {
        type: 'decColumn'
      })
    })

    it('dispatch decRow as up arrow key pressed', () => {
      GridReducer.default = jest.fn(() => {
        return { row: 0, column: 0 }
      })
      act(() => {
        mount(<GridFrame rowNum={rowNum} columnNum={columnNum} />)
        window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 38 }))
      })
      expect(GridReducer.default).toBeCalledWith(expect.anything(), {
        type: 'decRow'
      })
    })

    it('dispatch incColumn as right arrow key pressed', () => {
      GridReducer.default = jest.fn(() => {
        return { row: 0, column: 0 }
      })
      act(() => {
        mount(<GridFrame rowNum={rowNum} columnNum={columnNum} />)
        window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 39 }))
      })
      expect(GridReducer.default).toBeCalledWith(expect.anything(), {
        type: 'incColumn',
        maxColumn: columnNum
      })
    })

    it('dispatch incRow as down arrow key pressed', () => {
      GridReducer.default = jest.fn(() => {
        return { row: 0, column: 0 }
      })
      act(() => {
        mount(<GridFrame rowNum={rowNum} columnNum={columnNum} />)
        window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 40 }))
      })
      expect(GridReducer.default).toBeCalledWith(expect.anything(), {
        type: 'incRow',
        maxRow: rowNum
      })
    })
  })
})
