import { sortByCardType } from 'helpers'

import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const saveCustomSetup = (
  state: State,
  action: ReturnType<typeof actions.saveCustomSetup>
) => {
  const setup = action.payload
  // Because we currently do not have a specific mapping from Blueprints
  // to actual cards in the supply it is important,
  // that we keep the order of Gem -> Relic -> Spell for supply sets.
  // TODO is this still the case? \ Theo
  const tiles = [...setup.tiles].sort(sortByCardType)

  const ids = setup.isNew ? [setup.id, ...state.Custom.ids] : state.Custom.ids

  const newState = {
    ...state,
    Custom: {
      ...state.Custom,
      setups: {
        ...state.Custom.setups,
        [setup.id]: {
          ...setup,
          tiles,
          isNew: false,
          isDirty: false,
        },
      },
      ids,
    },
  }

  return newStateWithDBWrite(newState)
}
