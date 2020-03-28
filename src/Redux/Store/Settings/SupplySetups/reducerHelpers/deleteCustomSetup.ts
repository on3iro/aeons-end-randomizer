import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const deleteCustomSetup = (
  state: State,
  action: ReturnType<typeof actions.deleteCustomSetup>
) => {
  const id = action.payload

  const { [id]: setup, ...rest } = state.Custom.setups
  const newState = {
    ...state,
    Custom: {
      ids: state.Custom.ids.filter(customId => customId !== id),
      setups: { ...rest },
    },
  }

  return newStateWithDBWrite(newState)
}
