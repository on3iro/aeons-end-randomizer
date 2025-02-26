import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const legacyData: IExpansion = {
  id: 'Legacy',
  name: 'Legacy',
  wave: 'W3 - Legacy',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
