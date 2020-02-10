import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const legacyData: IExpansion = {
  id: 'Legacy',
  name: 'Legacy',
  type: 'standalone',
  nemeses,
  mages,
  cards,
}
