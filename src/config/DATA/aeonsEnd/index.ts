import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const aeonsEndData: IExpansion = {
  id: 'AE',
  name: 'Aeons End',
  type: 'standalone',
  nemeses,
  mages,
  cards,
}
