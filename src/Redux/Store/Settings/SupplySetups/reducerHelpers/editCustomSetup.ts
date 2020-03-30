import { State } from '../types'
import { actions } from '../actions'

export const editCustomSetup = (
  state: State,
  action: ReturnType<typeof actions.editCustomSetup>
) => {
  const id = action.payload

  return {
    ...state,
    Custom: {
      ...state.Custom,
      setups: {
        ...state.Custom.setups,
        [id]: {
          ...state.Custom.setups[id],
          isDirty: true,
        },
      },
    },
  }
}
