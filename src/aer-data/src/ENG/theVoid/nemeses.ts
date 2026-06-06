import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'TV',
    name: 'Knight Of Shackles',
    id: 'KnightOfShackles',
    health: 70,
    difficulty: 4,
    expeditionRating: 1,
    additionalInfo: '',
    fightFiveAdditionalInfo: `
    <p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.</p>
    <p>The nemesis starts with 20 additional life.</p>
    <p>SETUP: Unleash.</p>
    `,
  },
  {
    expansion: 'TV',
    name: 'Maiden Of Thorns',
    id: 'MaidenOfThorns',
    health: 80,
    difficulty: 4,
    expeditionRating: 3,
    additionalInfo: '',
  },
]
