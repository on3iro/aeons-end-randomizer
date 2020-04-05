import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const depthsData: IExpansion = {
  id: "Depths",
  name: "Les Profondeurs",
  type: "mini",
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
