import * as types from 'types'

export const getStillAvailableNemesisIds = (
  availableNemeses: types.Nemesis[],
  previousNemeses: string[],
  nemesisTier: types.NemesisTier
) => {
  return availableNemeses
    .filter(nemesis => nemesis.expeditionRating === nemesisTier.tier)
    .map(nemesis => nemesis.id)
    .filter(nemesisId => !previousNemeses.includes(nemesisId))
}
