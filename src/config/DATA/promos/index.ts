import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const promosData: IExpansion = {
  id: 'promos',
  name: 'Promos',
  type: 'promo',
  mages,
  nemeses,
  cards,
  treasures,
}
