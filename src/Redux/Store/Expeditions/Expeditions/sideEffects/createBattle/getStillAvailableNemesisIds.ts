import * as types from 'aer-types/types'

export const getStillAvailableNemesisIds = (
  availableNemeses: Array<types.Nemesis>,
  previousNemeses: string[],
  nemesisTier: types.NemesisTier
) => {
  return availableNemeses
    .filter(nemesisTier === 5 ?
      (nemesis) => nemesis.fightFiveAdditionalInfo !== undefined :
      (nemesis) => nemesis.expeditionRating === nemesisTier)
    .map((nemesis) => nemesis.id)
    .filter((nemesisId) => !previousNemeses.includes(nemesisId))
}
