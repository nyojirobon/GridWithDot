import React, { useReducer, useCallback, useEffect } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/core/styles'
import GridCell from './GridCell'

const useStyles = makeStyles({
  frame: {
    width: '600px',
    height: '600px',
    border: 'solid 1px #000000',
    margin: '0 auto !important'
  }
})

export default function GridFrame({ rowNum, columnNum }) {
  const classes = useStyles()

  const [currentCell, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        // move left
        case 'decColumn': {
          const newColumn =
            state.column - 1 < 0 ? state.column : state.column - 1
          return { ...state, column: newColumn }
        }
        // move up
        case 'decRow': {
          const newRow = state.row - 1 < 0 ? state.row : state.row - 1
          return { ...state, row: newRow }
        }
        // move right
        case 'incColumn': {
          const newColumn =
            state.column + 1 >= columnNum ? state.column : state.column + 1
          return { ...state, column: newColumn }
        }
        // move down
        case 'incRow': {
          const newRow = state.row + 1 >= rowNum ? state.row : state.row + 1
          return { ...state, row: newRow }
        }
      }
    },
    { row: 0, column: 0 }
  )

  const handleKeyPress = useCallback((event) => {
    switch (event.keyCode) {
      // left arrow key
      case 37:
        dispatch({ type: 'decColumn' })
        break
      // up arrow key
      case 38:
        dispatch({ type: 'decRow' })
        break
      // right arrow key
      case 39:
        dispatch({ type: 'incColumn' })
        break
      // down arrow key
      case 40:
        dispatch({ type: 'incRow' })
        break
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  const cellNum = rowNum * columnNum
  const cells = [...Array(cellNum)].map((_, i) => {
    const row = Math.floor(i / columnNum)
    const column = i % columnNum
    const displayDot = row === currentCell.row && column === currentCell.column
    return (
      <GridListTile component="div" key={i} cols={1}>
        <GridCell displayDot={displayDot} />
      </GridListTile>
    )
  })

  return (
    <GridList
      component="div"
      className={classes.frame}
      cols={columnNum}
      cellHeight={150}
      spacing={0}
    >
      {cells}
    </GridList>
  )
}
