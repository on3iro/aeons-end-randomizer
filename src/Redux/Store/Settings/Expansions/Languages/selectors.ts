import { SelectedLanguagesStateSlice } from './types'
import { createSelector } from 'reselect'

const getLanguagesByExpansion = (state: SelectedLanguagesStateSlice) =>
  state.Settings.Expansions.Languages

const getExpansionId = (_: unknown, props: { expansionId: string }) =>
  props.expansionId

const getSelectedLanguageByExpansionId = createSelector(
  [getLanguagesByExpansion, getExpansionId],
  (languagesByExpansion, expansionId) => languagesByExpansion[expansionId]
)

export const selectors = {
  getLanguagesByExpansion,
  getSelectedLanguageByExpansionId,
}
