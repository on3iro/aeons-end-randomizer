import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TR',
    name: 'Coiled Trillium',
    id: 'CoiledTrillium',
    cost: 4,
	developCost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.</p>
	  <p>Any ally may discard a Coiled Trillium in hand. If they do, they gain 2 <span class="aether">&AElig;</span> tokens and 1 charge.
      </p>
      `,
    keywords: ['aether token', 'develop'],
  },
  {
    type: 'Gem',
    expansion: 'TR',
    name: 'Ice-Dusted Jewel',
    id: 'IceDustedJewel',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span> and 1 pulse token.</p>
	  <span class="or">OR</span>
	  <p>You may lose 5 pulse tokens to cast any player's prepped spell without discarding it.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Relic',
    expansion: 'TR',
    name: 'Book of Before',
    id: 'BookOfBefore',
    cost: 6,
    effect: `
      <p>
      <b>Attach</b> this to any player's breach.</p>
	  <p>When a spell is cast from this breach,
	  Gravehold gains 1 life.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'TR',
    name: 'Pact Prism',
    id: 'PactPrism',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span> tokens at the end of your turn.</p>
	  <p>Any ally may discard a Pact Prism in hand and draw a card.
	  If they do, you gain 1 life.
      </p>
      `,
    keywords: ['aether token'],
  },
  {
    type: 'Relic',
    expansion: 'TR',
    name: 'Visionary Staff',
    id: 'VisionaryStaff',
    cost: 5,
    effect: `
      <p>
      Any ally draws three cards and discards two cards in hand.
	  <span class="or">OR</span>
	  Resolve a <b>Recall:</b> effect in any player's discard pile two times.
	  <br/>Recall: Gain a charge.
      </p>
      `,
    keywords: ['recall'],
  },
  {
    type: 'Spell',
    expansion: 'TR',
    name: 'Infernal Cascade',
    id: 'InfernalCascade',
    cost: 5,
    effect: `
      <p>
	  <b>Cast:</b> Deal 2 damage. You may cast any player's prepped spell
	  that costs 2 <span class="aether">&AElig;</span> or less
	  without discarding it. Then, cast it again.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TR',
    name: 'Torrential Spike',
    id: 'TorrentialSpike',
    cost: 4,
    effect: `
      <p>
	  <b>Cast:</b> Deal 3 damage.</p>
	  <p>Any ally may reveal the top card of their deck. If
	  they revealed a spell, that player places that card
	  into their hand.
      </p>
      `,
    keywords: [],
  },
]
