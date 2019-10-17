import * as types from './types'

export const sortByCardType = (a: types.Slot, b: types.Slot) => {
  if (a.type === 'Gem') {
    return -1
  }

  if (a.type === 'Relic' && b.type === 'Spell') {
    return -1
  }

  return 1
}

export const byCost = (a: { cost?: number }, b: { cost?: number }) => {
  if (!a.cost) {
    return -1
  }

  if (!b.cost) {
    return 1
  }

  if (a.cost < b.cost) {
    return -1
  }

  if (a.cost > b.cost) {
    return 1
  }

  return 0
}
