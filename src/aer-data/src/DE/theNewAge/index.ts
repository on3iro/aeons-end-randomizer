import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { basicNemesisCards } from './basicNemesisCards'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const newAgeData: IExpansion = {
  id: 'NA',
  name: 'Ein neues Zeitalter',
  wave: 'W4 - Ein neues Zeitalter',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  treasures,
  basicNemesisCards,
  upgradedBasicNemesisCards,
}
