import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'O',
    name: 'Experiment 153',
    id: 'Experiment153',
    health: '*',
    difficulty: 3,
    expeditionRating: 1,
    additionalInfo: '',
  },
  {
    expansion: 'O',
    name: 'Thief Of Dreams',
    id: 'ThiefOfDreams',
    health: 80,
    difficulty: 4,
    expeditionRating: 2,
    additionalInfo: '',
  },
  {
    expansion: 'O',
    name: 'Risen Thrall',
    id: 'RisenThrall',
    health: 50,
    difficulty: 5,
    expeditionRating: 3,
    additionalInfo: '',
  },
  {
    expansion: 'O',
    name: 'Fountain Of Souls',
    id: 'FountainOfSouls',
    health: 70,
    difficulty: 8,
    expeditionRating: 4,
    additionalInfo: '',
    fightFiveAdditionalInfo: `
    <p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.</p>
    <p>SETUP: Two different players each suffer 2 damage.</p>
    `,
  },
]
