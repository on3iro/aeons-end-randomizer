import { IExpansion } from '../../../../aer-types/types'

import { cards } from './cards'
import { treasures } from './treasures'
import { basicNemesisCards } from './basicNemesisCards'

export const beyondTheBreachPromosData: IExpansion = {
  id: 'BTBPromo',
  name: 'Promos for Beyond the Breach',
  wave: 'W9 - Beyond the Breach',
  type: 'promo',
  mages: [],
  nemeses: [],
  cards,
  treasures,
  basicNemesisCards,
}
