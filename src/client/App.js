import React from 'react'
import GridFrame from './components/GridFrame'

export default function App() {
  return (
    <div className="app">
      <GridFrame rowNum={4} columnNum={4} />
    </div>
  )
}
