import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const originsData: IExpansion = {
  id: 'ORI',
  name: 'Origins',
  wave: 'W7 - Past and Future',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}
