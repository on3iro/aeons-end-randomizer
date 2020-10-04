import * as types from 'aer-types/types'

export const getStillAvailableNemesisIds = (
  availableNemeses: Array<{
    id: string
    expeditionRating: types.ExpeditionRating
  }>,
  previousNemeses: string[],
  nemesisTier: types.NemesisTier
) => {
  return availableNemeses
    .filter((nemesis) => nemesis.expeditionRating === nemesisTier)
    .map((nemesis) => nemesis.id)
    .filter((nemesisId) => !previousNemeses.includes(nemesisId))
}
