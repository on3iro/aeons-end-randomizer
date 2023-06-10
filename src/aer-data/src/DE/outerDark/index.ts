import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const outerDarkData: IExpansion = {
  id: 'OD',
  name: 'Hinter der Finsternis',
  wave: 'W2-E1 - Für die Ewigkeit',
  type: 'mini',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
