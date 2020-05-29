import { ExpansionContentStateSlice } from './types'
import { createSelector } from 'reselect'

import { selectors as LanguageSelectors } from '../../Languages'

const getContent = (state: ExpansionContentStateSlice) =>
  state.Settings.Expansions.Expansions.content

const getId = (_: unknown, props: { expansionId: string }) => props.expansionId

const getExpansionById = createSelector(
  [LanguageSelectors.getLanguagesByExpansion, getContent, getId],
  (languages, content, id) => {
    // Just get the corresponding expansion id from the english version
    const language = languages[content.ENG[id].id]

    return content[language][id] || content.ENG[id]
  }
)

export const selectors = {
  getContent,
  getExpansionById,
}
