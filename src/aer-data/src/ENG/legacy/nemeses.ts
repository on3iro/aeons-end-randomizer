import { Nemesis } from '../../../../aer-types/types'

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
    fightFiveAdditionalInfo: `
    <p>During setup, swap one of the nemesis turn order cards for the Unleash turn order card.</p>
    <p>Play using Increased Difficulty.</p>
    `,
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
    fightFiveAdditionalInfo: `
    <p>SETUP: After the spell deck is set up, destroy the top three cards of the spell deck. 
       Then, the nemesis Concentrates three times.</p>
    `
  },
]
