/**
 * Imports
 */

var offsetParent = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var rootNode = $('<div style="position: relative"><div><div id="child"></div></div></div>')

  t.equal(rootNode, offsetParent($('#child')))
  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  if (html[0] === '#') return document.getElementById(html.slice(1))

  document.body.innerHTML = html
  return document.body.firstChild
}
