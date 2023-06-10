import { UpgradedBasicNemesisCardContentStateSlice } from './types'
import { createSelector } from 'reselect'

import { selectors as LanguageSelectors } from '../../Languages'
import { getContentByIdWithLanguageFallback } from '../../helpers'

const getContent = (state: UpgradedBasicNemesisCardContentStateSlice) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards.content

const getId = (_: unknown, props: { id: string }) => props.id

const getById = createSelector(
  [LanguageSelectors.getLanguagesByExpansion, getContent, getId],
  getContentByIdWithLanguageFallback
)

export const selectors = {
  getContent,
  getById,
}
