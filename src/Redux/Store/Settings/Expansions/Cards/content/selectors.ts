import { CardsContentStateSlice } from './types'
import { createSelector } from 'reselect'

import { selectors as LanguageSelectors } from '../../Languages'
import { getContentByIdWithLanguageFallback } from '../../helpers'

const getContent = (state: CardsContentStateSlice) =>
  state.Settings.Expansions.Cards.content

const getId = (_: unknown, props: { id: string }) => props.id

const getById = createSelector(
  [LanguageSelectors.getLanguagesByExpansion, getContent, getId],
  getContentByIdWithLanguageFallback
)

export const selectors = {
  getContent,
  getById,
}
