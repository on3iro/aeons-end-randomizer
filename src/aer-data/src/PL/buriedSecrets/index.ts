import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const buriedSecretsData: IExpansion = {
  id: 'BS',
  name: 'Pogrzebane Sekrety',
  wave: 'W3 - Legacy',
  type: 'mini',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
