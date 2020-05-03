import React, { useReducer, useCallback, useEffect } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/core/styles'
import GridReducer from '../reducers/GridReducer'
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
  const [currentCell, dispatch] = useReducer(GridReducer, { row: 0, column: 0 })

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
        dispatch({ type: 'incColumn', maxColumn: columnNum })
        break
      // down arrow key
      case 40:
        dispatch({ type: 'incRow', maxRow: rowNum })
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
      data-test="frame"
    >
      {cells}
    </GridList>
  )
}
