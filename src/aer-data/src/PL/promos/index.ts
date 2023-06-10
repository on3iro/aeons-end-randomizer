import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { basicNemesisCards } from './basicNemesisCards'

export const promosData: IExpansion = {
  id: 'promos',
  name: 'Promos',
  wave: 'Dalej',
  type: 'promo',
  mages,
  nemeses,
  cards,
  treasures,
  basicNemesisCards,
}
