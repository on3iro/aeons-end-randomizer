import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const toggleSetup = (
  state: State,
  action: ReturnType<typeof actions.toggleSetup>
) => {
  const { setup, setupType } = action.payload
  const newState = {
    ...state,
    [setupType]: {
      ...state[setupType],
      setups: {
        ...state[setupType].setups,
        [setup]: {
          ...state[setupType].setups[setup],
          active: !state[setupType].setups[setup].active,
        },
      },
    },
  }

  return newStateWithDBWrite(newState)
}
