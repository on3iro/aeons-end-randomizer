import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theDepthsData: IExpansion = {
  id: 'Depths',
  name: 'The Depths',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
