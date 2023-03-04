import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const aeonsEndData: IExpansion = {
  id: 'AE',
  name: 'Aeons End',
  wave: 'W1 - Aeons End',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
