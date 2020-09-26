import {
  State,
  AccordionStateSlice,
  initialState,
  Reducer,
  actions,
  selectors,
} from 'Redux/Store/Settings/Accordions'

describe('Settings | Accordions', () => {
  // SELECTORS
  test('getAccordionStateById()', () => {
    const mockAccordionState: AccordionStateSlice = {
      Settings: {
        Accordions: {
          expansions: false,
        },
      },
    }

    const result = selectors.getAccordionStateById(
      mockAccordionState,
      'expansions'
    )

    expect(result).toBe(false)
  })

  // REDUCER
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle TOGGLE', () => {
    const mockAccordionState: State = {
      expansions: false,
    }

    const expected = {
      expansions: true,
    }

    const result = Reducer(mockAccordionState, actions.toggle('expansions'))

    expect(result).toEqual(expected)
  })
})
