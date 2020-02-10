import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const buriedSecretsData: IExpansion = {
  id: 'BS',
  name: 'Buried Secrets',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
