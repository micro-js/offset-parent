
# offset-parent

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Find the offset parent of a DOM element

## Installation

    $ npm install @f/offset-parent

## Usage

The offset parent of a given element is the first parent up the tree that is positioned `absolute`, `relative`, or `fixed`.

```js
var offsetParent = require('@f/offset-parent')

function position (node, placement) {
  var parent = offsetParent(node)

  node.style.left = (parent.offsetWidth / 2) - (node.offsetWidth / 2) + 'px'
  switch (placement) {
    case 'top':
      node.style.top = -node.offsetHeight + 'px'
      break
    case 'bottom':
      node.style.bottom = '0px'
      break
  }
}

```

## API

### offsetParent(node)

- `node` - The DOM node who's offsetParent you want to find

**Returns:** The first node above `node` that is positioned `absolute`, `relative`, or `fixed`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/offset-parent.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/offset-parent
[git-image]: https://img.shields.io/github/tag/micro-js/offset-parent.svg?style=flat-square
[git-url]: https://github.com/micro-js/offset-parent
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/offset-parent.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/offset-parent
