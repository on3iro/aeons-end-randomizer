import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theVoidData: IExpansion = {
  id: 'TV',
  name: 'The Void',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
