import { SnackbarsStateSlice, selectors } from '..'

const mockSnackbarsQueue: SnackbarsStateSlice = {
  Snackbars: {
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
  },
}

describe('Snackbars | selectors', () => {
  test('selectFirstSnackbarElement()', () => {
    const expected = {
      type: 'success',
      message: 'snackbar message',
    }

    const result = selectors.selectFirstSnackbarElement(mockSnackbarsQueue)

    expect(result).toEqual(expected)
  })
})
