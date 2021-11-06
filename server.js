const express = require('express')
const app = express()
const http = require('http').Server(app)
const PORT = process.env.PORT || 6666


app.get('/', (req, res) => res.send('hello devilmuk'))

app.post('/webhook', (req, res) => {
  console.log('req', req.body)
  // let reply_token = req.body.events[0].replyToken
  // let msg = req.body.events[0].message.text
  // reply(reply_token, msg)
  res.sendStatus(200)
})

function reply(reply_token, msg) {
  const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {71080ba9f1568923cabee1de7d101fed}'
  }
  const body = JSON.stringify({
      replyToken: reply_token,
      messages: [{
          type: 'text',
          text: msg
      }]
  })

  request.post({
      url: 'https://api.line.me/v2/bot/message/reply',
      headers,
      body,
  }, (err, res, body) => {
      console.log('status = ' + res.statusCode)
  })
}

http.listen(PORT, function(){
  console.log('listening on', http.address().port)
})