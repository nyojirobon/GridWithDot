import { useReducer } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import GridReducer from './GridReducer'

describe('GridReducer', () => {
  describe('decColumn', () => {
    it('current column number should be decreased', () => {
      const columnNum = 1
      const { result } = renderHook(() =>
        useReducer(GridReducer, { row: 0, column: columnNum })
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'decColumn' })
      })
      const [state] = result.current
      expect(state.column).toBeLessThan(columnNum)
    })

    it('current column number should not be decreased', () => {
      const columnNum = 0
      const { result } = renderHook(() =>
        useReducer(GridReducer, { row: 0, column: columnNum })
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'decColumn' })
      })
      const [state] = result.current
      expect(state.column).not.toBeLessThan(columnNum)
    })
  })

  describe('decRow', () => {
    it('current row number should be decreased', () => {
      const rowNum = 1
      const { result } = renderHook(() =>
        useReducer(GridReducer, { row: rowNum, column: 0 })
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'decRow' })
      })
      const [state] = result.current
      expect(state.row).toBeLessThan(rowNum)
    })

    it('current row number should not be decreased', () => {
      const rowNum = 0
      const { result } = renderHook(() =>
        useReducer(GridReducer, { row: rowNum, column: 0 })
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'decRow' })
      })
      const [state] = result.current
      expect(state.row).not.toBeLessThan(rowNum)
    })
  })

  describe('incColumn', () => {
    const maxColumn = 4
    it('current column number should be increased', () => {
      const columnNum = maxColumn - 2
      const { result } = renderHook(() =>
        useReducer(GridReducer, { row: 0, column: columnNum })
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'incColumn', maxColumn: maxColumn })
      })
      const [state] = result.current
      expect(state.column).toBeGreaterThan(columnNum)
    })

    it('current column number should not be increased', () => {
      const columnNum = maxColumn - 1
      const { result } = renderHook(() =>
        useReducer(GridReducer, { row: 0, column: columnNum })
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'incColumn', maxColumn: maxColumn })
      })
      const [state] = result.current
      expect(state.column).not.toBeGreaterThan(columnNum)
    })
  })

  describe('incRow', () => {
    const maxRow = 4
    it('current row number should be increased', () => {
      const rowNum = maxRow - 2
      const { result } = renderHook(() =>
        useReducer(GridReducer, { row: rowNum, column: 0 })
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'incRow', maxRow: maxRow })
      })
      const [state] = result.current
      expect(state.row).toBeGreaterThan(rowNum)
    })

    it('current row number should not be increased', () => {
      const rowNum = maxRow - 1
      const { result } = renderHook(() =>
        useReducer(GridReducer, { row: rowNum, column: 0 })
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'incRow', maxRow: maxRow })
      })
      const [state] = result.current
      expect(state.row).not.toBeGreaterThan(rowNum)
    })
  })
})
