import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theVoidData: IExpansion = {
  id: 'TV',
  name: 'Otchłań',
  wave: 'W2 - Wieczna Wojna',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
