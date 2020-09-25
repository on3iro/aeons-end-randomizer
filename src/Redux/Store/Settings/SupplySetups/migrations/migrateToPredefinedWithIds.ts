import { RootState } from 'Redux/Store'

import { State } from '../types'

export const migrateToPredefinedWithIds = (_: RootState, newState: State) => {
  return {
    Predefined: {
      ...newState.Predefined,
      setups: Object.values(newState.Predefined.setups).reduce((acc, setup) => {
        return {
          ...acc,
          [setup.id]: {
            ...setup,
            tiles: setup.tiles.map((tile, index) => ({ ...tile, id: index })),
          },
        }
      }, {}),
    },
    Custom: newState.Custom,
  }
}
