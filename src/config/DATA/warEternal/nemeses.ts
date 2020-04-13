import { Nemesis } from 'aer-types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'WE',
    name: 'Gate Witch',
    id: 'GateWitch',
    health: 70,
    difficulty: 7,
    expeditionRating: 4,
    additionalInfo: `
        <p>
          When Gate Witch accelerates time, it loses five nemesis tokens 
          instead of four nemesis tokens.
        </p>
      `,
  },
  {
    expansion: 'WE',
    name: 'Hollow Crown',
    id: 'HollowCrown',
    health: 1,
    difficulty: 5,
    expeditionRating: 3,
    additionalInfo: '',
  },
  {
    expansion: 'WE',
    name: 'Magus Of Cloaks',
    id: 'MagusOfCloaks',
    health: 35,
    difficulty: 7,
    expeditionRating: 3,
    additionalInfo: '',
  },
  {
    expansion: 'WE',
    name: 'Umbra Titan',
    id: 'UmbraTitan',
    health: 70,
    difficulty: 3,
    expeditionRating: 1,
    additionalInfo: '',
  },
]
