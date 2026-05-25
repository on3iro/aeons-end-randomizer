import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'AE',
    name: 'Carapace Queen',
    id: 'CarapaceQueen',
    health: 60,
    difficulty: 3,
    expeditionRating: 1,
    additionalInfo: '',
    fightFiveAdditionalInfo: `
    <p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.</p>
    <p>The nemesis starts with 15 additional life.</p>
    <p>Place Endless Throng on top of the nemesis deck instead of shuffling it into Tier 1.</p>
    <p>Play using Increased Difficulty.</p>
    `,
  },
  {
    expansion: 'AE',
    name: 'Crooked Mask',
    id: 'CrookedMask',
    health: 70,
    difficulty: 5,
    expeditionRating: 2,
    additionalInfo: '',
    fightFiveAdditionalInfo: `
    <p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.</p>
    <p>The nemesis starts with 10 additional life.</p>
    <p>Play using Increased Difficulty.</p>
    `,
  },
  {
    expansion: 'AE',
    name: 'Prince Of Gluttons',
    id: 'PrinceOfGluttons',
    health: 70,
    difficulty: 5,
    expeditionRating: 2,
    additionalInfo: '',
  },
  {
    expansion: 'AE',
    name: 'Rageborne',
    id: 'Rageborne',
    health: 70,
    difficulty: 2,
    expeditionRating: 1,
    additionalInfo: '',
  },
]
