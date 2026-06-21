import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TS',
    name: 'Chromia Sphere',
    id: 'ChromiaSphere',
    cost: 5,
	developCost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.</p>
	  <p>If there are two or more copies of this card in the Develop zone, gain an additional 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Gem',
    expansion: 'TS',
    name: 'Nebulae Fragment',
    id: 'NebulaeFragment',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.</p>
	  <p>Any ally may discard a Nebulae Fragment in hand. If they do,
	  that ally gains an <span class="aether">&AElig;</span> token
	  and may <b>Conjure</b> to an opened or closed breach.
      </p>
      `,
    keywords: ['conjure'],
  },
  {
    type: 'Relic',
    expansion: 'TS',
    name: 'Dreamer\'s Crown',
    id: 'DreamersCrown',
    cost: 3,
    effect: `
      <p>
	  Gain 1 charge and 2 pulse tokens.
	  <span class="or">OR</span>
      You may lose 4 pulse tokens to deal damage equal to your unspent <span class="aether">&AElig;</span>. Then lose all of your unspent <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Relic',
    expansion: 'TS',
    name: 'Stormspinner Wand',
    id: 'StormspinnerWand',
    cost: 8,
	developCost: 5,
    effect: `
      <p>
      When you Develop this, any ally may destroy a card in hand or discard pile.
	  </hr>
	  You and any ally each gain 1 charge for each card in that ally's hand that costs 2 <span class="aether">&AElig;</span> or more.
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Spell',
    expansion: 'TS',
    name: 'Boundless Fire',
    id: 'BoundlessFire',
    cost: 3,
    effect: `
      <p>
	  <b>Cast:</b> Deal 2 damage.
	  <br/>
	  Recall: Lose a charge to place this into your hand.
      </p>
      `,
    keywords: ['recall'],
  },
  {
    type: 'Spell',
    expansion: 'TS',
    name: 'Cosmic Pulse',
    id: 'CosmicPulse',
    cost: 6,
    effect: `
      <p>
	  While prepped, any number of spells
	  may be conjured to this breach.</p>
	  <p>While prepped, once per turn during your main phase, you may <b>Conjure.</b></p>
	  <p><b>Cast:</b> Deal 3 damage.
      </p>
      `,
    keywords: ['conjure'],
  },
  {
    type: 'Spell',
    expansion: 'TS',
    name: 'Obliterating Arc',
    id: 'ObliteratingArc',
    cost: 7,
    effect: `
      <p>
	  <b>Cast:</b> Deal 7 damage.</p>
	  <p>Destroy a card from the Obliterating Arc supply pile. If you can't, suffer 2 damage.
      </p>
      `,
    keywords: [],
  },
]
