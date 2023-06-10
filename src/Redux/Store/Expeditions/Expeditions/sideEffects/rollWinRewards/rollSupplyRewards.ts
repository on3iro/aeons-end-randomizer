import { rollNewEntity } from '../helpers'

import { getRandomEntity } from 'Redux/helpers'

import * as types from 'aer-types/types'

export const rollSupplyRewards = (
  gemIds: string[],
  relicIds: string[],
  spellIds: string[],
  seed: types.Seed,
  rollNewEntityFn: Function = rollNewEntity
) => {
  // We pack the values into arrays to make it possible to get empty values
  // which are not null below
  const newGemResult =
    gemIds.length > 0
      ? rollNewEntityFn(gemIds, getRandomEntity, seed)
      : { result: undefined, seed }
  const newGem = newGemResult.result ? [newGemResult.result] : []

  const newRelicResult =
    relicIds.length > 0
      ? rollNewEntityFn(relicIds, getRandomEntity, newGemResult.seed)
      : { result: undefined, seed: newGemResult.seed }
  const newRelic = newRelicResult.result ? [newRelicResult.result] : []

  const newSpellResult =
    spellIds.length > 0
      ? rollNewEntityFn(spellIds, getRandomEntity, newRelicResult.seed)
      : { result: undefined, seed: newRelicResult.seed }
  const newSpell = newSpellResult.result ? [newSpellResult.result] : []

  return {
    result: [...newGem, ...newRelic, ...newSpell],
    seed: newSpellResult.seed,
  }
}
