import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TC',
    name: 'Electinium',
    id: 'Electinium',
    cost: 3,
	developCost: 2,
    effect: `
      <p>
	  When you gain this, place an
	  electrify token on any enemy.<br/><br/>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      </p>
      `,
    keywords: ['elemental token', 'develop'],
  },
  {
    type: 'Relic',
    expansion: 'TC',
    name: 'Magnetic Conduit',
    id: 'MagneticConduit',
    cost: 6,
	developCost: 4,
    effect: `
      <p>
      <b>Attach</b> this to any player's opened breach.<br/>
	  When a spell is cast from this breach, do
	  not discard that spell. You cannot cast
	  that spell again this casting phase.
      </p>
      `,
    keywords: ['develop', 'attach'],
  },
  {
    type: 'Relic',
    expansion: 'TC',
    name: 'Elemental Conduit',
    id: 'ElementalConduit',
    cost: 8,
	developCost: 5,
    effect: `
      <p>
      <b>Attach</b> this to any player's breach.<br/>
	  When a spell is cast from this breach,
	  place an elemental token on any enemy
	  before resolving that spell's effect.
      </p>
      `,
    keywords: ['develop', 'elemental token', 'attach'],
  },
  {
    type: 'Spell',
    expansion: 'TC',
    name: 'Expunge Essence',
    id: 'ExpungeEssence',
    cost: 5,
    effect: `
      <p>
      <b>Cast:</b> Remove an elemental token from an enemy. If you do, deal 6 damage to it.<br/>
	  <span class="or">OR</span><br/>
	  <b>Cast:</b> Place an immolate token on an enemy and deal 2 damage to it.
      </p>
      `,
    keywords: ['elemental token'],
  },
  {
    type: 'Spell',
    expansion: 'TC',
    name: 'Combust Legend',
    id: 'CombustLegend',
    cost: 4,
    effect: `
      <p>
      While prepped, after any player plays
	  a relic, place an <span class="aether">&AElig;</span> token on this.<br/>
	  <b>Cast:</b> Deal 3 damage. Gain all of the <span class="aether">&AElig;</span> tokens on this.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TC',
    name: 'Archaic Discharge',
    id: 'ArchaicDischarge',
    cost: 6,
    effect: `
      <p>
      While prepped, after you play a
	  relic, place a charge token on this.<br/>
	  <b>Cast:</b> Deal 4 damage. Deal an additional 2
	  damage for each charge token on this. Then,
	  discard all of the tokens placed on this.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TC',
    name: 'Memory Allocator',
    id: 'MemoryAllocator',
    cost: 8,
    effect: `
      <p>
	  <b>Cast:</b> Deal 6 damage. Set aside any
	  number of cards in hand. After drawing
	  cards during your draw phase, return
	  the set-aside cards to your hand.
      </p>
      `,
    keywords: [],
  },
]
