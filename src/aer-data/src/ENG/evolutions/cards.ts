import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'EVO',
    name: 'Feeding Lichen',
    id: 'FeedingLichen',
    cost: 5,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      If the nemesis tier is 2 or higher, draw an additional card
      at the end of this turn.<br/>
      Develop cost: 3
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Relic',
    expansion: 'EVO',
    name: 'Fall Lantern',
    id: 'FallLantern',
    cost: 5,
    effect: `
      <p>
      When you Develop this, deal 2 damage.<br/>
      Attach this to any player's breach.
      When a spell is cast from this breach, any ally may prep a spell to one of their closed or opened breaches.<br/>
      Develop cost: 4
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Relic',
    expansion: 'EVO',
    name: 'Crescent Greave',
    id: 'CrescentGreave',
    cost: 8,
    effect: `
      <p>
      When you Develop this, draw an additional card at the end of this turn.<br/>
      Gain 2 charges.<br/>
      Draw an additional card at the end of this turn.<br/>
      Develop cost: 5
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'EVO',
    name: 'Reflecting Current',
    id: 'ReflectingCurrent',
    cost: 6,
    effect: `
      <p>
        While prepped, when you prep another spell, gain 1 <span class="aether">&AElig;</span>.<br/>
        <b>Cast:</b> Deal 4 damage.<br/>
      </p>
      `,
    keywords: [],
  },
]
