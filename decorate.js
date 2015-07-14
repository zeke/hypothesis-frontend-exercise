var URL = require('url')
var truncate = require('truncate')

deriveUserHandle = function(_) {
  _.userHandle = _.user
    .replace('acct:', '')
    .replace('@hypothes.is', '')
},

deriveDomain = function(_) {
  _.document.domain = URL.parse(_.document.link[0].href).host
},

truncateTitle = function(_) {
  // Alternative truncation techniques:
  // ..with CSS: https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/
  // ..with a handlebars helper: https://github.com/diy/handlebars-helpers#truncate
  _.document.titleTruncated = truncate(_.document.title, 30)
}

module.exports = function(_) {
  deriveUserHandle(_)
  deriveDomain(_)
  truncateTitle(_)
}
