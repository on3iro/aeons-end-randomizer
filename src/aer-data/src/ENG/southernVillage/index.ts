import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'

export const southernVillageData: IExpansion = {
  id: 'SV',
  name: 'Southern Village',
  wave: 'W5 - Outcasts',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
}
