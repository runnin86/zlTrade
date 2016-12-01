var express = require('express')
var path = require('path')
var app = express()
var favicon = require('express-favicon')

app.use('/static', express.static(path.join(__dirname, './dist/static/')))
app.use('/img', express.static(path.join(__dirname, './src/assets/images')))
app.use('/css', express.static(path.join(__dirname, '../src/assets/css')))

app.use(favicon(path.join(__dirname, './favicon.ico')))

app.get(['/', '/checkout/:token/:pwd', '/recharge/:state', '/user', '/plan'], function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './dist') })
})

var server = app.listen(3030, '0.0.0.0', function () {

  var host = server.address().address
  var port = server.address().port

  console.log('zl listening at http://%s:%s', host, port)

})
