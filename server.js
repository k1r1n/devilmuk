const express = require('express')
const app = express()
const PORT = process.env.PORT || 6666

app.get('/', (req, res) => res.send('hello devilmuk'))

app.post('/webhook', (req, res) => res.sendStatus(200))

app().listen(PORT, () => console.log(`Listening on ${ PORT }`))