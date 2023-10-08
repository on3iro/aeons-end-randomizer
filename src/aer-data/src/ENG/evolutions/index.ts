import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const evolutionsData: IExpansion = {
  id: 'EVO',
  name: 'Evolution',
  wave: 'W7 - Past And Future',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}
