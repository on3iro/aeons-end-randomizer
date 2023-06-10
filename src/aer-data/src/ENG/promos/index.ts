import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { basicNemesisCards } from './basicNemesisCards'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const promosData: IExpansion = {
  id: 'promos',
  name: 'Promos',
  wave: 'Others',
  type: 'promo',
  mages,
  nemeses,
  cards,
  treasures,
  basicNemesisCards,
  upgradedBasicNemesisCards,
}
