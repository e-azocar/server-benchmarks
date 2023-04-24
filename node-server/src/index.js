const express = require('express')

const app = express()

app.get('/status', (_, res) => {
  res.json({ status: 'ok' })
})

app.listen(6000, () => {
  console.log('Node server is running on http://localhost:6000')
})
