import { Nemesis } from 'aer-types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'Legacy',
    name: 'Bladius',
    id: 'Bladius',
    health: 40,
    difficulty: 1,
    expeditionRating: 1,
    additionalInfo: '',
  },
  {
    expansion: 'Legacy',
    name: 'Deathmind',
    id: 'Deathmind',
    health: 80,
    difficulty: 6,
    expeditionRating: 4,
    additionalInfo: '',
  },
  {
    expansion: 'Legacy',
    name: 'Fungal Mesh',
    id: 'FungalMesh',
    health: 70,
    difficulty: 4,
    expeditionRating: 2,
    additionalInfo: '',
  },
  {
    expansion: 'Legacy',
    name: 'Maelstrom: Risen',
    id: 'MaelstromRisen',
    health: 65,
    difficulty: 8,
    expeditionRating: 4,
    additionalInfo: `
        <p>
          During setup, include two less upgraded basic nemesis cards in each tier.
        </p>
      `,
  },
  {
    expansion: 'Legacy',
    name: 'Spawning Horror',
    id: 'SpawningHorror',
    health: 50,
    difficulty: 3,
    expeditionRating: 1,
    additionalInfo: '',
  },
  {
    expansion: 'Legacy',
    name: 'Xaxos: Ascended',
    id: 'XaxosAscended',
    health: 90,
    difficulty: 9,
    expeditionRating: 4,
    additionalInfo: `
        <p>
          During setup, include three less upgraded basic nemesis cards in each tier.
        </p>
      `,
  },
]
