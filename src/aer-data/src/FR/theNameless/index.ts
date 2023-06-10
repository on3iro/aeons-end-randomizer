import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const namelessData: IExpansion = {
  id: 'Nameless',
  name: 'Les Sans-Noms',
  wave: "W1 - Aeon's End",
  type: 'mini',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
