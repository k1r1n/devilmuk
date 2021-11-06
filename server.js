const fs = require('fs')
const express = require('express')
const https = require('https')
const app = express()
const port = process.env.PORT || 6666

const https_options = {
  key: fs.readFileSync('/etc/letsencrypt/live/www.isiam.dev/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.isiam.dev/cert.pem'),
  ca: [
    fs.readFileSync('/etc/letsencrypt/live/www.isiam.dev/fullchain.pem')
 ]
}

app.post('/webhook', (req, res) => res.sendStatus(200))
app.listen(port)


https.createServer(https_options, app).listen(port, () => console.log(`bot devilmuk listening on port ${port}!`))