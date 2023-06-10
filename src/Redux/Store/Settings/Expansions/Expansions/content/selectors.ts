import { ExpansionContentStateSlice } from './types'
import { createSelector } from 'reselect'
import * as Languages from '../../Languages'
import * as Ids from '../ids'
import * as types from 'aer-types/types'

import { selectors as LanguageSelectors } from '../../Languages'
import { ContentStruct } from '../../helpers'

const getContent = (state: ExpansionContentStateSlice) =>
  state.Settings.Expansions.Expansions.content

const getId = (_: unknown, props: { expansionId: string }) => props.expansionId

export const getContentWithLanguageFallback = (
  languages: Languages.State,
  content: ContentStruct<types.Expansion>,
  id: string
) => {
  // Just get the corresponding expansion id from the english version
  const language = languages[content.ENG[id].id]

  return content[language][id] || content.ENG[id]
}

const getExpansionsWithLanguageFallback = createSelector(
  [getContent, Ids.selectors.getIds, LanguageSelectors.getLanguagesByExpansion],
  (content, ids, languages) => {
    let result: types.Expansions = {}
    ids.forEach(
      (id) =>
        (result[id] = getContentWithLanguageFallback(languages, content, id))
    )
    return result
  }
)

const getExpansionById = createSelector(
  [LanguageSelectors.getLanguagesByExpansion, getContent, getId],
  getContentWithLanguageFallback
)

export const selectors = {
  getContent,
  getExpansionsWithLanguageFallback,
  getExpansionById,
}
