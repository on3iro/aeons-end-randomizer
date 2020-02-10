import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const outerDarkData: IExpansion = {
  id: 'OD',
  name: 'Outer Dark',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
