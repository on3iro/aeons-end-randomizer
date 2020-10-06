import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const returnToGraveholdData: IExpansion = {
  id: 'RTG',
  name: 'Return To Gravehold',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}
