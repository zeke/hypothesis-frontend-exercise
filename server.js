var annotations = [require('./data.json')]
var express = require('express')
var app = express()
var browserify_express = require('browserify-express')
var bundle = browserify_express({
  entry: __dirname + '/client.js',
  watch: __dirname + '/client.js',
  mount: '/client.js',
  verbose: true,
  minify: false,
  bundle_opts: { debug: true }
})

app.use(bundle)
app.use(express.static(__dirname))

app.get('/annotations', function (req, res) {
  res.json(annotations)
})

app.listen(process.env.PORT || 3000)
