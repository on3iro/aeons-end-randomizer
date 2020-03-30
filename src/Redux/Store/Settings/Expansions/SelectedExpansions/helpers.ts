import { Expansions } from './types'

const allExpansionsAreSelected = (expansions: Expansions) =>
  Object.values(expansions).every(exp => exp.selected)

export { allExpansionsAreSelected }
