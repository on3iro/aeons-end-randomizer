import { SelectedGlobalLanguageStateSlice } from './types'

const getGlobalLanguageOfExpansions = (
  state: SelectedGlobalLanguageStateSlice
) => state.Settings.Expansions.GlobalLanguage

export const selectors = {
  getGlobalLanguageOfExpansions,
}
