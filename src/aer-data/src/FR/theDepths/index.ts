import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const depthsData: IExpansion = {
  id: 'Depths',
  name: 'Les Profondeurs',
  wave: '',
  type: 'mini',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
