import { State, initialState, Reducer, actions } from 'Redux/Store/Snackbars'

const mockSnackbarsQueue: State = {
  queue: [
    {
      type: 'success',
      message: 'snackbar message',
    },
    {
      type: 'error',
      message: 'snackbar message',
    },
  ],
}

describe('Snackbars | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle QUEUE', () => {
    const expected = {
      queue: [
        {
          type: 'success',
          message: 'snackbar message',
        },
        {
          type: 'error',
          message: 'snackbar message',
        },
        {
          type: 'default',
          message: 'snackbar message',
        },
      ],
    }

    const result = Reducer(
      mockSnackbarsQueue,
      actions.queue({
        type: 'default',
        message: 'snackbar message',
      })
    )

    expect(result).toEqual(expected)
  })

  it('should handle DEQUEUE', () => {
    const expected = {
      queue: [
        {
          type: 'error',
          message: 'snackbar message',
        },
      ],
    }

    const result = Reducer(mockSnackbarsQueue, actions.dequeue())

    expect(result).toEqual(expected)
  })
})
