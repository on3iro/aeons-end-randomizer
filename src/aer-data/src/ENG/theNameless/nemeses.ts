import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'Nameless',
    name: 'Blight Lord',
    id: 'BlightLord',
    health: 70,
    difficulty: 4,
    expeditionRating: 2,
    additionalInfo: '',
    fightFiveAdditionalInfo: `
    <p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.
       The unleash from this card resolves after checking to see if the Tainted Track advances.</p>
    <p>SETUP: Gravehold suffers 5 damage. Two different players each suffer 2 damage.</p>
    `,
  },
  {
    expansion: 'Nameless',
    name: 'Wayward One',
    id: 'WaywardOne',
    health: 60,
    difficulty: 7,
    expeditionRating: 3,
    additionalInfo: '',
  },
]
