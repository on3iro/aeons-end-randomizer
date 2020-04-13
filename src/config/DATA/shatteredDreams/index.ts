import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const shatteredDreamsData: IExpansion = {
  id: 'SD',
  name: 'Shattered Dreams',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}
