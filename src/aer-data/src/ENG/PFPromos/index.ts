import { IExpansion } from '../../../../aer-types/types'

import { cards } from './cards'
import { treasures } from './treasures'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const pastAndFuturePromosData: IExpansion = {
  id: 'PFPromo',
  name: 'Promos for Past and Future',
  wave: 'W7 - Past And Future',
  type: 'promo',
  mages: [],
  nemeses: [],
  cards,
  treasures,
  upgradedBasicNemesisCards,
}
