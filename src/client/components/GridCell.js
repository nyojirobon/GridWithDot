import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  cell: {
    border: 'solid 1px #000000',
    borderCollapse: 'collapse',
    height: '100%',
    backgroundColor: 'white'
  },
  dot: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: '50%',
    margin: '0 auto'
  }
})

export default function GridCell({ displayDot }) {
  const classes = useStyles()

  return (
    <div className={classes.cell}>
      <div
        className={classes.dot}
        style={displayDot ? { display: 'block' } : { display: 'none' }}
      />
    </div>
  )
}
