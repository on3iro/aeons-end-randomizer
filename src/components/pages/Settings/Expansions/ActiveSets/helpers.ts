import * as types from 'aer-types/types'

export const expansionsToItems = (
  expansions: ReadonlyArray<types.Expansion & { selected: boolean }>
) =>
  expansions.map((expansion) => ({
    name: expansion.name,
    id: expansion.id,
    label: expansion.name,
    checked: expansion.selected,
  }))
