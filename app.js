const http = require('http')
const { PORT = 3000 } = process.env

const express = require('express')
const app = express()

app.use(express.static('public'))



app.get('/', function (req, res) {

  res.end('Hello World from Node this is awesome !.js\n')


})

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
})

/*

http.createServer((req, res) => {
  res.end('Hello World from Node.js\n')
}).listen(PORT)

*/