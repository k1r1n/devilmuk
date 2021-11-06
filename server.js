const express = require('express')
const app = express()
const http = require('http').Server(app)
const PORT = process.env.PORT || 6666

app.get('/', (req, res) => res.send('hello devilmuk'))

app.post('/webhook', (req, res) => res.sendStatus(200))

http.listen(PORT, function(){
  console.log('listening on', http.address().port)
})