import {
  State,
  initialState,
  Reducer,
  actions,
} from 'Redux/Store/Randomizer/Mages/Count'

const mockMagesCountState: State = 2

describe('Randomizer | Mages | Count | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle SET', () => {
    const result = Reducer(mockMagesCountState, actions.setCount(3))

    expect(result).toBe(3)
  })
})
