'use strict'
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j]
    return r
  }
exports.__esModule = true
exports.THRESHOLD_OPERATIONS = ['<', '>', '=', '<=', '>='] // Note: should not be a const, because we want to treat it as regular list
exports.SUPPLY_OPERATIONS = __spreadArrays(exports.THRESHOLD_OPERATIONS, [
  'ANY',
  'OR',
  'NoOp',
])
exports.isCard = function (card) {
  if (!card) return false
  return card.name !== undefined
}
