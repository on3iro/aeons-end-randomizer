import { State } from '../types'
import { actions } from '../actions'

export const cancelEditSetup = (
  state: State,
  action: ReturnType<typeof actions.cancelEdit>
) => {
  const id = action.payload

  const { [id]: setup, ...rest } = state.Custom.setups

  if (setup.isNew) {
    return {
      ...state,
      Custom: {
        ...state.Custom,
        setups: { ...rest },
      },
    }
  }

  return {
    ...state,
    Custom: {
      ...state.Custom,
      setups: {
        ...rest,
        [id]: {
          ...setup,
          isDirty: false,
        },
      },
    },
  }
}
