/**
 * Expose offsetParent
 */

module.exports = offsetParent

/**
 * offsetParent
 */

function offsetParent (node) {
  while ((node = node.parentNode) && node !== document.body) {
    var pos = node.style.position

    if (pos === 'relative' || pos === 'fixed' || pos === 'absolute') {
      break
    }
  }

  return node
}
