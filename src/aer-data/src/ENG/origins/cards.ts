import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'ORI',
    name: 'Rhodonix',
    id: 'Rhodonix',
    cost: 3,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      If this is the first Rhodonix you've played this turn,
      draw an additional card at the end of this turn.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'ORI',
    name: 'Lashing Sinew',
    id: 'LashingSinew',
    cost: 5,
    effect: `
      <p> When you prep this, draw an additional card at the end of this turn.
        <b>Cast:</b> Deal 2 damage.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'ORI',
    name: 'Propel',
    id: 'Propel',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 4 damage.<br/>
        If you place this into your discard
        pile, swap this card for Gather Force.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'ORI',
    name: 'Starfall',
    id: 'Starfall',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br/>
        Reveal the top three cards of your
        deck. You may prep a spell not named
        Starfall that is revealed this way.
      </p>
      `,
    keywords: [],
  },
]
