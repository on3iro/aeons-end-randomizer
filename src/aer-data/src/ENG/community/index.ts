import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const communityData: IExpansion = {
  id: 'community',
  name: 'Community',
  type: 'promo',
  mages,
  nemeses,
  cards,
}
