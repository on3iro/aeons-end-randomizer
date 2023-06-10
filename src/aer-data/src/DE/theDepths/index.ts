import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theDepthsData: IExpansion = {
  id: 'Depths',
  name: 'Aus den Tiefen',
  wave: 'W1-E1 - Aeons End',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
