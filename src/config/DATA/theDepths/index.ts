import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theDepthsData: IExpansion = {
  id: 'Depths',
  name: 'Depths',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
