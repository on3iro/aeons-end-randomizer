import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theRuinsData: IExpansion = {
  id: 'RU',
  name: 'The Ruins',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
