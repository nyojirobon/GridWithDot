import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join('./', 'dist')))
app.use(express.static(path.join('./', 'public')))

app.get('*', (req, res) => {
  res.sendFile('../../dist/index.html', { root: __dirname })
})

export default app
