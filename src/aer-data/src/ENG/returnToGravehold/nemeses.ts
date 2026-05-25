import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'RTG',
    name: 'Burrower',
    id: 'Burrower',
    health: 80,
    difficulty: 8,
    expeditionRating: 4,
    additionalInfo: '',
  },
  {
    expansion: 'RTG',
    name: 'Fortress',
    id: 'Fortress',
    health: 90,
    difficulty: 5,
    expeditionRating: 2,
    additionalInfo: '',
    fightFiveAdditionalInfo: `
    <p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.</p>
    <p>Play using Increased Difficulty.</p>
    `,
  },
]
