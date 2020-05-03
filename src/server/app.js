import express from 'express'
import path from 'path'

const app = express()
const pathToDist = path.join('./', 'dist')

app.use(express.static(pathToDist))
app.use(express.static(path.join('./', 'public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(pathToDist, 'index.html'))
})

export default app
