import { IExpansion } from 'aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const warEternalData: IExpansion = {
  id: 'WE',
  name: 'Wieczna Wojna',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
