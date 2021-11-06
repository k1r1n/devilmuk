const express = require('express')
const app = express()
const port = process.env.PORT || 6666

app.post('/webhook', (req, res) => res.sendStatus(200))
app.post('/', (req, res) => res.send('hello devilmuk'))
app.listen(port)