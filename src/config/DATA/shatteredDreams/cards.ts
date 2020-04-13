import { ICard } from 'aer-types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'SD',
    name: 'Olivinite',
    id: 'Olivinite',
    cost: 3,
    effect: `
      <p>
      Gain 2 aether.
        <span class="or">OR</span>
      Deal 1 damage to a minion.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'SD',
    name: 'Cache Glass',
    id: 'CacheGlass',
    cost: 4,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      If there is a Cache Glass in your discard pile, you may destroy a card 
      in your discard pile.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SD',
    name: 'Reflective Conduit',
    id: 'ReflectiveConduit',
    cost: 3,
    effect: `
      <p>
      <b>Attach</b> this to any player's breach.
      </p>
      <p>
      When a spell is cast from this breach, the player who cast that spell may 
      return it to their hand instead of discarding it. If they do, discard this.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'SD',
    name: 'Will Weaver',
    id: 'WillWeaver',
    cost: 7,
    effect: `
      <p>
      Gain 2 charges.<br/>
      After the next time you activate your ability this turn, deal 3 damage.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Breach Seeker',
    id: 'BreachSeeker',
    cost: 5,
    effect: `
      <p>
      <b>Echo</b>
      </p>
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Focus any ally's breach.
        </p>
      `,
    keywords: ['echo'],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Crescendo Ray',
    id: 'CrescendoRay',
    cost: 4,
    effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      Gain 1 <span class="aether">&AElig;</span> for each other spell you have 
        prepped.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Storm Vapors',
    id: 'StormVapors',
    cost: 4,
    effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      If there is another Storm Vapors in any player's discard pile, 
      focus any player's breach.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Mantra of Strength',
    id: 'MantraOfStrength',
    cost: 3,
    effect: `
      <p>
      <b>Cast:</b> Any player focuses their closed breach wich the highest 
      focus cost.<br/>
      Deal 1 damage.<br/>
      You may destroy this. If you do, deal 2 additional damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Embody Flame',
    id: 'EmbodyFlame',
    cost: 7,
    effect: `
      <p>
      <b>Cast:</b> Deal 5 damage.<br/>
      You may destroy a card in this card's supply pile. If you do deal 3 
      additional damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SD',
    name: 'Snap Ritual',
    id: 'SnapRitual',
    cost: 6,
    effect: `
      <p>
      While prepped once per turn during your main phase, you may discard 
      a card in hand to deal 2 damage.<br/>
        <b>Cast:</b> Deal 3 damage.
        </p>
        `,
    keywords: [],
  },
]
