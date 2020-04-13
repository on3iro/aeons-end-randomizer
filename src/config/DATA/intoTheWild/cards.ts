import { ICard } from 'aer-types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'IW',
    name: 'Jeweled Brain',
    id: 'JeweledBrain',
    cost: 3,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>.
          <span class="or">OR</span>
          Gain 1 <span class="aether">&AElig;</span>. Return to your hand a 
          card in your discard pile that costs 0 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'IW',
    name: 'Blast Sphere',
    id: 'BlastSphere',
    cost: 8,
    effect: `
        <p>
          Cast any player's prepped spell three times without discarding it 
          and then destroy it.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'IW',
    name: 'Wound Mender',
    id: 'WoundMender',
    cost: 8,
    effect: `
        <p>
          <b>Echo</b>
        </p>
        <p>
          <b>Cast:</b> Deal 2 damage.<br/>
          If this was cast from an opened III or IV breach, gain 1 life.
        </p>
      `,
    keywords: ['echo'],
  },
]
