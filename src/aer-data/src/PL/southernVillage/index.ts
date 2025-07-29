import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const southernVillageData: IExpansion = {
  id: 'SV',
  name: 'Wioska na Południu',
  wave: 'W5 - Wygnańcy',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}
