const bodyParser = require('body-parser')
const request = require('request')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const PORT = process.env.PORT || 6666

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('hello devilmuk'))

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text
    console.log('req.body.events', req.body.events)
    getUserProfiles()
    reply(reply_token, msg)
    res.sendStatus(200)
})


function getUserProfiles() {
  var url = 'https://api.line.me/v2/profile'
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {8pkfXWW/9CP4icNaZdhCaCUWj9jXTFgb3XAJRV4131qTcztWWZ/uKdZsVUYnZAY2Ej1iXixNwZNHAGwcaBB5nh1xLBpwbttUH0vZZ9C3moPtOADSsLuqtF7fEdyUW7mC6KIeqT1Dhbos7A1dTF61GgdB04t89/1O/w1cDnyilFU=}'
  };
  
  request.get({
    url,
    headers,
  }, (err, res, body) => {
      console.log('body', body)
  })
}

function reply(reply_token, msg) {
  console.log('msg', msg)
  const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {8pkfXWW/9CP4icNaZdhCaCUWj9jXTFgb3XAJRV4131qTcztWWZ/uKdZsVUYnZAY2Ej1iXixNwZNHAGwcaBB5nh1xLBpwbttUH0vZZ9C3moPtOADSsLuqtF7fEdyUW7mC6KIeqT1Dhbos7A1dTF61GgdB04t89/1O/w1cDnyilFU=}'
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
      console.log('err', err)
      console.log('status = ' + res.statusCode)
  })
}

http.listen(PORT, function(){
  console.log('listening on', http.address().port)
})