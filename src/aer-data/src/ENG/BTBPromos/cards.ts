import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'BTBPromo',
    name: 'Comet Scrap',
    id: 'CometScrap',
    cost: 4,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.</p>
	  <p>Any ally may place a card in hand on top of your deck. If they do, gain 1 additional <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BTBPromo',
    name: 'Bell of Gravehold',
    id: 'BellOfGravehold',
    cost: 6,
    effect: `
      <p>
      Any player destroys any number of cards in hand and gains an <span class="aether">&AElig;</span> token for each card destroyed this way.
	  <br/>
	  Recall: Discard a card in hand. If you do, any ally gains 1 charge.
      </p>
      `,
    keywords: ['aether token'],
  },
  {
    type: 'Spell',
    expansion: 'BTBPromo',
    name: 'Obsolescence',
    id: 'Obsolescence',
    cost: 8,
    effect: `
      <p>
	  While prepped, once per turn during your main phase, you may gain a trinket.</p>
	  <p><b>Cast:</b> Deal 1 damage. Destroy each other card in your discard pile and deck.
	  Deal an additional 2 damage for each card destroyed this way.
      </p>
      `,
    keywords: [],
  },
]
