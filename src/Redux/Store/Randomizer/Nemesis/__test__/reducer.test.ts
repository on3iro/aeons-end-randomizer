import * as types from 'aer-types/types'

import {
  State,
  initialState,
  Reducer,
  actions,
} from 'Redux/Store/Randomizer/Nemesis'

const availableNemeses: ReadonlyArray<types.Nemesis & { selected: boolean }> = [
  {
    expansion: 'AE',
    name: 'Carapace Queen',
    id: 'CarapaceQueen',
    health: 60,
    difficulty: 3,
    expeditionRating: 1,
    additionalInfo: '',
    selected: true,
  },
  {
    expansion: 'Depths',
    name: 'Horde-Crone',
    id: 'HordeCrone',
    health: 60,
    difficulty: 6,
    expeditionRating: 2,
    additionalInfo: '',
    selected: true,
  },
]

const mockNemesis: State = {
  id: 'TheWailing',
}

describe('Randomizer | Nemesis | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle SET_RANDOM', () => {
    const expected = {
      id: 'HordeCrone',
    }

    const result = Reducer(
      mockNemesis,
      actions.setRandomNemesis(availableNemeses, { seed: 'Test' })
    )

    expect(result).toEqual(expected)
  })
})
