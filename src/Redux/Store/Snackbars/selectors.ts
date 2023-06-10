import { SnackbarsStateSlice } from './types'

const selectFirstSnackbarElement = (state: SnackbarsStateSlice) =>
  state.Snackbars.queue[0]

export const selectors = {
  selectFirstSnackbarElement,
}
