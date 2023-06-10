import { State } from 'Redux/Store/Randomizer/BasicNemesisCards/PlayerCount/types'
import { actions } from 'Redux/Store/Randomizer/BasicNemesisCards/PlayerCount/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Randomizer/BasicNemesisCards/PlayerCount/reducer'

const mockPlayerCountState: State = 2

describe('Randomizer | BasicNemesisCards | PlayerCount | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle SET', () => {
    const result = Reducer(mockPlayerCountState, actions.setCount(3))

    expect(result).toBe(3)
  })
})
