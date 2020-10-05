'use strict'
exports.__esModule = true
exports.variants = {
  DEFAULT: {
    id: 'DEFAULT',
    name: 'Default',
    configList: [
      {
        tier: 1,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { level: 1, hasTreasure: true },
      },
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
    ],
  },
  SHORT: {
    id: 'SHORT',
    name: 'Short',
    configList: [
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
    ],
  },
  EXTENDED: {
    id: 'EXTENDED',
    name: 'Extended',
    configList: [
      {
        tier: 1,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { hasTreasure: false },
      },
      {
        tier: 1,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { level: 1, hasTreasure: true },
      },
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 4,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { hasTreasure: false },
      },
    ],
  },
}
// Automagically generate union type of variant ids from variants
// object
exports.variantIds = Object.values(exports.variants).map(function (val) {
  return val.id
})
