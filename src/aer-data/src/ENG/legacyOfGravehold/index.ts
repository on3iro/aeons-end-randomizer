import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const legacyOfGraveholdData: IExpansion = {
  id: 'LOG',
  name: 'Legacy of Gravehold',
  wave: 'W6 - The Legacy of Gravehold',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
  upgradedBasicNemesisCards,
}
