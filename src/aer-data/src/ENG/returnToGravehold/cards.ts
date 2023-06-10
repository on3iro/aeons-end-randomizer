import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Relic',
    expansion: 'RTG',
    name: 'Glass-Eyed Oracle',
    id: 'GlassEyedOracle',
    cost: 1,
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
        Destroy this and any number of copies of this card in hand. You may gain a card with cost 
        up to three times the number of copies destroyed.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RTG',
    name: 'Cleanse',
    id: 'Cleanse',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br />
        If you have 3 or less life, gain 1 life.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RTG',
    name: 'Memory Break',
    id: 'MemoryBreak',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br />
        You may destroy a card in hand. If you do, deal additional damage equal 
        to the cost of the destroyed card.
      </p>
    `,
    keywords: [],
  },
]
