export default function GridReducer(state, action) {
  switch (action.type) {
    // move left
    case 'decColumn': {
      const newColumn = state.column - 1 < 0 ? state.column : state.column - 1
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
        state.column + 1 >= action.maxColumn ? state.column : state.column + 1
      return { ...state, column: newColumn }
    }
    // move down
    case 'incRow': {
      const newRow = state.row + 1 >= action.maxRow ? state.row : state.row + 1
      return { ...state, row: newRow }
    }
  }
}
