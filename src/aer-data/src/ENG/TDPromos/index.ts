import { IExpansion } from '../../../../aer-types/types'

import { cards } from './cards'
import { treasures } from './treasures'
import { banners } from './banners'

export const theDescentPromosData: IExpansion = {
  id: 'TDPromo',
  name: 'Promos for The Descent',
  wave: 'W8 - The Descent',
  type: 'promo',
  mages: [],
  nemeses: [],
  cards,
  treasures,
  banners,
}