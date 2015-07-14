var domready = require('domready')
var xhr = require('xhr')
var template = require('./template.hbs')
var decorate = require('./decorate.js')

domready(function () {
  xhr({
    uri: '/annotations',
    json: true
  }, function (err, resp, annotations) {
    if (err) return console.error(err)
    annotations.map(decorate)
    window.a = annotations
    document.querySelector('#annotations').innerHTML = template({annotations: annotations})
  })
})
