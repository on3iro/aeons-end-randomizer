import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theVoidData: IExpansion = {
  id: 'TV',
  name: 'The Void',
  wave: 'W2 - War Eternal',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
