const phaser = require.resolve('phaser/build/custom/phaser-split.js')
const pixi = require.resolve('phaser/build/custom/pixi.js')
const p2 = require.resolve('phaser/build/custom/p2.js')

const loaders = [
  { test: /pixi\.js/, loader: 'expose?PIXI' },
  { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
  { test: /p2\.js/, loader: 'expose?p2' },
]

const alias = { phaser, pixi, p2 }
const noParse = [pixi, p2]

module.exports = {
  alias,
  loaders,
  noParse,
}