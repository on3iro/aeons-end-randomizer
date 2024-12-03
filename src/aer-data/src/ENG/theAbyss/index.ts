import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const theAbyssData: IExpansion = {
  id: 'AB',
  name: 'The Abyss',
  wave: 'W8 - The Descent',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}