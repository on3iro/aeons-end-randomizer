import { State } from '../types'
import { newStateWithDBWrite, allSetsAreSelected } from '../helpers'

export const toggleAll = (state: State) => {
  const allSetsSelected = allSetsAreSelected(state)
  const updatedPredefined = Object.values(state.Predefined.setups).reduce(
    (acc, setup) => ({
      ...acc,
      [setup.id]: {
        ...setup,
        active: setup.default ? true : !allSetsSelected,
      },
    }),
    {}
  )
  const updatedCustom = Object.values(state.Custom.setups).reduce(
    (acc, setup) => ({
      ...acc,
      [setup.id]: { ...setup, active: !allSetsSelected },
    }),
    {}
  )
  const newState = {
    Predefined: {
      ...state.Predefined,
      setups: updatedPredefined,
    },
    Custom: {
      ...state.Custom,
      setups: updatedCustom,
    },
    migrationVersion: state.migrationVersion,
  }

  return newStateWithDBWrite(newState)
}
