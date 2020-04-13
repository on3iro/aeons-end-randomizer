import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const outerDarkData: IExpansion = {
  id: 'OD',
  name: 'Outer Dark',
  type: 'mini',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
