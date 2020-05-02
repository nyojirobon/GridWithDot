import express from 'express'
import path from 'path'

const app = express()
const pathToDist = path.join('./', 'dist')

app.use(express.static(pathToDist))

app.get('*', (req, res) => {
  res.sendFile(path.join(pathToDist, 'index.html'))
})

app.listen(3000, () => {
  console.log('server running')
})
