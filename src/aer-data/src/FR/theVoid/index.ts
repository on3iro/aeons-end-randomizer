import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theVoidData: IExpansion = {
  id: 'TV',
  name: 'Le Vide',
  wave: 'W2 - Guerre éternelle',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
