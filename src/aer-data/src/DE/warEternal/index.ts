import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const warEternalData: IExpansion = {
  id: 'WE',
  name: 'Für die Ewigkeit',
  wave: 'W2-BA - Für die Ewigkeit',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
