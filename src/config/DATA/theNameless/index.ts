import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theNamelessData: IExpansion = {
  id: 'Nameless',
  name: 'The Nameless',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
