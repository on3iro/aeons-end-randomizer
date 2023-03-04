import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'WE',
    name: 'Megiera Bram',
    id: 'GateWitch',
    health: 70,
    difficulty: 7,
    expeditionRating: 4,
    additionalInfo: `
        <p>
          Gdy Megiera Bram przyspiesza przepływ czasu, 
          traci pięć żetonów Nemezis zamiast czterech.
        </p>
      `,
  },
  {
    expansion: 'WE',
    name: 'Pani Pustej Korony',
    id: 'HollowCrown',
    health: 1,
    difficulty: 5,
    expeditionRating: 3,
    additionalInfo: '',
  },
  {
    expansion: 'WE',
    name: 'Arcymag Zasłony',
    id: 'MagusOfCloaks',
    health: 35,
    difficulty: 7,
    expeditionRating: 3,
    additionalInfo: '',
  },
  {
    expansion: 'WE',
    name: 'Mroczny Tytan',
    id: 'UmbraTitan',
    health: 70,
    difficulty: 3,
    expeditionRating: 1,
    additionalInfo: '',
  },
]
