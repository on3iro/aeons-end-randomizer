import { IExpansion } from 'aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const outerDarkData: IExpansion = {
  id: 'OD',
  name: 'Niezbadany Mrok',
  type: 'mini',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
