import { UpgradedBasicNemesisCardContentStateSlice } from './types'

const getContent = (state: UpgradedBasicNemesisCardContentStateSlice) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards.content

const getById = (
  state: UpgradedBasicNemesisCardContentStateSlice,
  props: { id: string }
) => state.Settings.Expansions.UpgradedBasicNemesisCards.content.ENG[props.id]

export const selectors = {
  getContent,
  getById,
}
