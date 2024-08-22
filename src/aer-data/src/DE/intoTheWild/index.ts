import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const intoTheWildData: IExpansion = {
  id: 'IW',
  name: 'In die Wildnis',
  wave: 'W4 - Ein neues Zeitalter',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}
