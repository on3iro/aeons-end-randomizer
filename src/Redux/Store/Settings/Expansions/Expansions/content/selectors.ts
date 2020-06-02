import { ExpansionContentStateSlice } from './types'
import { createSelector } from 'reselect'
import * as Languages from '../../Languages'

import { selectors as LanguageSelectors } from '../../Languages'
import { ContentStruct } from '../../helpers'
import { Expansion } from 'aer-types'

const getContent = (state: ExpansionContentStateSlice) =>
  state.Settings.Expansions.Expansions.content

const getId = (_: unknown, props: { expansionId: string }) => props.expansionId

export const getContentWithLanguageFallback = (
  languages: Languages.State,
  content: ContentStruct<Expansion>,
  id: string
) => {
  // Just get the corresponding expansion id from the english version
  const language = languages[content.ENG[id].id]

  return content[language][id] || content.ENG[id]
}

const getExpansionById = createSelector(
  [LanguageSelectors.getLanguagesByExpansion, getContent, getId],
  getContentWithLanguageFallback
)

export const selectors = {
  getContent,
  getExpansionById,
}
