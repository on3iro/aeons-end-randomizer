import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const talesOfOldGraveholdData: IExpansion = {
  id: 'TOG',
  name: 'Tales of Old Gravehold',
  wave: 'W8 - The Descent',
  type: 'mini',
  mages,
  cards,
  nemeses,
}
