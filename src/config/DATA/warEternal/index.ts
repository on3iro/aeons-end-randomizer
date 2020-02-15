import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const warEternalData: IExpansion = {
  id: 'WE',
  name: 'War Eternal',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
