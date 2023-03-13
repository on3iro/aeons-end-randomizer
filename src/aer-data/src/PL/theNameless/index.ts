import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theNamelessData: IExpansion = {
  id: 'Nameless',
  name: 'Bezimienni',
  wave: 'W1 - Aeons End',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
