import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const intoTheWildData: IExpansion = {
  id: 'IW',
  name: 'Tajemnica Dziczy',
  wave: 'W4 - Nowy Początek',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}
