import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'NA',
    name: 'Maggoth',
    id: 'Maggoth',
    health: 45,
    difficulty: 3,
    expeditionRating: 1,
    additionalInfo: '',
  },
  {
    expansion: 'NA',
    name: 'Arachnos',
    id: 'Arachnos',
    health: 70,
    difficulty: 4,
    expeditionRating: 2,
    additionalInfo: '',
    fightFiveAdditionalInfo: `
    <p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.</p>
    <p>The nemesis starts with 15 additional life.</p>
    <p>SETUP: Gravehold suffers 4 damage.
       Two different players each suffer 2 damage.
       Arachnos gains four nemesis tokens.
       Unleash twice.</p>
    `,
  },
  {
    expansion: 'NA',
    name: 'Ageless Walker',
    id: 'AgelessWalker',
    health: 80,
    difficulty: 5,
    expeditionRating: 3,
    additionalInfo: '',
  },
  {
    expansion: 'NA',
    name: 'Fenrix',
    id: 'Fenrix',
    health: 60,
    difficulty: 7,
    expeditionRating: 4,
    additionalInfo: '',
  },
]
