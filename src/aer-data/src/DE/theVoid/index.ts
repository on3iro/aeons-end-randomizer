import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theVoidData: IExpansion = {
  id: 'TV',
  name: 'Die Leere',
  wave: 'W2-E2 - Für die Ewigkeit',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
