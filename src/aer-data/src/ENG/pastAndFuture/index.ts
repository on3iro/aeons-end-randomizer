import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const pastAndFutureData: IExpansion = {
  id: 'PAF',
  name: 'Past and Future',
  wave: 'W7 - Past and Future',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  treasures,
}
