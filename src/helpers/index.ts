import * as types from 'aer-types/types'

/**
 * Could be used inside .filter() to create a list of unique elements.
 */
export const distinct = <T>(value: T, index: number, self: Array<T>) =>
  self.indexOf(value) === index

type ObjWithId = { id: string }
export const distinctById = <T extends ObjWithId>(
  value: T,
  index: number,
  self: Array<T>
) => self.findIndex((el) => value.id === el.id) === index

export const sortByCardType = (
  a: { type: types.CardType },
  b: { type: types.CardType }
) => {
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

export const byAscendingVersion = (a: types.Migration, b: types.Migration) => {
  if (a.version > b.version) {
    return 1
  } else if (a.version < b.version) {
    return -1
  } else {
    return 0
  }
}

export function formatExpansionName(expansion: types.Expansion): string {
  return expansion.wave
    ? `${expansion.name} (${expansion.wave})`
    : `${expansion.name} (-)`
}
