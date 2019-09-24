import { IExpansion } from '../../types'

export const intoTheWildData: IExpansion = {
  id: 'IW',
  name: 'Into The Wild',
  type: 'mini',
  nemeses: [
    {
      expansion: 'IW',
      name: 'Necroswarm',
      id: 'Necroswarm',
    },
  ],
  mages: [
    {
      expansion: 'IW',
      name: 'Inco',
      id: 'Inco',
    },
    {
      expansion: 'IW',
      name: 'Razra',
      id: 'Razra',
    },
  ],
  cards: [
    {
      type: 'Gem',
      expansion: 'IW',
      name: 'Jeweled Brain',
      id: 'JeweledBrain',
      cost: 3,
    },
    {
      type: 'Relic',
      expansion: 'IW',
      name: 'Blast Sphere',
      id: 'BlastSphere',
      cost: 8,
    },
    {
      type: 'Spell',
      expansion: 'IW',
      name: 'Wound Mender',
      id: 'WoundMender',
      cost: 8,
    },
  ],
}
